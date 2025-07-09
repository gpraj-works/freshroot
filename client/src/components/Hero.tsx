import { Anchor, BackgroundImage, Button, Flex, Stack, Title, Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { NavLink } from 'react-router-dom'
import { LargeBanner, SmallBanner } from '../assets'
import Icon from './shared/Icon'

const HeroSection = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')
  return (
    <Box py={30}>
      <BackgroundImage src={isMobile ? SmallBanner : LargeBanner} bgp="top" radius={5}>
        <Stack
          justify="center"
          align={isMobile ? 'center' : 'flex-start'}
          w={{ base: '100%', md: 650, lg: 750 }}
          h={520}
          px={{ base: 20, sm: 40, md: 50, lg: 65 }}
          gap={40}
        >
          <Title
            order={1}
            style={{
              lineHeight: 1.3,
              color: '#2C3930',
              ...(isMobile && {
                textAlign: 'center',
              }),
            }}
            fz={{ base: 45, sm: 52, md: 56, lg: 64 }}
          >
            Freshness that flows from pure roots to your plate
          </Title>
          <Flex gap={30} align="center" wrap="wrap-reverse">
            <Button size="lg" {...(isMobile && { rightSection: <Icon name='arrow_right' /> })}>
              Purchase now
            </Button>
            {!isMobile && (
              <Anchor
                component={NavLink}
                to="/products"
                underline="never"
                size="lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                Explore products <Icon name='arrow_right' />
              </Anchor>
            )}
          </Flex>
        </Stack>
      </BackgroundImage>
    </Box>
  )
}

export default HeroSection
