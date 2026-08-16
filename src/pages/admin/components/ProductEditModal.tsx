import { useEffect } from 'react'
import {
  Modal,
  Group,
  Box,
  Stack,
  TextInput,
  NumberInput,
  Select,
  Textarea,
  Button,
  Text,
  Avatar,
  Paper,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { notifications } from '@mantine/notifications'
import { IconPlus, IconPencil, IconCheck, IconPhoto } from '@tabler/icons-react'

import { useCategories } from '@/entities/category/model/useCategories'
import {
  useCreateProduct,
  useUpdateProduct,
} from '../../../features/manage-product/model/useProductMutation'
import type { IProduct, IProductForm } from '../../../shared/types/product'

interface ProductEditModalProps {
  modalOpened: boolean
  setModalOpened: (opened: boolean) => void
  modalMode: 'create' | 'edit'
  productData?: IProduct | null
}

export const ProductEditModal = ({
  modalOpened,
  setModalOpened,
  modalMode,
  productData,
}: ProductEditModalProps) => {
  const { data: categories = [] } = useCategories()
  const createMutation = useCreateProduct()
  const updateMutation = useUpdateProduct()

  const isPending = createMutation.isPending || updateMutation.isPending

  const form = useForm<IProductForm>({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
    validate: {
      title: (v) =>
        v.trim().length < 2 ? 'Title must be at least 2 characters' : null,
      price: (v) => (v <= 0 ? 'Price must be greater than 0' : null),
    },
  })

  // Reset/populate form when modal opens or productData changes
  useEffect(() => {
    if (modalOpened) {
      if (modalMode === 'edit' && productData) {
        form.setValues({
          title: productData.title || '',
          price: productData.price || 0,
          description: productData.description || '',
          categoryId: productData.category?.id || 1,
          images: productData.images?.length
            ? productData.images
            : ['https://placehold.co/600x400'],
        })
      } else {
        form.reset()
      }
    }
  }, [modalOpened, modalMode, productData])

  const handleSubmit = (values: IProductForm) => {
    if (modalMode === 'create') {
      createMutation.mutate(values, {
        onSuccess: () => {
          notifications.show({
            title: 'Success',
            message: 'Product created successfully',
            color: 'green',
          })
          setModalOpened(false)
          form.reset()
        },
        onError: () => {
          notifications.show({
            title: 'Error',
            message: 'Failed to create product',
            color: 'red',
          })
        },
      })
    } else if (modalMode === 'edit' && productData) {
      updateMutation.mutate(
        { id: productData.id, data: values },
        {
          onSuccess: () => {
            notifications.show({
              title: 'Success',
              message: 'Product updated successfully',
              color: 'green',
            })
            setModalOpened(false)
            form.reset()
          },
          onError: () => {
            notifications.show({
              title: 'Error',
              message: 'Failed to update product',
              color: 'red',
            })
          },
        }
      )
    }
  }

  const categoryOptions = categories.map((cat) => ({
    value: String(cat.id),
    label: cat.name,
  }))

  const imageUrl = form.values.images[0] || ''

  return (
    <Modal
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
      title={
        <Group gap="xs">
          <Box
            style={{
              backgroundColor: '#fff0f5',
              color: '#A30041',
              padding: '6px',
              borderRadius: '8px',
              display: 'flex',
            }}
          >
            {modalMode === 'create' ? (
              <IconPlus size={18} />
            ) : (
              <IconPencil size={18} />
            )}
          </Box>
          <Text fw={700} fz={18}>
            {modalMode === 'create' ? 'Create Product' : 'Edit Product'}
          </Text>
        </Group>
      }
      radius="md"
      centered
      size="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md" mt="xs">
          {/* Image Preview Box */}
          <Paper
            p="md"
            withBorder
            style={{ borderStyle: 'dashed', backgroundColor: '#f8f9fa' }}
          >
            <Group justify="center" align="center">
              {imageUrl ? (
                <Group gap="md">
                  <Avatar src={imageUrl} size="xl" radius="md" />
                  <div>
                    <Text size="xs" fw={700}>
                      Product Image
                    </Text>
                    <Text size="xs" c="dimmed">
                      Preview available
                    </Text>
                  </div>
                </Group>
              ) : (
                <Stack align="center" gap={4}>
                  <IconPhoto size={32} color="#868e96" />
                  <Text size="xs" fw={600} c="dimmed">
                    Enter image URL below
                  </Text>
                </Stack>
              )}
            </Group>
          </Paper>

          <TextInput
            label="Product Title"
            placeholder="e.g. Wireless Headphones"
            required
            radius="md"
            {...form.getInputProps('title')}
          />

          <Group grow>
            <NumberInput
              label="Price ($)"
              placeholder="99.99"
              required
              radius="md"
              min={0}
              {...form.getInputProps('price')}
            />

            {categoryOptions.length > 0 && (
              <Select
                label="Category"
                placeholder="Select category"
                data={categoryOptions}
                value={String(form.values.categoryId)}
                onChange={(val) =>
                  form.setFieldValue('categoryId', Number(val))
                }
                radius="md"
              />
            )}
          </Group>

          <TextInput
            label="Image URL"
            placeholder="https://placehold.co/600x400"
            value={imageUrl}
            onChange={(e) =>
              form.setFieldValue('images', [e.currentTarget.value])
            }
            radius="md"
          />

          <Textarea
            label="Description"
            placeholder="Enter product details..."
            rows={3}
            radius="md"
            {...form.getInputProps('description')}
          />

          {/* Action buttons */}
          <Group justify="flex-end" mt="md">
            <Button
              variant="default"
              radius="md"
              onClick={() => setModalOpened(false)}
            >
              Cancel
            </Button>
            <Button
              color="anor"
              type="submit"
              loading={isPending}
              radius="md"
              leftSection={<IconCheck size={16} />}
            >
              {modalMode === 'create' ? 'Save Product' : 'Update Product'}
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  )
}
