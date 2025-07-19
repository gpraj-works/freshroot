import ProductCard from '../components/ui/ProductCard'
import PotatoImage from '../assets/products/potato.png'
import { Container, Grid, GridCol, Title, NavLink, Pagination, Paper, Stack } from '@mantine/core'
import useCart from '../hooks/useCart'
import { type ProductProps } from '../utils/types'
import Breadcrumbs from '../components/ui/Breadcrumbs'

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

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/products' },
]

const Products = () => {
  const { handlers } = useCart()
  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Stack mb={30}>
        <Title order={2} tt="uppercase" c="gray.8">
          All Products
        </Title>
        <Breadcrumbs items={breadcrumbItems} />
      </Stack>
      <Grid>
        <GridCol span="auto">
          <Grid gutter={20}>
            {products.map((product) => (
              <GridCol span={3} key={product.id}>
                <ProductCard product={product} addCart={(product) => handlers.addProduct(product)} />
              </GridCol>
            ))}
          </Grid>
        </GridCol>
        <GridCol span={2}>
          <Paper shadow="md" pos="sticky" top={90}>
            <NavLink w="auto" label="Vegetables" href="#required-for-focus" active />
            <NavLink w="auto" label="Fruits" href="#required-for-focus" />
            <NavLink w="auto" label="Grains" href="#required-for-focus" />
            <NavLink w="auto" label="Juice" href="#required-for-focus" />
            <NavLink w="auto" label="Dairies" href="#required-for-focus" />
            <NavLink w="auto" label="Dry fruits & Nuts" href="#required-for-focus" />
            <NavLink w="auto" label="Honey" href="#required-for-focus" />
          </Paper>
        </GridCol>
      </Grid>
      <Pagination total={10} withEdges mt={40} />
    </Container>
  )
}

export default Products
