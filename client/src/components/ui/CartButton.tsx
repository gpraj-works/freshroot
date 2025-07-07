import { ActionIcon, Badge, Button, Drawer, Group, Stack, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { RiShoppingCart2Line } from '@remixicon/react'
import { type FC } from 'react'

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
          <RiShoppingCart2Line size={20} />
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
      <Drawer
        opened={opened}
        onClose={close}
        title="Cart Items"
        padding="md"
        position="right"
        size="xs"
      >
        <Stack gap="md">
          <Button component="a" href="/cart">
            Manage cart
          </Button>
        </Stack>
      </Drawer>
    </>
  )
}

export default CartButton
