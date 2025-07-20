import { Container, Grid, GridCol, Paper } from '@mantine/core'
import Navbar from './components/Navbar'
import { useOutlet } from 'react-router-dom'

export default function Layout() {
  const outlet = useOutlet()
  return (
    <Container fluid p={8}>
      <Grid gutter={8}>
        <GridCol span={0.7}>
          <Navbar />
        </GridCol>
        <GridCol span={11.3}>
          <Paper withBorder shadow="md" radius="md" h='100%' p={20}>
            {outlet}
          </Paper>
        </GridCol>
      </Grid>
    </Container>
  )
}
