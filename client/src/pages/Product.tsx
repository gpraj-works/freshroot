import { useParams } from 'react-router-dom'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import {
  Container,
  Grid,
  GridCol,
  Stack,
  Tabs,
  Image,
  Flex,
  Paper,
  Text,
  Rating,
  List, Button,
  Anchor
} from '@mantine/core'
import PotatoImage from '../assets/products/potato.png'
import { type ProductProps } from '../utils/types'
import { useEffect, useState } from 'react'
import { getDiscountPercentage, thousandSeparator } from '../utils/helpers'
import Icon from '../components/shared/Icon'

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

export default function Product() {
  const { category, id: productId } = useParams()
  const [product, setProduct] = useState<ProductProps | null>(null)

  const breadcrumbItems = [
    { label: 'Home', link: '/' },
    { label: 'Products', link: '/products' },
  ]

  useEffect(() => {
    if (productId) {
      const selectedProduct = products.find((pr) => pr.id === productId)
      setProduct(selectedProduct || null)
    }
  }, [productId])

  if (category && product) {
    breadcrumbItems.push(
      ...[
        { label: category, link: `/products/${category}` },
        { label: product.name, link: `/products/${category}/${productId}` },
      ]
    )
  }

  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Stack mb={30}>
        <Breadcrumbs items={breadcrumbItems} />
      </Stack>
      {product && (
        <Grid gutter={25} align="start">
          <GridCol span={5}>
            <Tabs defaultValue="gallery" orientation="vertical">
              <Tabs.List>
                <Tabs.Tab value="gallery" p={0} bd="fresh.2">
                  <Flex align="center" justify="center">
                    <Image src={product?.thumbnail} w={100} />
                  </Flex>
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="gallery">
                <Paper withBorder h={400} w={400}>
                  <Flex align="center" justify="center" h="100%" w="100%">
                    <Image src={product.thumbnail} w={320} />
                  </Flex>
                </Paper>
              </Tabs.Panel>
            </Tabs>
          </GridCol>
          <GridCol span={5}>
            <Text fw={500} fz={30} mb={6}>
              {product.name}
            </Text>
            <Flex gap={5} align="center" mb={6}>
              <Rating value={product.rating} size="sm" fractions={2} readOnly />
              <Text fz={14}>({product.rating})</Text>
            </Flex>
            <Flex gap={10} align="center" mt={25}>
              <Text c="red">-{getDiscountPercentage(product.price, product.offerPrice ?? 0)}%</Text>
              <Text fz={25}>₹{thousandSeparator(product.price)}</Text>
            </Flex>
            <Text fz={13} c="gray.7">
              (Inclusive of all tax)
            </Text>
            <Stack my={20}>
              <Text>Product Description</Text>
              <List
                spacing="xs"
                size="sm"
                center
                icon={<Icon name="success_line" color="#438344" size={15} />}
              >
                <List.Item>Creamy and delicious</List.Item>
                <List.Item>Perfect for pizzas and sandwiches</List.Item>
                <List.Item>Rich in calcium</List.Item>
              </List>
            </Stack>
            <Flex gap={15}>
              <Button variant="outline" fullWidth size="lg">
                Add to Cart
              </Button>
              <Button size="lg" fullWidth>
                Buy Now
              </Button>
            </Flex>
          </GridCol>
          <GridCol span={2}>
            <Paper withBorder p={20} radius="md" h="100%">
              <Stack gap={10} mb={15}>
                <Text fz={20} fw={700} c="fresh.8">
                  In stock
                </Text>
                <List spacing="xs" size="sm" center>
                  <List.Item icon={<Icon name="success_line" color="#438344" size={15} />}>
                    Free delivery
                  </List.Item>
                  <List.Item icon={<Icon name="cancel_line" color="red" size={15} />}>
                    Delivery Charge
                  </List.Item>
                </List>
              </Stack>
              <Text fz={11}>
                Store : <Anchor fz={11}>Guna vegetables</Anchor>, Chennai - 600001.
              </Text>
            </Paper>
          </GridCol>
        </Grid>
      )}
    </Container>
  )
}
