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
  Box,
  Rating,
  List,
  Button,
  Anchor,
} from '@mantine/core'
import PotatoImage from '../assets/products/potato.png'
import { type ProductProps } from '../utils/types'
import { useEffect, useState } from 'react'
import { getDiscountPercentage, thousandSeparator } from '../utils/helpers'
import Icon from '../components/shared/Icon'
import RelatedProducts from '../components/products/RelatedProducts'
import ProductPreview from '../components/ui/ProductPreview'

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

  const thumbnails = Array.from({ length: 9 })

  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Stack mb={30}>
        <Breadcrumbs items={breadcrumbItems} />
      </Stack>
      {product && (
        <Grid gutter={25} align="start" mb={50}>
          <GridCol span={5.5}>
            <Tabs defaultValue="gallery" variant="none" orientation="vertical">
              <Flex gap={5} align="start">
                <Stack gap={5}>
                  {thumbnails.slice(0, 5).map((thumb, index) => (
                    <Tabs.Tab key={index} value={index === 0 ? 'gallery' : `thumb-${index}`} p={0}>
                      <Paper withBorder>
                        <Flex align="center" justify="center">
                          <Image src={product.thumbnail} w={100} />
                        </Flex>
                      </Paper>
                    </Tabs.Tab>
                  ))}
                </Stack>

                <Box>
                  <Tabs.Panel value="gallery">
                    <Paper withBorder h={423} w={423}>
                      <Flex align="center" justify="center" h="100%" w="100%">
                        <ProductPreview source={product.thumbnail} />
                      </Flex>
                    </Paper>
                  </Tabs.Panel>

                  {/* Extra thumbnails under big image */}
                  <Flex mt={5} gap={5} wrap="wrap">
                    {thumbnails.slice(5).map((thumb, index) => (
                      <Paper key={index + 5} withBorder>
                        <Image src={product.thumbnail} w={100} />
                      </Paper>
                    ))}
                  </Flex>
                </Box>
              </Flex>
            </Tabs>
          </GridCol>
          <GridCol span={6.5}>
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
            <Flex gap={10} mt={20} h={100}>
              <Paper withBorder px={15} py={10} radius="md" h="100%">
                <Stack gap={10}>
                  <Text fz={15} fw={700} c="fresh.8">
                    In stock
                  </Text>
                  <List spacing={5} size="sm" center>
                    <List.Item
                      fz={12}
                      icon={<Icon name="success_line" color="#438344" size={15} />}
                    >
                      Free delivery
                    </List.Item>
                    <List.Item
                      fz={12}
                      icon={<Icon name="success_line" color="#438344" size={15} />}
                    >
                      Return policy
                    </List.Item>
                  </List>
                </Stack>
              </Paper>
              <Paper withBorder p={15} radius="md" h="100%">
                <Text fz={12} mb={4}>
                  Store address :
                </Text>
                <Text fz={11} style={{ wordBreak: 'break-word', maxWidth: 150 }}>
                  <Anchor fz={11}>Guna vegetables & Fruits</Anchor>
                </Text>
                <Text fz={11} style={{ wordBreak: 'break-word', maxWidth: 150 }}>
                  Chennai - 600001.
                </Text>
              </Paper>
              <Paper withBorder p={15} radius="md" h="100%">
                <Text fz={12} mb={4}>
                  Delivery address :
                </Text>
                <Text fz={11} style={{ wordBreak: 'break-word', maxWidth: 180 }}>
                  No 30, Viveganadha Street, Kanchipuram, Tamilnadu, IN.
                </Text>
              </Paper>
            </Flex>
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
        </Grid>
      )}

      {category && <RelatedProducts category={category} />}
    </Container>
  )
}
