import { Paper, Box, Text, Anchor, Image, Title } from '@mantine/core'
import { productCategories } from '../assets'
import { NavLink } from 'react-router-dom'
import type { FC } from 'react'
import { Carousel } from '@mantine/carousel'

interface CategoryProps {
  title: string
  link: string
  thumbnail: string
  background: string
}

const categories: CategoryProps[] = [
  {
    title: 'Vegetables',
    link: '/categories/vegetables',
    thumbnail: productCategories.vegetables,
    background: '#ffe2e2',
  },
  {
    title: 'Leafy Greens',
    link: '/categories/leafy-greens',
    thumbnail: productCategories.leafyGreens,
    background: '#b9f8cf',
  },
  {
    title: 'Grains',
    link: '/categories/grains',
    thumbnail: productCategories.grains,
    background: '#fef9c2',
  },
  {
    title: 'Fruits',
    link: '/categories/fruits',
    thumbnail: productCategories.fruits,
    background: '#e4e4e7',
  },
  {
    title: 'Drinks',
    link: '/categories/drinks',
    thumbnail: productCategories.drinks,
    background: '#ffe2e2',
  },
  {
    title: 'Dairies',
    link: '/categories/dairies',
    thumbnail: productCategories.dairies,
    background: '#ffedd4',
  },
  {
    title: 'Dry Fruits & Nuts',
    link: '/categories/dry-fruits-nuts',
    thumbnail: productCategories.dryFruitsNuts,
    background: '#fef3c6',
  },
  {
    title: 'Honey',
    link: '/categories/honey',
    thumbnail: productCategories.honey,
    background: '#e4e4e7',
  },
  {
    title: 'Mushroom',
    link: '/categories/mushroom',
    thumbnail: productCategories.mushroom,
    background: '#fefce8',
  },
]

const Category: FC<CategoryProps> = ({ title, link, thumbnail, background }) => {
  return (
    <Anchor component={NavLink} to={link} underline="never" style={{ userSelect: 'none' }}>
      <Paper bg={background} w={180} p={20} radius="sm" shadow="md">
        <Image src={thumbnail} alt={title} />
        <Text ta="center" size="md" c="black" mt="sm">
          {title}
        </Text>
      </Paper>
    </Anchor>
  )
}

const Categories = () => {
  return (
    <Box py={20}>
      <Title order={2} mb={20}>
        Categories
      </Title>

      <Carousel
        slideSize="15%"
        height="auto"
        slideGap="md"
        controlSize={30}
        withControls
        draggable
        withIndicators={false}
        emblaOptions={{
          loop: true,
          dragFree: true,
          align: 'start'
        }}
        styles={{
          control: {
            backgroundColor: '#fff',
          },
        }}
      >
        {categories.map((category, idx) => (
          <Carousel.Slide key={`${category.title}_${idx}`}>
            <Category {...category} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Box>
  )
}

export default Categories
