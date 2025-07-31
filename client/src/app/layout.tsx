import { Container, Grid, GridCol, Paper } from '@mantine/core'
import SellerNavbar from './seller/components/Navbar'
import AdminNavbar from './admin/components/Navbar'
import { useLocation, useOutlet } from 'react-router-dom'

export default function Layout() {
  const outlet = useOutlet()
  const location = useLocation()
  const isAdmin = location.pathname.includes('admin')
  return (
    <Container fluid p={8}>
      <Grid gutter={8}>
        <GridCol span={0.7}>{isAdmin ? <AdminNavbar /> : <SellerNavbar />}</GridCol>
        <GridCol span={11.3}>
          <Paper withBorder shadow="md" radius="md" h="100%" p={20}>
            {outlet}
          </Paper>
        </GridCol>
      </Grid>
    </Container>
  )
}
