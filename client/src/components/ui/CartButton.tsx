import { ActionIcon, Badge, Group, useMantineTheme } from '@mantine/core'
import { type FC } from 'react'
import Icon from '../shared/Icon'
import useCart from '../../hooks/useCart'

interface CartButtonProps {
  count?: number
}
const CartButton: FC<CartButtonProps> = ({ count = 0 }) => {
  const theme = useMantineTheme()
  const { handlers } = useCart()
  return (
    <Group
      justify="center"
      align="center"
      style={{ position: 'relative' }}
      onClick={() => handlers.toggleCart(true)}
    >
      <ActionIcon size="lg" radius="xl" variant="transparent" color={theme.primaryColor}>
        <Icon name="cart" size={20} />
      </ActionIcon>
      {count > 0 && (
        <Badge
          variant="filled"
          circle
          size="xs"
          style={{
            position: 'absolute',
            top: -4,
            right: -4,
            pointerEvents: 'none',
          }}
        >
          {count}
        </Badge>
      )}
    </Group>
  )
}

export default CartButton
