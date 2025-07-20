import {
  Container,
  Stack,
  Title,
  Image,
  Flex,
  Table,
  Paper,
  Text,
  Badge,
  Anchor,
} from '@mantine/core'
import Breadcrumbs from '../components/ui/Breadcrumbs'
import EmptyImage from '../assets/empty-orders.svg'
import _ from 'underscore'
import PotatoImage from '../assets/products/potato.png'
import dayjs from 'dayjs'

const breadcrumbItems = [
  { label: 'Home', link: '/' },
  { label: 'Orders', link: '/orders' },
]

type PaymentModes = 'Credit Card' | 'UPI' | 'Cash on Delivery' | 'Net Banking'
type OrderStatus = 'Delivered' | 'Shipped' | 'Processing' | 'Cancelled'

type OrderProps = {
  order_id: string
  ordered_timestamp: string
  payment_mode: PaymentModes
  order_status: OrderStatus
  total_amount: number
  product: {
    name: string
    thumbnail: string
    price: number
    quantity: number
    category: string
  }
}

const orders: OrderProps[] = [
  {
    order_id: 'ORD-1001',
    ordered_timestamp: '2025-07-19T10:32:00Z',
    payment_mode: 'Credit Card',
    order_status: 'Delivered',
    total_amount: 150.0,
    product: {
      name: 'Fresh Tomatoes',
      thumbnail: 'https://example.com/images/tomatoes.jpg',
      price: 30.0,
      quantity: 5,
      category: 'vegetables',
    },
  },
  {
    order_id: 'ORD-1002',
    ordered_timestamp: '2025-07-18T14:10:00Z',
    payment_mode: 'UPI',
    order_status: 'Shipped',
    total_amount: 120.0,
    product: {
      name: 'Alphonso Mangoes',
      thumbnail: 'https://example.com/images/mangoes.jpg',
      price: 60.0,
      quantity: 2,
      category: 'fruits',
    },
  },
  {
    order_id: 'ORD-1003',
    ordered_timestamp: '2025-07-17T08:45:00Z',
    payment_mode: 'Cash on Delivery',
    order_status: 'Processing',
    total_amount: 200.0,
    product: {
      name: 'Basmati Rice',
      thumbnail: 'https://example.com/images/rice.jpg',
      price: 100.0,
      quantity: 2,
      category: 'grains',
    },
  },
  {
    order_id: 'ORD-1004',
    ordered_timestamp: '2025-07-16T16:05:00Z',
    payment_mode: 'Net Banking',
    order_status: 'Cancelled',
    total_amount: 75.0,
    product: {
      name: 'Green Apples',
      thumbnail: 'https://example.com/images/apples.jpg',
      price: 25.0,
      quantity: 3,
      category: 'fruits',
    },
  },
]

const timestampFormat = 'DD-MMM-YY hh:mm A'

export default function Orders() {
  const orderStatusIndicator = {
    Cancelled: '#dc2626',
    Processing: '#6b7280',
    Shipped: '#6366f1',
    Delivered: '#16a34a',
  }

  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Stack mb={30}>
        <Title order={2} tt="uppercase" c="gray.8">
          Orders
        </Title>
        <Breadcrumbs items={breadcrumbItems} />

        <Table verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Td>Product</Table.Td>
              <Table.Td>Order</Table.Td>
              <Table.Td>Payment</Table.Td>
              <Table.Td>Price</Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {orders.map((order) => (
              <Table.Tr key={order.order_id}>
                <Table.Td>
                  <Flex gap={10} align="center">
                    <Paper bg="fresh.1" w={80}>
                      <Image src={PotatoImage} />
                    </Paper>
                    <Stack gap={4}>
                      <Title order={5}>{order.product.name}</Title>
                      <Text fz="13" c="gray.7">
                        Category : {order.product.category}
                      </Text>
                    </Stack>
                  </Flex>
                </Table.Td>
                <Table.Td>
                  <Flex gap={5}>
                    <Text fz="13" c="gray.8">
                      Order Id :
                    </Text>
                    <Anchor fz="13">{order.order_id}</Anchor>
                  </Flex>
                  <Text fz="13" c="gray.6">
                    Order Placed : {dayjs(order.ordered_timestamp).format(timestampFormat)}
                  </Text>
                  <Badge
                    size="sm"
                    variant="light"
                    radius="lg"
                    fw={500}
                    color={orderStatusIndicator[order.order_status]}
                  >
                    {order.order_status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Flex gap={5}>
                    <Text fz="13" c="gray.8">
                      Payment Mode :
                    </Text>
                    <Text fz={13} fw={500}>
                      {order.payment_mode}
                    </Text>
                  </Flex>
                  <Text fz="13" c="gray.6">
                    Quantity : {order.product.quantity}
                  </Text>
                  <Text fz="13" c="fresh.7">
                    Price/Quantity : ₹{order.product.price}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Title order={4} c="fresh.8">
                    ₹{order.total_amount}
                  </Title>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        {_.isEmpty(orders) && (
          <Flex align="center" justify="center" py={25}>
            <Image src={EmptyImage} w={450} opacity={0.8} />
          </Flex>
        )}
      </Stack>
    </Container>
  )
}
