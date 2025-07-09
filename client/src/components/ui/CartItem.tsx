import { type FC } from 'react'
import { Grid, GridCol, Stack, Image, Text, Group, Button } from '@mantine/core'
import PotatoImage from '../../assets/products/potato.png'
import Icon from '../shared/Icon'

interface CartItemProps {
  productId: string
  quantity: number
  addQuantity: (id: string) => void
  removeQuantity: (id: string, quantity: number) => void
}

const CartItem: FC<CartItemProps> = (props) => {
  const { productId, quantity, addQuantity, removeQuantity } = props
  return (
    <Grid align="flex-start">
      <GridCol span={4}>
        <Image src={PotatoImage} w={80} />
      </GridCol>
      <GridCol span={8}>
        <Stack gap={0}>
          <Text size="sm" fw="bold" c="black">
            Potato
          </Text>
          <Text
            size="sm"
            c="#79716b"
            tt="capitalize"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
          >
            <span>500g</span>
            <span style={{ paddingTop: 7 }}>
              <Icon name="close" size={14} />
            </span>
            <span>{quantity}</span>
            <span style={{ padding: '0 5px' }}>=</span>
            <span>₹{quantity * 20}</span>
          </Text>
          <Group wrap="nowrap" gap={5} mt={7}>
            <Button
              variant="outline"
              size="compact-xs"
              fz={16}
              onClick={() => removeQuantity(productId, quantity)}
            >
              -
            </Button>
            <Button
              variant="outline"
              size="compact-xs"
              fz={16}
              onClick={() => addQuantity(productId)}
            >
              +
            </Button>
          </Group>
        </Stack>
      </GridCol>
    </Grid>
  )
}

export default CartItem
