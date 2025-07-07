import { Box, Grid, GridCol, Divider, Text, Image, Flex, Anchor, Title } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import { Logo } from '../assets'

const quickLinks = [
  { name: 'Home', link: '/home' },
  { name: 'Best selling', link: '/best-selling' },
  { name: 'Offers & deals', link: '/offers-deals' },
  { name: 'Contact', link: '/contact' },
  { name: "FAQ's", link: '/faq' },
]

const needHelp = [
  { name: 'About delivery', link: '/about-delivery' },
  { name: 'Refund policy', link: '/refund-policy' },
  { name: 'Payment methods', link: '/payment-methods' },
  { name: 'Privacy policy', link: '/privacy-policy' },
]

const followUs = [
  { name: 'Instagram', link: '/instagram' },
  { name: 'Facebook', link: '/facebook' },
  { name: 'Twitter', link: '/twitter' },
  { name: 'Youtube', link: '/youtube' },
]

const Footer = () => {
  return (
    <>
      <Box bg="#d0fae5" py={20} px={60} mt={20}>
        <Grid>
          <GridCol span={6}>
            <Flex align="center">
              <Image src={Logo} h={45} w="auto" />
              <Anchor component={NavLink} to="/home" underline="never">
                <Title order={2} c="fresh.8" size="h1">
                  Freshroot
                </Title>
              </Anchor>
            </Flex>
            <Box w={400} mt={10}>
              <Text>
                Stay connected with us for the latest updates, special offers, and customer support.
                Follow us on social media, subscribe to our newsletter for exclusive content, and
                feel free to reach out—we’re always here to help.
              </Text>
            </Box>
          </GridCol>
          <GridCol span={2}>
            <Title order={4} mb={10}>
              Quick Links
            </Title>
            {quickLinks.map((quickLink) => (
              <Text c="fresh.9">
                <Anchor component={NavLink} to={quickLink.link} underline="never">
                  {quickLink.name}
                </Anchor>
              </Text>
            ))}
          </GridCol>
          <GridCol span={2}>
            <Title order={4} mb={10}>
              Need Help?
            </Title>
            {needHelp.map((helpLink) => (
              <Text c="fresh.9">
                <Anchor component={NavLink} to={helpLink.link} underline="never">
                  {helpLink.name}
                </Anchor>
              </Text>
            ))}
          </GridCol>
          <GridCol span={2}>
            <Title order={4} mb={10}>
              Follow Us
            </Title>
            {followUs.map((followLink) => (
              <Text c="fresh.9">
                <Anchor component={NavLink} to={followLink.link} underline="never">
                  {followLink.name}
                </Anchor>
              </Text>
            ))}
          </GridCol>
        </Grid>
      </Box>
      <Divider color="fresh.2" />
      <Box bg="#d0fae5" p={20}>
        <Text ta="center" c="#0008">
          © 2025 Freshroot. All rights reserved.
        </Text>
      </Box>
    </>
  )
}

export default Footer
