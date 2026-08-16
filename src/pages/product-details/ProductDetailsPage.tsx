import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import {
  Container,
  Grid,
  Title,
  Text,
  Group,
  Stack,
  Image,
  Box,
  SimpleGrid,
  Paper,
  Button,
  ThemeIcon,
  Skeleton,
  Modal,
  TextInput,
  Select,
} from '@mantine/core'
import {
  IconManualGearbox,
  IconGasStation,
  IconDoor,
  IconSnowflake,
  IconUser,
  IconRoute,
  IconCircleCheckFilled,
  IconArrowLeft,
  IconCalendar,
} from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'
import { DateInput } from '@mantine/dates'

import { useProductById, useProducts } from '@/entities/products/model/useProducts'

export function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>()
  
  // If id is provided in route params, fetch that product; otherwise fallback to first product
  const { data: allProducts, isLoading: isAllLoading } = useProducts()
  const targetId = id || (allProducts && allProducts[0] ? String(allProducts[0].id) : null)
  
  const { data: product, isLoading: isProductLoading } = useProductById(targetId)
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isBooked, setIsBooked] = useState(false)

  // Sync main image when product loads
  useEffect(() => {
    if (product?.images && product.images.length > 0) {
      setSelectedImage(product.images[0])
    }
  }, [product])

  const isLoading = isProductLoading || (!product && isAllLoading)

  if (isLoading) {
    return (
      <Container size={1300} py={60}>
        <Skeleton height={40} width={200} mb="xl" radius="md" />
        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Skeleton height={40} width={250} mb="sm" />
            <Skeleton height={30} width={150} mb="xl" />
            <Skeleton height={320} radius="lg" mb="md" />
            <Group gap="md">
              <Skeleton height={80} width={100} radius="md" />
              <Skeleton height={80} width={100} radius="md" />
              <Skeleton height={80} width={100} radius="md" />
            </Group>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Skeleton height={30} width={220} mb="lg" />
            <SimpleGrid cols={3} spacing="md" mb="xl">
              {Array(6).fill(0).map((_, i) => (
                <Skeleton key={i} height={100} radius="md" />
              ))}
            </SimpleGrid>
            <Skeleton height={50} radius="md" mb="xl" />
            <Skeleton height={25} width={180} mb="md" />
            <SimpleGrid cols={2} spacing="md">
              {Array(6).fill(0).map((_, i) => (
                <Skeleton key={i} height={24} width={140} />
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    )
  }

  if (!product) {
    return (
      <Container size={1300} py={80} style={{ textAlign: 'center' }}>
        <Title order={2} mb="md">Product Details Not Found</Title>
        <Text c="dimmed" mb="xl">The requested car details could not be found.</Text>
        <Button component={Link} to="/vehicles" color="#A30041" radius="md">
          Back to Vehicles
        </Button>
      </Container>
    )
  }

  // Thumbnails gallery list (use product.images or fallbacks to ensure 3 thumbnails displayed)
  const mainImg = selectedImage || product.images?.[0] || 'https://placehold.co/600x400'
  const thumbnails = product.images && product.images.length > 0 
    ? product.images 
    : [mainImg, mainImg, mainImg]

  // Add dummy variants if less than 3 thumbnails exist
  const displayThumbnails = thumbnails.length >= 3 
    ? thumbnails.slice(0, 3) 
    : [...thumbnails, ...Array(3 - thumbnails.length).fill(mainImg)]

  const specs = [
    { icon: <IconManualGearbox size={24} />, label: 'Gear Box', value: 'Automat' },
    { icon: <IconGasStation size={24} />, label: 'Fuel', value: 'Petrol' },
    { icon: <IconDoor size={24} />, label: 'Doors', value: '2' },
    { icon: <IconSnowflake size={24} />, label: 'Air Conditioner', value: 'Yes' },
    { icon: <IconUser size={24} />, label: 'Seats', value: '5' },
    { icon: <IconRoute size={24} />, label: 'Distance', value: '500 km' },
  ]

  const equipmentList = [
    'ABS',
    'ABS',
    'Air Bags',
    'Air Bags',
    'Cruise Control',
    'Air Conditioner',
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsBookingOpen(false)
    setIsBooked(true)
    notifications.show({
      title: 'Booking Confirmed!',
      message: `Your reservation for ${product.title} has been successfully submitted.`,
      color: 'green',
    })
  }

  return (
    <section style={{ padding: '40px 0' }}>
      <Container size={1300} py={20}>
        {/* Back Link */}
        <Button
          component={Link}
          to="/vehicles"
          variant="subtle"
          color="gray"
          leftSection={<IconArrowLeft size={18} />}
          mb="lg"
          px={0}
        >
          Back to Vehicles
        </Button>

        <Grid gutter="xl" align="flex-start">
          {/* Left Column: Product Visuals */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xs">
              <Title order={1} fz={44} fw={800} c="#1A1A1A" style={{ letterSpacing: '-0.5px' }}>
                {product.title}
              </Title>

              <Group align="baseline" gap={6} mb="md">
                <Text fz={34} fw={800} c="#A30041">
                  ${product.price}
                </Text>
                <Text c="dimmed" fz={18} fw={500}>
                  / day
                </Text>
              </Group>

              {/* Main Display Image */}
              <Box
                bg="#FAFAFA"
                p="xl"
                style={{
                  borderRadius: 24,
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 340,
                }}
              >
                <Image
                  src={mainImg}
                  alt={product.title}
                  h={320}
                  w="100%"
                  fit="contain"
                  style={{ transition: 'all 0.3s ease' }}
                />
              </Box>

              {/* Thumbnail Selection Gallery */}
              <Group gap="md" mt="md">
                {displayThumbnails.map((imgSrc, idx) => {
                  const isSelected = mainImg === imgSrc
                  return (
                    <Paper
                      key={idx}
                      onClick={() => setSelectedImage(imgSrc)}
                      p={8}
                      bg="#FAFAFA"
                      radius="lg"
                      style={{
                        cursor: 'pointer',
                        border: isSelected ? '2px solid #A30041' : '2px solid transparent',
                        transition: 'all 0.2s ease',
                        width: 110,
                        height: 75,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        src={imgSrc}
                        h="100%"
                        w="100%"
                        fit="contain"
                        radius="md"
                      />
                    </Paper>
                  )
                })}
              </Group>
            </Stack>
          </Grid.Col>

          {/* Right Column: Technical Specification & Equipment */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <div>
                <Title order={2} fz={24} fw={700} c="#1A1A1A" mb="lg">
                  Technical Specification
                </Title>

                {/* 2x3 Specification Cards Grid */}
                <SimpleGrid cols={3} spacing="md">
                  {specs.map((spec, idx) => (
                    <Paper
                      key={idx}
                      bg="#F8F9FA"
                      p="lg"
                      radius="xl"
                      style={{ border: 'none' }}
                    >
                      <Stack gap={8}>
                        <ThemeIcon variant="transparent" c="#1A1A1A" size={28} p={0}>
                          {spec.icon}
                        </ThemeIcon>

                        <Text fw={700} fz={15} c="#1A1A1A" lh={1.2}>
                          {spec.label}
                        </Text>

                        <Text size="xs" c="dimmed" fw={500}>
                          {spec.value}
                        </Text>
                      </Stack>
                    </Paper>
                  ))}
                </SimpleGrid>

                {/* Main Action Button */}
                <Button
                  onClick={() => setIsBookingOpen(true)}
                  color="#A30041"
                  fullWidth
                  size="lg"
                  radius="md"
                  mt={32}
                  h={52}
                  fz={16}
                  fw={700}
                  style={{ boxShadow: '0 6px 20px rgba(163, 0, 65, 0.2)' }}
                >
                  {isBooked ? 'Reserved / Booked' : 'Rent a car'}
                </Button>
              </div>

              {/* Equipment Section */}
              <div>
                <Title order={3} fz={22} fw={700} c="#1A1A1A" mb="lg">
                  Car Equipment
                </Title>

                <SimpleGrid cols={2} spacing="md">
                  {equipmentList.map((item, idx) => (
                    <Group key={idx} gap="sm" align="center">
                      <IconCircleCheckFilled size={22} color="#A30041" />
                      <Text fw={600} fz={15} c="gray.7">
                        {item}
                      </Text>
                    </Group>
                  ))}
                </SimpleGrid>
              </div>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>

      {/* Interactive Rent Booking Modal */}
      <Modal
        opened={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title={<Title order={3}>Book {product.title}</Title>}
        radius="lg"
        centered
        padding="xl"
      >
        <form onSubmit={handleBookingSubmit}>
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={600}>Rate per day:</Text>
              <Text fw={800} c="#A30041" fz={20}>${product.price} / day</Text>
            </Group>

            <TextInput label="Full Name" placeholder="John Doe" required radius="md" />
            <TextInput label="Phone Number" placeholder="+998 90 123 45 67" required radius="md" />
            
            <Select
              label="Pickup Location"
              placeholder="Select location"
              data={['Tashkent Airport', 'City Center Office', 'Samarkand Branch']}
              defaultValue="Tashkent Airport"
              radius="md"
            />

            <DateInput
              label="Rental Date"
              placeholder="Pick rental date"
              rightSection={<IconCalendar size={18} />}
              required
              radius="md"
            />

            <DateInput
              label="Return Date"
              placeholder="Pick return date"
              rightSection={<IconCalendar size={18} />}
              required
              radius="md"
            />

            <Button type="submit" color="#A30041" radius="md" size="md" mt="md" fullWidth>
              Confirm Booking
            </Button>
          </Stack>
        </form>
      </Modal>
    </section>
  )
}
