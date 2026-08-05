import { useState, useEffect } from 'react'
import {
  Text,
  Group,
  Table,
  Avatar,
  Badge,
  Card,
  Box,
  Loader,
  Center,
  Pagination,
  Tooltip,
  ActionIcon,
  Button,
} from '@mantine/core'
import {
  IconPackage,
  IconTrash,
  IconPencil,
  IconPlus,
} from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'

import { useProducts } from '../../../entities/products/model/useProducts'
import { useDeleteProduct } from '../../../features/manage-product/model/useProductMutation'
import { ProductEditModal } from './ProductEditModal'
import type { IProduct } from '../../../types/product'

export const ProductsTable = () => {
  const ITEMS_PER_PAGE = 5

  const [activePage, setActivePage] = useState(1)
  const { data = [], isLoading, isError } = useProducts()
  const deleteMutation = useDeleteProduct()

  const [modalOpened, setModalOpened] = useState(false)
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create')
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null)

  const totalPages = Math.max(1, Math.ceil(data.length / ITEMS_PER_PAGE))

  // Ensure active page stays within valid bounds when data changes
  useEffect(() => {
    if (activePage > totalPages) {
      setActivePage(totalPages)
    }
  }, [data.length, totalPages, activePage])

  const startIndex = (activePage - 1) * ITEMS_PER_PAGE
  const paginateData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handleOpenCreate = () => {
    setSelectedProduct(null)
    setModalMode('create')
    setModalOpened(true)
  }

  const handleOpenEdit = (product: IProduct) => {
    setSelectedProduct(product)
    setModalMode('edit')
    setModalOpened(true)
  }

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteMutation.mutate(id, {
        onSuccess: () => {
          notifications.show({
            title: 'Success',
            message: 'Product deleted successfully',
            color: 'green',
          })
        },
        onError: () => {
          notifications.show({
            title: 'Error',
            message: 'Failed to delete product',
            color: 'red',
          })
        },
      })
    }
  }

  if (isLoading) {
    return (
      <Center h={'50vh'}>
        <Loader color="red" />
      </Center>
    )
  }

  if (isError) {
    notifications.show({
      title: 'Error Occurred',
      message: 'Failed to load products. Please try again later.',
      color: 'red',
    })
    return null
  }

  return (
    <Card
      padding="lg"
      radius="md"
      withBorder
      style={{ borderColor: '#e9ecef' }}
    >
      <Group justify="space-between" mb="md">
        <Group gap="xs">
          <IconPackage color="#A30041" size={20} />
          <Text fw={700} size="md">
            All products
          </Text>
        </Group>

        <Group gap="md">
          <Text size="xs" c="dimmed" fw={600}>
            Total: {data.length} products
          </Text>
          <Button
            size="xs"
            color="anor"
            radius="md"
            leftSection={<IconPlus size={14} />}
            onClick={handleOpenCreate}
          >
            Add Product
          </Button>
        </Group>
      </Group>

      <Table verticalSpacing="md" horizontalSpacing="md" highlightOnHover>
        <Table.Thead style={{ backgroundColor: '#f8f9fa' }}>
          <Table.Tr>
            <Table.Th style={{ width: 80 }}>Image</Table.Th>
            <Table.Th>Title & Details</Table.Th>
            <Table.Th ta="right" style={{ width: 120 }}>
              Actions
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginateData.map((product) => (
            <Table.Tr key={product.id}>
              {/* Image Column */}
              <Table.Td>
                <Avatar
                  src={product.images?.[0]}
                  alt={product.title}
                  radius="md"
                  style={{ border: '1px solid #e9ecef' }}
                />
              </Table.Td>

              {/* Title & Details Column */}
              <Table.Td>
                <Group gap="sm">
                  <Box>
                    <Text size="sm" fw={700}>
                      {product.title}
                    </Text>
                    <Group gap={6} mt={2}>
                      <Badge variant="light" color="gray" size="xs">
                        {product.category?.name || 'Uncategorized'}
                      </Badge>
                      <Badge variant="light" color="green" size="xs">
                        ${product.price}
                      </Badge>
                    </Group>
                  </Box>
                </Group>
              </Table.Td>

              {/* Actions Column */}
              <Table.Td ta="right">
                <Group gap={6} justify="flex-end">
                  <Tooltip label="Edit Product" withArrow>
                    <ActionIcon
                      variant="subtle"
                      color="blue"
                      radius="md"
                      onClick={() => handleOpenEdit(product)}
                    >
                      <IconPencil size={18} />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label="Delete Product" withArrow>
                    <ActionIcon
                      variant="subtle"
                      color="red"
                      radius="md"
                      onClick={() => handleDelete(product.id)}
                      loading={deleteMutation.isPending}
                    >
                      <IconTrash size={18} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <ProductEditModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        modalMode={modalMode}
        productData={selectedProduct}
      />

      {totalPages > 1 && (
        <Group justify="center" mt="lg">
          <Pagination
            value={activePage}
            total={totalPages}
            onChange={setActivePage}
            color="#A30041"
            radius="md"
          />
        </Group>
      )}
    </Card>
  )
}
