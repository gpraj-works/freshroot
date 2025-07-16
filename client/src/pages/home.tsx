import { Container } from '@mantine/core'
import BestSelling from '../components/home/BestSelling'
import Categories from '../components/home/Categories'
import Hero from '../components/home/Hero'
import WhyWe from '../components/home/WhyWe'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <Container size="xl">
      <Hero />
      <Categories />
      <BestSelling />
      <WhyWe />
      <Newsletter />
    </Container>
  )
}
