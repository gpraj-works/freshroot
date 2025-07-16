import { Button, Container, Grid, GridCol, Paper } from '@mantine/core'
import ManageCart from '../components/cart/ManageCart'
import Icon from '../components/shared/Icon'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <Container size="xl" my={20} py={30} mih={450}>
      <Grid pb={30}>
        <GridCol span={8}>
          <ManageCart />
        </GridCol>
        <GridCol span={4}>
          <Paper bg="#f5f5f5" radius="sm" p={20} pos="sticky" top={100}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti at debitis in dolorem
            nam itaque temporibus, doloremque distinctio ex sapiente expedita aspernatur veritatis
            esse ad, voluptatum iusto consequuntur eos natus.
          </Paper>
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
