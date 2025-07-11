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
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import CartButton from './ui/CartButton'
import ProfileMenu from './ui/ProfileMenu'
import useUser from '../hooks/useUser'
import useCart from '../hooks/useCart'
import Icon from './shared/Icon'

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
      leftSection={<Icon name="search" size={16} />}
      rightSection={
        <ActionIcon size={28} radius="xl" color={theme.primaryColor} variant="filled">
          <Icon name="arrow_right" size={16} />
        </ActionIcon>
      }
    />
  )
}

const Navbar = () => {
  const [opened, { toggle, close }] = useDisclosure(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const theme = useMantineTheme()
  const navigate = useNavigate()
  const { states: userStates, handlers: userHandlers } = useUser()
  const { states: cartStates } = useCart()

  const logout = () => {
    userHandlers.logoutUser()
    navigate('/')
  }

  return (
    <>
      <Box
        px="md"
        py="sm"
        pos="sticky"
        top={0}
        bg="white"
        style={{
          borderBottom: '1px solid',
          borderColor: '#bedcbe',
          zIndex: 9,
        }}
      >
        <Container size="xl">
          <Flex justify="space-between" align="center">
            <Flex align="center">
              <Image src={Logo} h={40} w="auto" />
              <Anchor component={NavLink} to="/" underline="never">
                <Title order={2} c="fresh.8" size="h2">
                  Freshroot
                </Title>
              </Anchor>
            </Flex>

            {!isMobile && (
              <Group gap="md" align="center">
                {pages.map((page) => (
                  <Anchor key={page.link} component={NavLink} to={page.link} underline="never">
                    {page.label}
                  </Anchor>
                ))}
                <ProductSearch />
                <CartButton count={cartStates.productCount} />
                <ProfileMenu
                  user={userStates.user}
                  showLogin={() => userHandlers.toggleAuth('login', true)}
                  logout={logout}
                />
              </Group>
            )}

            {isMobile && (
              <>
                <Flex gap={15} align="center">
                  <CartButton count={cartStates.productCount} />
                  <ProfileMenu
                    user={userStates.user}
                    showLogin={() => userHandlers.toggleAuth('login', true)}
                    logout={logout}
                  />
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
    </>
  )
}

export default Navbar
