import { Box, Container, Flex, Image, Stack, Text, Title } from '@mantine/core'

import blog1 from '@/shared/assets/images/blurCarImage.png'

export default function ContactBlog() {
  return (
    <Container size={1300} py={80}>
      <Stack gap={50}>
        <Title order={1} ta="center" fw={800} style={{ fontSize: 48 }}>
          Latest blog posts & news
        </Title>

        <Flex justify="space-between" gap={24} wrap="wrap">
          {/* Card 1 */}
          <Box w={390}>
            <Image src={blog1} h={230} radius="lg" fit="cover" />

            <Stack gap={8} mt="md">
              <Text fw={700} size="xl">
                How To Choose The Right Car
              </Text>

              <Text c="dimmed" size="md">
                News / 12 April 2024
              </Text>
            </Stack>
          </Box>

          {/* Card 2 */}
          <Box w={390}>
            <Image src={blog1} h={230} radius="lg" fit="cover" />

            <Stack gap={8} mt="md">
              <Text fw={700} size="xl">
                Which plan is right for me?
              </Text>

              <Text c="dimmed" size="md">
                News / 12 April 2024
              </Text>
            </Stack>
          </Box>

          {/* Card 3 */}
          <Box w={390}>
            <Image src={blog1} h={230} radius="lg" fit="cover" />

            <Stack gap={8} mt="md">
              <Text fw={700} size="xl">
                Enjoy Speed, Choice & Total Control
              </Text>

              <Text c="dimmed" size="md">
                News / 12 April 2024
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  )
}
