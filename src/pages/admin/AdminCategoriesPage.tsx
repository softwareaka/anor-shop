import { useState } from 'react'
import {
  Title,
  Text,
  Group,
  Button,
  Table,
  Avatar,
  Badge,
  ActionIcon,
  Card,
  Modal,
  Stack,
  TextInput,
  Textarea,
  Box,
  Tooltip,
  Paper,
} from '@mantine/core'
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconPhoto,
  IconCheck,
  IconCategory,
} from '@tabler/icons-react'

export const AdminCategoriesPage = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create')
  const [deleteModalOpened, setDeleteModalOpened] = useState(false)

  const [categoryData, setCategoryData] = useState({
    title: '',
    image: '',
  })

  // Mock Categories list matching Table: images / title / actions
  const mockCategories = [
    {
      id: 1,
      title: 'Electronics & Gadgets',
      productCount: 540,
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Modern Furniture',
      productCount: 320,
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Home Decor & Living',
      productCount: 180,
      image:
        'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Fashion & Apparel',
      productCount: 280,
      image:
        'https://images.unsplash.com/photo-1445205170230-053b83016050?w=120&auto=format&fit=crop&q=80',
    },
    {
      id: 5,
      title: 'Accessories & Watches',
      productCount: 100,
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&auto=format&fit=crop&q=80',
    },
  ]

  const handleOpenCreate = () => {
    setModalMode('create')
    setCategoryData({ title: '', image: '' })
    setModalOpened(true)
  }

  const handleOpenEdit = (cat: (typeof mockCategories)[0]) => {
    setModalMode('edit')
    setCategoryData({ title: cat.title, image: cat.image })
    setModalOpened(true)
  }

  return (
    <Stack gap="lg">
      {/* Header */}
      <Group justify="space-between" align="flex-end">
        <div>
          <Title order={2} fw={800} style={{ letterSpacing: '-0.5px' }}>
            Categories Management
          </Title>
          <Text c="dimmed" size="sm">
            Organize catalog groupings and category media assets
          </Text>
        </div>

        <Button
          color="anor"
          size="sm"
          radius="md"
          leftSection={<IconPlus size={16} />}
          onClick={handleOpenCreate}
        >
          Create Category
        </Button>
      </Group>

      {/* Main Table Card */}
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
              All Categories
            </Text>
          </Group>
          <Text size="xs" c="dimmed" fw={600}>
            Total: {mockCategories.length} categories
          </Text>
        </Group>

        {/* Table: images / title / actions */}
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
            {mockCategories.map((cat) => (
              <Table.Tr key={cat.id}>
                {/* Images Column */}
                <Table.Td>
                  <Avatar
                    src={cat.image}
                    alt={cat.title}
                    radius="md"
                    size="lg"
                    style={{ border: '1px solid #e9ecef' }}
                  />
                </Table.Td>

                {/* Title Column */}
                <Table.Td>
                  <Group gap="sm">
                    <div>
                      <Text size="sm" fw={700}>
                        {cat.title}
                      </Text>
                      <Badge variant="light" color="gray" size="xs" mt={2}>
                        {cat.productCount} products assigned
                      </Badge>
                    </div>
                  </Group>
                </Table.Td>

                {/* Actions Column */}
                <Table.Td ta="right">
                  <Group gap={6} justify="flex-end">
                    <Tooltip label="Edit Category" withArrow>
                      <ActionIcon
                        variant="subtle"
                        color="blue"
                        radius="md"
                        onClick={() => handleOpenEdit(cat)}
                      >
                        <IconPencil size={18} />
                      </ActionIcon>
                    </Tooltip>

                    <Tooltip label="Delete Category" withArrow>
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        radius="md"
                        onClick={() => setDeleteModalOpened(true)}
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
      </Card>

      {/* CREATE & EDIT CATEGORY MODAL */}
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
              {modalMode === 'create' ? 'Create Category' : 'Edit Category'}
            </Text>
          </Group>
        }
        radius="md"
        centered
        size="md"
      >
        <Stack gap="md" mt="xs">
          {/* Image Upload Preview Box */}
          <Paper
            p="md"
            withBorder
            style={{ borderStyle: 'dashed', backgroundColor: '#f8f9fa' }}
          >
            <Group justify="center" align="center">
              {categoryData.image ? (
                <Group gap="md">
                  <Avatar src={categoryData.image} size="xl" radius="md" />
                  <div>
                    <Text size="xs" fw={700}>
                      Category Image
                    </Text>
                    <Text size="xs" c="dimmed">
                      Ready for display
                    </Text>
                  </div>
                </Group>
              ) : (
                <Stack align="center" gap={4}>
                  <IconPhoto size={32} color="#868e96" />
                  <Text size="xs" fw={600} c="dimmed">
                    Select or upload category cover image
                  </Text>
                </Stack>
              )}
            </Group>
          </Paper>

          <TextInput
            label="Category Title"
            placeholder="e.g. Electronics & Gadgets"
            defaultValue={categoryData.title}
            required
            radius="md"
          />

          <Textarea
            label="Category Description"
            placeholder="Brief summary of items in this category..."
            rows={2}
            radius="md"
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
              radius="md"
              leftSection={<IconCheck size={16} />}
              onClick={() => setModalOpened(false)}
            >
              {modalMode === 'create' ? 'Save Category' : 'Update Category'}
            </Button>
          </Group>
        </Stack>
      </Modal>

      {/* DELETE MODAL */}
      <Modal
        opened={deleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        title={<Text fw={700}>Delete Category</Text>}
        centered
        radius="md"
        size="sm"
      >
        <Stack gap="md">
          <Text size="sm">
            Are you sure you want to delete this category? Products inside may
            become uncategorized.
          </Text>
          <Group justify="flex-end">
            <Button
              variant="default"
              size="xs"
              radius="md"
              onClick={() => setDeleteModalOpened(false)}
            >
              Cancel
            </Button>
            <Button
              color="red"
              size="xs"
              radius="md"
              onClick={() => setDeleteModalOpened(false)}
            >
              Delete
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Stack>
  )
}
