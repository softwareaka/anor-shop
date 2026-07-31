import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react'

import contactImage from '../../../assets/images/mercImage.jpg'

export default function ContactBooking() {
  return (
    <Container size={1300} py={80}>
      <Flex gap={20}>
        {/* Left Booking Card */}
        <Box
          w={420}
          p={35}
          bg="#A30041"
          style={{
            borderRadius: 18,
          }}
        >
          <Stack gap="lg">
            <Title order={2} c="white" ta="center">
              Book your car
            </Title>

            <Select
              placeholder="Car type"
              data={['BMW', 'Mercedes', 'Audi', 'Toyota', 'Tesla']}
            />

            <Select
              placeholder="Place of rental"
              data={['Tashkent', 'Namangan', 'Andijan', 'Samarkand']}
            />

            <Select
              placeholder="Place of return"
              data={['Tashkent', 'Namangan', 'Andijan', 'Samarkand']}
            />

            <DateInput
              placeholder="Rental date"
              rightSection={<IconCalendar size={18} />}
            />

            <DateInput
              placeholder="Return date"
              rightSection={<IconCalendar size={18} />}
            />

            <Button color="#FF9E0C" radius="md" size="md" fullWidth mt={10}>
              Book now
            </Button>
          </Stack>
        </Box>

        {/* Right Image */}
        <Box
          flex={1}
          style={{
            overflow: 'hidden',
            borderRadius: 18,
          }}
        >
          <Image src={contactImage} h={520} fit="cover" />
        </Box>
      </Flex>
    </Container>
  )
}
