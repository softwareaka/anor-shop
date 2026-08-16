import {
  Button,
  Container,
  Flex,
  Paper,
  Select,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { DateInput } from '@mantine/dates'

export const Hero = () => {
  return (
    <section>
      <Container size="1300" py={30}>
        <Paper bg="#A30041" radius={32} p={78}>
          <Flex justify={'space-between'} align="center">
            {/* Left Content */}
            <Stack maw={520} gap={32}>
              <Title order={1} c="white" size={60} fw={700}>
                Experience the road like never before
              </Title>

              <Text c="white" size="md" maw={430}>
                Aliquam adipiscing velit semper morbi. Purus non eu cursus
                porttitor tristique et gravida. Quis nunc interdum gravida
                ullamcorper.
              </Text>

              <Button color="orange" radius="md" w={150} size="md">
                View all cars
              </Button>
            </Stack>

            {/* Booking Form */}
            <Paper bg="white" radius="xl" shadow="md" p={32} w={360}>
              <Stack gap="md">
                <Title ta="center" order={2} size={34}>
                  Book your car
                </Title>

                <Select
                  placeholder="Car type"
                  data={['Sedan', 'SUV', 'Pickup', 'Minivan']}
                />

                <Select
                  placeholder="Place of rental"
                  data={['New York', 'London', 'Paris']}
                />

                <Select
                  placeholder="Place of return"
                  data={['New York', 'London', 'Paris']}
                />

                <DateInput placeholder="Rental date" />

                <DateInput placeholder="Return date" />

                <Button color="orange" radius="md" fullWidth mt="sm">
                  Book now
                </Button>
              </Stack>
            </Paper>
          </Flex>
        </Paper>
      </Container>
    </section>
  )
}
