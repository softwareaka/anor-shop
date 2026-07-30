import { useState } from 'react'
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
} from '@mantine/core'

import { IconCategory } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'

import { useProducts } from '../../../hooks/useProducts'

export const ProductsTable = () => {
  const ITEMS_PER_PAGE = 5

  const [activePage, setActivePage] = useState(1)
  const { data = [], isLoading, isError } = useProducts()

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
  const startIndex = (activePage - 1) * ITEMS_PER_PAGE
  const paginateData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE)

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
      message: 'Failed to load vehicles. Please try again later.',
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
          <IconCategory color="#A30041" size={20} />
          <Text fw={700} size="md">
            All products
          </Text>
        </Group>
        <Text size="xs" c="dimmed" fw={600}>
          Total: {data.length} products
        </Text>
      </Group>
      <Table verticalSpacing="md" horizontalSpacing="md" highlightOnHover>
        <Table.Thead style={{ backgroundColor: '#f8f9fa' }}>
          <Table.Tr>
            <Table.Th style={{ width: 80 }}>Images</Table.Th>
            <Table.Th>Title & Details</Table.Th>
            <Table.Th ta="right" style={{ width: 120 }}>
              Actions
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginateData.map((cat) => (
            <Table.Tr key={cat.id}>
              {/* Images Column */}
              <Table.Td>
                <Avatar
                  src={cat.images?.[0] || (cat as any).image}
                  alt={cat.title}
                  radius="md"
                  style={{ border: '1px solid #e9ecef' }}
                />
              </Table.Td>

              {/* Title Column */}
              <Table.Td>
                <Group gap="sm">
                  <Box>
                    <Text size="sm" fw={700}>
                      {cat.title}
                    </Text>
                    <Badge variant="light" color="gray" size="xs" mt={2}>
                      {cat.category?.name ||
                        ((cat as any).productCount !== undefined
                          ? `${(cat as any).productCount} products assigned`
                          : `$${cat.price}`)}
                    </Badge>
                  </Box>
                </Group>
              </Table.Td>

              {/* Actions Column */}
              <Table.Td ta="right">
                <Group gap={6} justify="flex-end"></Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

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
