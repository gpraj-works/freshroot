import { Paper, Text, Anchor, Image, Rating, Flex, Stack, Button } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import type { FC } from 'react'
import { RiShoppingCart2Line } from '@remixicon/react'

export interface ProductProps {
  id: string
  name: string
  category: string
  thumbnail: string
  inStock: boolean
  price: number
  offerPrice?: number
  priceType: string
  rating: number
}

const Product: FC<ProductProps> = (props) => {
  const { name, inStock, price, offerPrice, priceType } = props
  const productLink = `/products/${props.id}`
  return (
    <Paper
      w={250}
      px={20}
      pb={20}
      radius="md"
      shadow="md"
      withBorder
      style={{ userSelect: 'none' }}
    >
      <Anchor component={NavLink} to={productLink} underline="never">
        <Image src={props.thumbnail} alt={name} />
      </Anchor>

      <Stack gap={0} mt="sm">
        <Anchor component={NavLink} to={`/products/${props.category}`} underline="never">
          <Text size="sm" c="#79716b" tt="capitalize">
            {props.category}
          </Text>
        </Anchor>
        <Anchor component={NavLink} to={productLink} underline="never">
          <Text size="md" fw="bold" c="black" mt={5}>
            {name}
          </Text>
        </Anchor>
        <Rating value={props.rating} size="xs" fractions={2} readOnly mt={5} />

        <Text size="sm" mt={5} c={inStock ? 'green' : 'red'}>
          {inStock ? 'In stock' : 'Out of stock'}
        </Text>

        <Flex mt={10} justify="space-between" align="center">
          <Flex align="center" gap={8}>
            <Text size="lg" fw="bold">
              {priceType}
              {offerPrice ?? price}
            </Text>
            {offerPrice && (
              <Text size="sm" td="line-through" c="#79716b">
                {priceType}
                {price}
              </Text>
            )}
          </Flex>
          <Button leftSection={<RiShoppingCart2Line size={20} />} disabled={!inStock} size="xs">
            Add
          </Button>
        </Flex>
      </Stack>
    </Paper>
  )
}

export default Product
