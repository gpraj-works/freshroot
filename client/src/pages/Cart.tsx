import { Button, Container, Grid, GridCol } from '@mantine/core'
import { Link } from 'react-router-dom'
import ManageCart from '../components/cart/ManageCart'
import OrderSummary from '../components/cart/OrderSummary'
import Icon from '../components/shared/Icon'

export default function Cart() {
  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Grid pb={30}>
        <GridCol span={8}>
          <ManageCart />
        </GridCol>
        <GridCol span={4}>
          <OrderSummary />
        </GridCol>
      </Grid>
      <Button
        component={Link}
        to="/products"
        leftSection={<Icon name="arrow_left" />}
        variant="outline"
      >
        Continue Shopping
      </Button>
    </Container>
  )
}
