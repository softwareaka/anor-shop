import { useState } from 'react'
import {
  Title,
  Text,
  Group,
  Button,
  TextInput,
  Select,
  Modal,
  Stack,
  NumberInput,
  Textarea,
} from '@mantine/core'
import { IconPlus, IconCheck } from '@tabler/icons-react'
import { useCreateProduct } from '../../hooks/useProductMutation'
import { useForm } from '@mantine/form'
import type { IProductForm } from '../../types/product'
import { ProductsTable } from './components/ProductsTable'

export const AdminProductsPage = () => {
  const { mutate, isPending } = useCreateProduct()
  const [modalOpened, setModalOpened] = useState(false)

  const form = useForm<IProductForm>({
    initialValues: {
      title: '',  
      price: 100,
      description: '',
      categoryId: 1,
      images: ['https://placehold.co/600x400'],
    },
    validate: {
      title: (v) => (v.trim().length < 2 ? 'Title is required' : null),
      price: (v) => (v <= 0 ? 'Price must be greater than 0' : null),
    },
  })
  const handleCreate = (values: IProductForm) => {
    mutate(values, {
      onSuccess: () => {
        setModalOpened(false)
        form.reset()
      },
    })
  }

  return (
    <Stack gap="lg">
      <Group justify="space-between" align="flex-end">
        <div>
          <Title order={2} fw={800}>
            Products Management
          </Title>
          <Text c="dimmed" size="sm">
            Manage store catalog
          </Text>
        </div>

        <Button
          color="anor"
          size="sm"
          radius="md"
          leftSection={<IconPlus size={16} />}
          onClick={() => setModalOpened(true)}
        >
          Create Product
        </Button>
      </Group>

      {/* Product Modal Form */}
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={<Text fw={700}>Create New Product</Text>}
        size="lg"
        radius="md"
        centered
      >
        <form onSubmit={form.onSubmit(handleCreate)}>
          <Stack gap="md">
            <TextInput
              label="Product Title"
              placeholder="e.g. Wireless Headphones"
              required
              {...form.getInputProps('title')}
            />

            <NumberInput
              label="Price ($)"
              placeholder="99.99"
              required
              {...form.getInputProps('price')}
            />

            <Select
              label="Category"
              data={[
                { value: '1', label: 'Clothes' },
                { value: '2', label: 'Electronics' },
                { value: '3', label: 'Furniture' },
                { value: '4', label: 'Shoes' },
              ]}
              value={String(form.values.categoryId)}
              onChange={(val) => form.setFieldValue('categoryId', Number(val))}
            />

            <TextInput
              label="Image URL"
              placeholder="https://placehold.co/600x400"
              value={form.values.images[0] || ''}
              onChange={(e) =>
                form.setFieldValue('images', [e.currentTarget.value])
              }
            />

            <Textarea
              label="Description"
              placeholder="Enter product details..."
              rows={3}
              {...form.getInputProps('description')}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={() => setModalOpened(false)}>
                Cancel
              </Button>
              <Button
                color="anor"
                type="submit"
                loading={isPending}
                leftSection={<IconCheck size={16} />}
              >
                Save Product
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>

      <ProductsTable />
    </Stack>
  )
}
