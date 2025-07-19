import { Paper, Text, Anchor, Image, Rating, Flex, Stack, Button } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import type { FC } from 'react'
import { type ProductProps } from '../../utils/types'
import Icon from '../shared/Icon'
import { generateGradient } from '../../utils/helpers'

export interface ProductCardProps {
  product: ProductProps
  addCart: (product: { id: string; quantity: number }) => void
  gradientBackground?: boolean
  gradientColor?: string
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { product, addCart, gradientBackground = false } = props
  const { name, inStock, price, offerPrice, priceType } = product
  const productLink = `/products/${product.category}/${product.id}`
  return (
    <Paper
      miw={200}
      px={20}
      pb={20}
      radius="md"
      shadow="md"
      withBorder
      style={{
        userSelect: 'none',
        ...(gradientBackground &&
          props.gradientColor && { background: generateGradient(props.gradientColor) }),
      }}
    >
      <Anchor component={NavLink} to={productLink} underline="never">
        <Flex justify="center" align="center">
          <Image src={product.thumbnail} alt={name} w={170} />
        </Flex>
      </Anchor>

      <Stack gap={0} mt="sm">
        <Anchor component={NavLink} to={productLink} underline="never">
          <Text size="sm" c="#79716b" tt="capitalize">
            {product.category}
          </Text>
        </Anchor>
        <Anchor component={NavLink} to={productLink} underline="never">
          <Text size="md" fw="bold" c="black" mt={5}>
            {name}
          </Text>
        </Anchor>
        <Rating value={product.rating} size="xs" fractions={2} readOnly mt={5} />

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
          <Button
            leftSection={<Icon name="cart" size={20} />}
            disabled={!inStock}
            onClick={() => addCart({ id: product.id, quantity: 1 })}
            size="xs"
          >
            Add
          </Button>
        </Flex>
      </Stack>
    </Paper>
  )
}

export default ProductCard
