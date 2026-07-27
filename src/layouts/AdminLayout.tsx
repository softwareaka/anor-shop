import {
  AppShell,
  Group,
  Text,
  Avatar,
  Button,
  NavLink,
  Stack,
  Box,
  Badge,
  UnstyledButton,
} from '@mantine/core'
import {
  IconLayoutDashboard,
  IconPackage,
  IconCategory,
  IconLogout,
  IconChevronRight,
  IconBell,
  IconSettings,
} from '@tabler/icons-react'
import { Link, Outlet, useLocation } from 'react-router'
import { useLogout } from '../hooks/useLogout'
import { useProfile } from '../hooks/useProfile'

export const AdminLayout = () => {
  const logout = useLogout()
  const { data: user } = useProfile()

  const location = useLocation()

  const navItems = [
    { label: 'Dashboard', icon: IconLayoutDashboard, path: '/dashboard' },
    { label: 'Products', icon: IconPackage, path: '/dashboard/products' },
    { label: 'Categories', icon: IconCategory, path: '/dashboard/categories' },
  ]

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{ width: 260, breakpoint: 'sm' }}
      padding="md"
      style={{ backgroundColor: '#f8f9fa' }}
    >
      {/* Admin Header */}
      <AppShell.Header
        style={{
          borderBottom: '1px solid #e9ecef',
          backgroundColor: '#ffffff',
        }}
      >
        <Group h="100%" px="xl" justify="space-between">
          <Group gap="sm">
            <Box
              style={{
                background: 'linear-gradient(135deg, #A30041 0%, #7a0031 100%)',
                color: '#ffffff',
                width: 38,
                height: 38,
                borderRadius: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: 18,
              }}
            >
              A
            </Box>
            <div>
              <Text
                fw={800}
                fz={18}
                lh={1.1}
                style={{ letterSpacing: '-0.3px' }}
              >
                Anor Shop
              </Text>
              <Text fz={11} c="dimmed" fw={600}>
                ADMIN DASHBOARD
              </Text>
            </div>
          </Group>

          {/* User profile & Log Out */}
          <Group gap="lg">
            <UnstyledButton style={{ color: '#495057' }}>
              <IconBell size={20} />
            </UnstyledButton>

            <Group gap="xs">
              <Avatar src={user?.avatar} radius="xl" size="md" color="anor">
                AW
              </Avatar>
              <Box visibleFrom="xs">
                <Text size="sm" fw={700} lh={1.2}>
                  {user?.name}
                </Text>
                <Badge size="xs" color="anor" variant="light">
                  Administrator
                </Badge>
              </Box>
            </Group>

            <Button
              onClick={logout}
              variant="light"
              color="anor"
              size="xs"
              radius="md"
              leftSection={<IconLogout size={16} />}
            >
              Log Out
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      {/* Admin Sidebar */}
      <AppShell.Navbar
        p="md"
        style={{ borderRight: '1px solid #e9ecef', backgroundColor: '#ffffff' }}
      >
        <Stack justify="space-between" h="100%">
          <Stack gap={4}>
            <Text
              size="xs"
              fw={700}
              c="dimmed"
              px="sm"
              mb={4}
              style={{ textTransform: 'uppercase', letterSpacing: '0.5px' }}
            >
              Main Menu
            </Text>

            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const IconComponent = item.icon

              return (
                <NavLink
                  key={item.path}
                  component={Link}
                  to={item.path}
                  label={item.label}
                  leftSection={<IconComponent size={20} stroke={1.8} />}
                  rightSection={
                    <IconChevronRight
                      size={14}
                      style={{ opacity: isActive ? 1 : 0.3 }}
                    />
                  }
                  active={isActive}
                  color="anor"
                  variant={isActive ? 'light' : 'subtle'}
                  style={{
                    borderRadius: 8,
                    fontWeight: isActive ? 700 : 500,
                  }}
                />
              )
            })}
          </Stack>

          {/* Bottom Card in Sidebar */}
          <Box
            p="md"
            style={{
              backgroundColor: '#fff0f5',
              borderRadius: 12,
              border: '1px solid #f7b0cc',
            }}
          >
            <Group gap="xs" mb={4}>
              <IconSettings size={18} color="#A30041" />
              <Text size="xs" fw={700} style={{ color: '#A30041' }}>
                System Info
              </Text>
            </Group>
            <Text size="xs" c="dimmed">
              Anor Shop UI Admin v1.0 • Pure UI Demo Mode
            </Text>
          </Box>
        </Stack>
      </AppShell.Navbar>

      {/* Main Content View */}
      <AppShell.Main>
        <Box p="sm">
          <Outlet />
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
