import { Drawer, Stack, Button, Flex } from '@mantine/core'
import useCart from '../hooks/useCart'
import CartItem from './ui/CartItem'
import Icon from './shared/Icon'

const CartMenu = () => {
  const { states, handlers } = useCart()
  const { addProduct, removeQuantity, toggleCart } = handlers
  return (
    <Drawer
      opened={states.showCart}
      onClose={() => toggleCart(false)}
      title={`Cart Items (${states.productCount})`}
      padding="md"
      position="right"
      size="xs"
    >
      <Stack gap="md">
        <Stack>
          {states.products.map((product) => (
            <CartItem
              key={product.id}
              productId={product.id}
              quantity={product.quantity}
              addQuantity={(id: string) => addProduct({ id, quantity: 1 })}
              removeQuantity={(id: string) => removeQuantity(id)}
            />
          ))}
        </Stack>
        {Boolean(states.productCount) && (
          <Button component="a" href="/cart">
            Manage cart
          </Button>
        )}

        {!states.productCount && (
          <Flex justify="center" mt={80}>
            <Icon name="cart" size={150} color="#0001" />
          </Flex>
        )}
      </Stack>
    </Drawer>
  )
}

export default CartMenu
