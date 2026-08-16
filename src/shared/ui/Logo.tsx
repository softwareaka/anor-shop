import { Group, Text } from '@mantine/core'
import anorBankIcon from '@/shared/assets/images/anorbank-logo.png'

interface LogoProps {
  size?: number
  textColor?: string
}

export const Logo = ({ size = 36, textColor = '#1A1A1A' }: LogoProps) => {
  return (
    <Group gap={10} align="center" style={{ userSelect: 'none' }}>
      <img
        src={anorBankIcon}
        alt="AnorShop Logo"
        style={{
          height: size,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
      <Text fw={800} fz={size * 0.65} c={textColor} style={{ letterSpacing: '-0.5px', lineHeight: 1 }}>
        Anor<Text component="span" c="#A30041" fw={800}>Shop</Text>
      </Text>
    </Group>
  )
}
