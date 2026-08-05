import {
  Card,
  Text,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Container,
  Group,
  Stack,
  Anchor,
  Box,
  Badge,
} from '@mantine/core'
import {
  IconLock,
  IconMail,
  IconArrowRight,
  IconShieldLock,
} from '@tabler/icons-react'
import { Link } from 'react-router'

import { useLogin } from '../features/auth-by-email/model/useLogin'
import { useForm } from '@mantine/form'
import type { ILoginPayload } from '../types/auth'

export const LoginPage = () => {
  const login = useLogin()

  const form = useForm<ILoginPayload>({
    initialValues: { email: 'john@mail.com', password: 'changeme' },

    validate: {
      email: (v) => {
        if (!v.trim()) return 'Email обязателен'
        return /^\S+@\S+\.\S+$/.test(v) ? null : 'Некорректный email'
      },
      password: (v) => (v.length < 4 ? 'Минимум 4 символа' : null),
    },
  })

  const handleLogin = async (values: ILoginPayload) => {
    await login.mutateAsync(values)
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Container size="xs" w={440}>
        <Stack align="center" mb={24} gap={8}>
          <Group gap={6}>
            <Box
              style={{
                background: '#A30041',
                color: '#ffffff',
                width: 44,
                height: 44,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 16px rgba(224, 49, 49, 0.25)',
              }}
            >
              <IconShieldLock size={26} />
            </Box>
          </Group>
          <Title order={1} fz={28} fw={800} style={{ letterSpacing: '-0.5px' }}>
            Anor Shop Admin
          </Title>
          <Badge variant="light" color="#A30041" size="sm">
            Control Panel Access
          </Badge>
        </Stack>

        <Card
          shadow="xl"
          padding="xl"
          radius="md"
          withBorder
          style={{ borderColor: '#e9ecef' }}
        >
          <Stack gap="md">
            <div>
              <Title order={2} fz={20} fw={700}>
                Welcome back
              </Title>
              <Text c="dimmed" size="sm">
                Enter your admin credentials to access dashboard
              </Text>
            </div>

            <form onSubmit={form.onSubmit(handleLogin)}>
              <TextInput
                label="Email Address"
                placeholder="admin@anorshop.com"
                leftSection={<IconMail size={16} />}
                size="md"
                radius="md"
                {...form.getInputProps('email')}
              />

              <PasswordInput
                label="Password"
                placeholder="Your secure password"
                leftSection={<IconLock size={16} />}
                size="md"
                radius="md"
                {...form.getInputProps('password')}
              />

              <Group justify="space-between" mt="xs">
                <Checkbox
                  label="Remember this device"
                  color="#A30041"
                  defaultChecked
                  size="sm"
                />
                <Anchor size="xs" c="#A30041" fw={600} underline="never">
                  Forgot password?
                </Anchor>
              </Group>

              <Button
                type="submit"
                fullWidth
                size="md"
                radius="md"
                color="#A30041"
                rightSection={<IconArrowRight size={18} />}
                mt="sm"
                loading={login.isPending}
              >
                Log In to Dashboard
              </Button>
            </form>
          </Stack>
        </Card>

        <Text ta="center" size="xs" c="dimmed" mt={24}>
          Back to{' '}
          <Anchor
            component={Link}
            to="/"
            c="#A30041"
            fw={600}
            underline="never"
          >
            Anor Shop Homepage
          </Anchor>
        </Text>
      </Container>
    </Box>
  )
}
