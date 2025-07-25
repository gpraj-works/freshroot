import { Box, Grid, GridCol, Divider, Text, Image, Flex, Anchor, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { LogoWhite } from '../assets'
import Icon from './shared/Icon'
import dayjs from 'dayjs'

const quickLinks = [
  { name: 'Home', link: '/', icon: <Icon name="home" size={18} /> },
  { name: 'Best selling', link: '/best-selling', icon: <Icon name="bar_chart" size={18} /> },
  { name: 'Offers & deals', link: '/offers-deals', icon: <Icon name="discount" size={18} /> },
  { name: 'Contact', link: '/contact', icon: <Icon name="email" size={18} /> },
]

const needHelp = [
  { name: 'About delivery', link: '/about-delivery', icon: <Icon name="delivery" size={18} /> },
  { name: 'Refund policy', link: '/refund-policy', icon: <Icon name="refund" size={18} /> },
  { name: 'Payment methods', link: '/payment-methods', icon: <Icon name="payment" size={18} /> },
  { name: 'Privacy policy', link: '/privacy-policy', icon: <Icon name="secure" size={18} /> },
]

const followUs = [
  { name: 'Instagram', link: '/instagram', icon: <Icon name="instagram" size={18} /> },
  { name: 'Facebook', link: '/facebook', icon: <Icon name="facebook" size={18} /> },
  { name: 'Twitter', link: '/twitter', icon: <Icon name="twitter" size={18} /> },
  { name: 'Youtube', link: '/youtube', icon: <Icon name="youtube" size={18} /> },
]

const Footer = () => {
  return (
    <Box>
      <Box bg="fresh.8" py={20} px={{ base: 20, lg: 60 }} mt={20}>
        <Grid>
          <GridCol span={{ base: 12, lg: 6 }}>
            <Flex align="center" gap={5}>
              <Image src={LogoWhite} h={40} w="auto" />
              <Anchor component={NavLink} to="/home" underline="never">
                <Title order={2} c="white" size="h1">
                  Freshroot
                </Title>
              </Anchor>
            </Flex>
            <Box w={{ base: 'auto', lg: 560 }} mt={10} px={10}>
              <Text c="white">
                Stay connected with us for the latest updates, special offers, and customer support.
                Follow us on social media, subscribe to our newsletter for exclusive content, and
                feel free to reach out—we’re always here to help.
              </Text>
            </Box>
          </GridCol>
          <GridCol span={{ base: 12, lg: 2 }}>
            <Title c="white" order={4} mb={10}>
              Quick Links
            </Title>
            {quickLinks.map((quickLink) => (
              <Text c="fresh.9" key={quickLink.name}>
                <Anchor
                  component={NavLink}
                  to={quickLink.link}
                  underline="never"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  c="white"
                >
                  {quickLink.icon}
                  <span>{quickLink.name}</span>
                </Anchor>
              </Text>
            ))}
          </GridCol>
          <GridCol span={{ base: 12, lg: 2 }}>
            <Title c="white" order={4} mb={10}>
              Need Help?
            </Title>
            {needHelp.map((helpLink) => (
              <Text key={helpLink.name}>
                <Anchor
                  component={NavLink}
                  to={helpLink.link}
                  underline="never"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  c="white"
                >
                  {helpLink.icon}
                  <span>{helpLink.name}</span>
                </Anchor>
              </Text>
            ))}
          </GridCol>
          <GridCol span={{ base: 12, lg: 2 }}>
            <Title c="white" order={4} mb={10}>
              Follow Us
            </Title>
            {followUs.map((followLink) => (
              <Text key={followLink.name}>
                <Anchor
                  component={NavLink}
                  to={followLink.link}
                  underline="never"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
                  c="white"
                >
                  {followLink.icon}
                  <span>{followLink.name}</span>
                </Anchor>
              </Text>
            ))}
          </GridCol>
        </Grid>
      </Box>
      <Box bg="fresh.9" p={10}>
        <Text ta={{ base: 'left', lg: 'center' }} c="white">
          © {dayjs().year()} Freshroot. All rights reserved.
        </Text>
      </Box>
    </Box>
  )
}

export default Footer
