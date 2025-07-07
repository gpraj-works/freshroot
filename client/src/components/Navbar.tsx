import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Drawer,
  Flex,
  Group,
  Image,
  Stack,
  TextInput,
  Title,
  useMantineTheme,
  Container,
} from '@mantine/core'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { RiArrowRightLine, RiSearchLine } from '@remixicon/react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { useAppContext } from '../hooks/useAppContext'
import CartButton from './ui/CartButton'
import ProfileMenu from './ui/ProfileMenu'

const pages = [
  { label: 'Home', link: '/' },
  { label: 'Products', link: '/products' },
  { label: 'Contact', link: '/contact' },
]

const ProductSearch = () => {
  const theme = useMantineTheme()
  return (
    <TextInput
      radius="xl"
      placeholder="Search products"
      leftSection={<RiSearchLine size={16} />}
      rightSection={
        <ActionIcon size={28} radius="xl" color={theme.primaryColor} variant="filled">
          <RiArrowRightLine size={16} />
        </ActionIcon>
      }
    />
  )
}

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const theme = useMantineTheme()
  const { user, setUser, setShowUserLogin } = useAppContext()
  const navigate = useNavigate()

  const logout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <Box px="md" py="sm" style={{ borderBottom: '1px solid', borderColor: '#bedcbe' }}>
      <Container size="xl">
        <Flex justify="space-between" align="center">
          <Flex align="center">
            <Image src={Logo} h={40} w="auto" />
            <Anchor component={NavLink} to="/home" underline="never">
              <Title order={2} c="fresh.8" size="h2">
                Freshroot
              </Title>
            </Anchor>
          </Flex>

          {!isMobile && (
            <Group gap="lg" align="center">
              {pages.map((page) => (
                <Anchor key={page.link} component={NavLink} to={page.link} underline="never">
                  {page.label}
                </Anchor>
              ))}
              <ProductSearch />
              <CartButton count={2} />
              <ProfileMenu user={user} showUserLogin={setShowUserLogin} logout={logout} />
            </Group>
          )}

          {isMobile && (
            <>
              <Flex gap={15} align="center">
                <CartButton count={2} />
                <ProfileMenu user={user} showUserLogin={setShowUserLogin} logout={logout} />
                <Burger opened={opened} onClick={toggle} color={theme.primaryColor} />
              </Flex>
              <Drawer
                opened={opened}
                onClose={close}
                title="Menu"
                padding="md"
                position="right"
                size="xs"
              >
                <Stack gap="md">
                  {pages.map((page) => (
                    <Anchor
                      key={page.link}
                      component={NavLink}
                      to={page.link}
                      onClick={close}
                      underline="never"
                      size="md"
                    >
                      {page.label}
                    </Anchor>
                  ))}
                  <ProductSearch />
                </Stack>
              </Drawer>
            </>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
