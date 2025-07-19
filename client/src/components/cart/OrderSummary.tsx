import { Paper, Stack, Title, Text, Flex, ActionIcon, Select, Divider, Button, TextInput } from '@mantine/core'
import Icon from '../shared/Icon'
import { Link } from 'react-router-dom'

const OrderSummary = () => {
  return (
    <Paper bg="#f5f5f5" radius="sm" p={25} pos="sticky" top={100}>
      <Stack>
        <Title order={2} fw={500} c="gray.8">
          Order Summary
        </Title>
        <Flex gap={10}>
          <Title order={4} fw={500} tt="uppercase" c="gray.8">
            Delivery Address
          </Title>
          <ActionIcon component={Link} to="/delivery-address" bd={0} variant="outline" radius="xl">
            <Icon name="edit" size={20} />
          </ActionIcon>
        </Flex>
        <Text w="90%" c="gray.7">
          No 30, Viveganadha Street, Kanchipuram, Tamilnadu, IN
        </Text>
        <TextInput placeholder='Delivery Instructions (Optional)' />
        <Title order={4} fw={500} tt="uppercase" c="gray.8">
          Payment method
        </Title>
        <Select
          checkIconPosition="right"
          value={'cash_on_delivery'}
          data={[
            { value: 'cash_on_delivery', label: 'Cash On Delivery' },
            { value: 'online_payment', label: 'Online Payment' },
          ]}
        />
        <Divider />
        <Stack gap={8}>
          <Flex justify="space-between">
            <Text>Price</Text>
            <Text>₹300</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Tax(2%)</Text>
            <Text>₹20</Text>
          </Flex>
          <Flex justify="space-between">
            <Text>Platform Fee</Text>
            <Text>₹20</Text>
          </Flex>
          <Flex justify="space-between">
            <Title order={4}>Total Amount</Title>
            <Title order={4}>₹400</Title>
          </Flex>
        </Stack>
        <Button>Place Order</Button>
      </Stack>
    </Paper>
  )
}

export default OrderSummary
