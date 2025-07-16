import {
  Box,
  Title,
  Text,
  Flex,
  Stack,
  Table,
  Grid,
  GridCol,
  Image,
  Paper,
  Button,
  Group,
  Select,
  ActionIcon,
} from '@mantine/core'
import useCart from '../../hooks/useCart'
import PotatoImage from '../../assets/products/onion.png'
import Icon from '../shared/Icon'

const products = [
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
]

const ManageCart = () => {
  const { states } = useCart()
  return (
    <Box>
      <Stack gap={20}>
        <Flex gap={10}>
          <Title order={2} c="gray.8">
            Manage Cart
          </Title>
          <Text c="fresh.8">{states.productCount} items</Text>
        </Flex>
        <Table withRowBorders={false}>
          <Table.Thead>
            <Table.Tr>
              <Table.Td px={0} pb={15} fz="15" c="gray.7">
                Product Details
              </Table.Td>
              <Table.Td px={0} pb={15} fz="15" c="gray.7">
                Subtotal
              </Table.Td>
              <Table.Td px={0} pb={15} fz="15" c="gray.7">
                Manage
              </Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {states.products.map((product) => (
              <Table.Tr key={product.id}>
                <Table.Td px={0}>
                  <Grid>
                    <GridCol span="content">
                      <Paper withBorder w={100}>
                        <Image src={PotatoImage} />
                      </Paper>
                    </GridCol>
                    <GridCol span="auto">
                      <Stack gap={4}>
                        <Title order={5}>Potato 500g</Title>
                        <Text fz="13" c="gray.7">
                          Weight : N/A
                        </Text>
                        <Group wrap="nowrap" gap={5} mt={7}>
                          <Button
                            variant="outline"
                            size="compact-xs"
                            color="red"
                            fz={16}
                            // onClick={() => removeQuantity(productId, quantity)}
                          >
                            -
                          </Button>
                          <Button
                            variant="outline"
                            size="compact-xs"
                            fz={16}
                            // onClick={() => addQuantity(productId)}
                          >
                            +
                          </Button>
                        </Group>
                      </Stack>
                    </GridCol>
                  </Grid>
                </Table.Td>
                <Table.Td px={0} fz="md">
                  ₹{product.quantity * 20}
                </Table.Td>
                <Table.Td px={0}>
                  <ActionIcon bd={0} size="xs" c="red" variant='default'>
                    <Icon name='trash_can' />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Stack>
    </Box>
  )
}

export default ManageCart
