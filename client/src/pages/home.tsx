import { Container } from '@mantine/core'
import BestSelling from "../components/BestSelling"
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import WhyWe from '../components/WhyWe'
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
