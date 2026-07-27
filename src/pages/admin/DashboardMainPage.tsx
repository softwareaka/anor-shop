import {
  Grid,
  Card,
  Text,
  Group,
  SimpleGrid,
  ThemeIcon,
  Title,
  Badge,
  Table,
  Avatar,
  Paper,
  Progress,
  Stack,
  ActionIcon,
  Button,
} from '@mantine/core'
import {
  IconPackage,
  IconCategory,
  IconCurrencyDollar,
  IconTrendingUp,
  IconArrowUpRight,
  IconDotsVertical,
  IconEye,
  IconPlus,
  IconStar,
} from '@tabler/icons-react'
import { Link } from 'react-router'

export const DashboardMainPage = () => {
  const mockRecentProducts = [
    {
      id: 1,
      title: 'Premium Wireless Headphones',
      category: 'Electronics',
      price: '$199.99',
      stock: 45,
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Smart Fitness Watch Series 7',
      category: 'Electronics',
      price: '$299.00',
      stock: 28,
      image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 3,
      title: 'Ergonomic Leather Chair',
      category: 'Furniture',
      price: '$349.50',
      stock: 12,
      image:
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=100&auto=format&fit=crop&q=80',
    },
    {
      id: 4,
      title: 'Minimalist Ceramic Vase Set',
      category: 'Home Decor',
      price: '$45.00',
      stock: 80,
      image:
        'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=100&auto=format&fit=crop&q=80',
    },
  ]

  const categoryBreakdown = [
    { name: 'Electronics', count: 540, percentage: 38, color: 'anor' },
    { name: 'Furniture', count: 320, percentage: 22, color: 'blue' },
    { name: 'Fashion & Apparel', count: 280, percentage: 20, color: 'teal' },
    { name: 'Home & Living', count: 180, percentage: 13, color: 'orange' },
    { name: 'Accessories', count: 100, percentage: 7, color: 'grape' },
  ]

  return (
    <Stack gap="lg">
      {/* Header Banner */}
      <Group justify="space-between" align="flex-end">
        <div>
          <Title order={2} fw={800} style={{ letterSpacing: '-0.5px' }}>
            Dashboard Overview
          </Title>
          <Text c="dimmed" size="sm">
            Welcome back! Here is what's happening with Anor Shop today.
          </Text>
        </div>
        <Group gap="xs">
          <Button
            component={Link}
            to="/dashboard/products"
            color="anor"
            size="sm"
            radius="md"
            leftSection={<IconPlus size={16} />}
          >
            Add New Product
          </Button>
        </Group>
      </Group>

      {/* 3 Main Stat Cards */}
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md">
        {/* Card 1: Total Products */}
        <Paper p="xl" radius="md" withBorder style={{ borderColor: '#e9ecef' }}>
          <Group justify="space-between" align="flex-start" mb="xs">
            <div>
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Total Products
              </Text>
              <Title
                order={2}
                fw={800}
                fz={32}
                mt={4}
                style={{ letterSpacing: '-1px' }}
              >
                1,420
              </Title>
            </div>
            <ThemeIcon size={48} radius="md" color="anor" variant="light">
              <IconPackage size={26} />
            </ThemeIcon>
          </Group>
          <Group gap="xs" mt="sm">
            <Badge
              size="sm"
              color="teal"
              variant="light"
              leftSection={<IconTrendingUp size={12} />}
            >
              +12.4%
            </Badge>
            <Text size="xs" c="dimmed">
              vs last month (152 new added)
            </Text>
          </Group>
        </Paper>

        {/* Card 2: Total Categories */}
        <Paper p="xl" radius="md" withBorder style={{ borderColor: '#e9ecef' }}>
          <Group justify="space-between" align="flex-start" mb="xs">
            <div>
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Total Categories
              </Text>
              <Title
                order={2}
                fw={800}
                fz={32}
                mt={4}
                style={{ letterSpacing: '-1px' }}
              >
                38
              </Title>
            </div>
            <ThemeIcon size={48} radius="md" color="blue" variant="light">
              <IconCategory size={26} />
            </ThemeIcon>
          </Group>
          <Group gap="xs" mt="sm">
            <Badge
              size="sm"
              color="blue"
              variant="light"
              leftSection={<IconArrowUpRight size={12} />}
            >
              +4 new
            </Badge>
            <Text size="xs" c="dimmed">
              across 5 main departments
            </Text>
          </Group>
        </Paper>

        {/* Card 3: Average Price */}
        <Paper p="xl" radius="md" withBorder style={{ borderColor: '#e9ecef' }}>
          <Group justify="space-between" align="flex-start" mb="xs">
            <div>
              <Text
                size="xs"
                c="dimmed"
                fw={700}
                style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
              >
                Average Price
              </Text>
              <Title
                order={2}
                fw={800}
                fz={32}
                mt={4}
                style={{ letterSpacing: '-1px' }}
              >
                $248.50
              </Title>
            </div>
            <ThemeIcon size={48} radius="md" color="teal" variant="light">
              <IconCurrencyDollar size={26} />
            </ThemeIcon>
          </Group>
          <Group gap="xs" mt="sm">
            <Badge
              size="sm"
              color="teal"
              variant="light"
              leftSection={<IconTrendingUp size={12} />}
            >
              +5.8%
            </Badge>
            <Text size="xs" c="dimmed">
              catalog average value
            </Text>
          </Group>
        </Paper>
      </SimpleGrid>

      {/* Grid section for Recent Products and Category Breakdown */}
      <Grid>
        {/* Left: Recent Products Preview Table */}
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Card
            padding="lg"
            radius="md"
            withBorder
            style={{ borderColor: '#e9ecef' }}
          >
            <Group justify="space-between" mb="md">
              <div>
                <Title order={3} fz={18} fw={700}>
                  Top Featured Products
                </Title>
                <Text size="xs" c="dimmed">
                  Latest items in your Anor Shop inventory
                </Text>
              </div>
              <Button
                component={Link}
                to="/dashboard/products"
                variant="subtle"
                color="anor"
                size="xs"
                rightSection={<IconArrowUpRight size={14} />}
              >
                View All Products
              </Button>
            </Group>

            <Table verticalSpacing="sm">
              <Table.Thead>
                <Table.Tr style={{ borderBottom: '1px solid #f1f3f5' }}>
                  <Table.Th>Product</Table.Th>
                  <Table.Th>Category</Table.Th>
                  <Table.Th>Price</Table.Th>
                  <Table.Th>In Stock</Table.Th>
                  <Table.Th ta="right">Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {mockRecentProducts.map((item) => (
                  <Table.Tr key={item.id}>
                    <Table.Td>
                      <Group gap="sm">
                        <Avatar src={item.image} radius="sm" size={38} />
                        <Text size="sm" fw={600}>
                          {item.title}
                        </Text>
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Badge variant="light" color="gray" size="sm">
                        {item.category}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm" fw={700} style={{ color: '#A30041' }}>
                        {item.price}
                      </Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs" fw={500}>
                        {item.stock} pcs
                      </Text>
                    </Table.Td>
                    <Table.Td ta="right">
                      <ActionIcon variant="subtle" color="gray" size="sm">
                        <IconEye size={16} />
                      </ActionIcon>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Card>
        </Grid.Col>

        {/* Right: Category Distribution Breakdown */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            padding="lg"
            radius="md"
            withBorder
            style={{ borderColor: '#e9ecef' }}
            h="100%"
          >
            <Group justify="space-between" mb="md">
              <div>
                <Title order={3} fz={18} fw={700}>
                  Category Shares
                </Title>
                <Text size="xs" c="dimmed">
                  Inventory catalog distribution
                </Text>
              </div>
              <ActionIcon variant="subtle" color="gray">
                <IconDotsVertical size={16} />
              </ActionIcon>
            </Group>

            <Stack gap="md" mt="xs">
              {categoryBreakdown.map((cat) => (
                <div key={cat.name}>
                  <Group justify="space-between" mb={4}>
                    <Text size="xs" fw={600}>
                      {cat.name}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {cat.count} items ({cat.percentage}%)
                    </Text>
                  </Group>
                  <Progress
                    value={cat.percentage}
                    color={cat.color}
                    size="sm"
                    radius="xl"
                  />
                </div>
              ))}
            </Stack>

            <Paper p="sm" radius="md" bg="#f8f9fa" mt="xl">
              <Group gap="xs">
                <ThemeIcon radius="xl" color="yellow" size="sm">
                  <IconStar size={12} />
                </ThemeIcon>
                <Text size="xs" fw={600}>
                  Highest Performing Category: Electronics
                </Text>
              </Group>
            </Paper>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  )
}
