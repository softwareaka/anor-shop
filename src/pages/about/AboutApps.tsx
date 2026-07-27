import {
  Container,
  Grid,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'

import phoneImage from '../../assets/images/phoneImage.png'
import appStoreLogo from '../../assets/images/appStoreImage.png'
import googlePlayLogo from '../../assets/images/googlePlayImage.png'

export const AboutApps = () => {
  return (
    <Container size="1300" py={100}>
      <Grid
        bg="#A30041"
        px={70}
        py={60}
        align="center"
        style={{
          borderRadius: 30,
          overflow: 'visible',
          position: 'relative',
        }}
      >
        {/* Left Side */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Image src={phoneImage} w={300} mx="auto" mt={-170} />
        </Grid.Col>

        {/* Right Side */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack gap="lg">
            <Text tt="uppercase" c="white" size="sm">
              Download our app
            </Text>

            <Title order={2} c="white" size={52}>
              Download our app
            </Title>

            <Text c="gray.3" maw={500}>
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
              semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
              vulputate. Nulla nam eget urna fusce vulputate at risus.
            </Text>

            <Group mt="md">
              <Image src={appStoreLogo} w={160} />

              <Image src={googlePlayLogo} w={160} />
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
