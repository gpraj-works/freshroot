import { ActionIcon, Badge, Group, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { type FC } from 'react'
import Icon from '../shared/Icon'
import CartMenu from '../CartMenu'

interface CartButtonProps {
  count?: number
}
const CartButton: FC<CartButtonProps> = ({ count = 0 }) => {
  const [opened, { toggle, close }] = useDisclosure(false)
  const theme = useMantineTheme()
  return (
    <>
      <Group justify="center" align="center" style={{ position: 'relative' }} onClick={toggle}>
        <ActionIcon size="lg" radius="xl" variant="transparent" color={theme.primaryColor}>
          <Icon name='cart' size={20} />
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
      <CartMenu opened={opened} close={close} />
    </>
  )
}

export default CartButton
