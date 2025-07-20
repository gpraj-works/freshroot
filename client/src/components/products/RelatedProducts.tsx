import { Box, Title, Flex, Button } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import ProductCard from '../ui/ProductCard'
import PotatoImage from '../../assets/products/onion.png'
import useCart from '../../hooks/useCart'
import { type ProductProps } from '../../utils/types'
import type { FC } from 'react'

const products: ProductProps[] = [
  {
    id: 'tozo80a4x18r6ngwhmg1',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg2',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg3',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg4',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg5',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg6',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg7',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg8',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
  {
    id: 'tozo80a4x18r6ngwhmg9',
    name: 'Potato 500g',
    category: 'vegetables',
    thumbnail: PotatoImage,
    inStock: true,
    price: 40,
    priceType: '₹',
    rating: 4.5,
    offerPrice: 20,
  },
]

interface RelatedProductsProps {
  category: string
}

const RelatedProducts: FC<RelatedProductsProps> = ({ category }) => {
  const { handlers } = useCart()

  return (
    <Box py={20} mt={20}>
      <Flex gap={5} mb={30} align="center" justify="center">
        <Title order={2} c="gray.8" ta="center">
          Related
        </Title>
        <Title order={2} c="fresh" ta="center">
          Products
        </Title>
      </Flex>

      <Carousel
        slideSize="auto"
        height="auto"
        slideGap="lg"
        controlSize={30}
        withControls
        withIndicators={false}
        emblaOptions={{
          loop: false,
          dragFree: false,
        }}
        styles={{
          control: {
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
          },
        }}
        mb={30}
      >
        {products.map((product) => (
          <Carousel.Slide key={product.id}>
            <ProductCard
              product={product}
              addCart={(product) => handlers.addProduct(product)}
              gradientBackground={true}
              gradientColor="#ffe2e2"
            />
          </Carousel.Slide>
        ))}
      </Carousel>

      <Flex justify="center">
        <Button variant="outline" size="md" w={150} mt={15}>
          See More
        </Button>
      </Flex>
    </Box>
  )
}

export default RelatedProducts
