import { Paper, Flex, Stack, Image, Tooltip, Anchor, Box } from '@mantine/core'
import { type FC } from 'react'
import { type IconName } from '../../components/shared/Icon'
import Icon from '../../components/shared/Icon'
import { Logo } from '../../assets'
import { useViewportSize } from '@mantine/hooks'

interface NavbarLinkProps {
  icon: IconName
  label: string
  active?: boolean
  link: string
}

const NavLink: FC<NavbarLinkProps> = ({ icon, label, link }) => {
  return (
    <Tooltip label={label} position="right" offset={15} transitionProps={{ duration: 0 }}>
      <Anchor href={link}>
        <Icon name={icon} color="#525252" />
      </Anchor>
    </Tooltip>
  )
}

const Navbar = () => {
  const { height } = useViewportSize()

  return (
    <Paper w={75} h={height - 18} shadow="md" radius="md" withBorder>
      <Flex direction="column" justify="space-between" align="center" h="100%" p="md">
        <Stack gap={50}>
          <Flex align="center" justify="center">
            <Image src={Logo} w={40} />
          </Flex>
          <Stack align="center">
            <NavLink link='/seller/' icon="pie_chart" label="Dashboard" />
            <NavLink link='/seller/add-product' icon="add_circle" label="Add Product" />
            <NavLink link='/seller/products' icon="menu" label="Products" />
            <NavLink link='/seller/orders' icon="history" label="Orders" />
            <NavLink link='/seller/settings' icon="settings" label="Settings" />
          </Stack>
        </Stack>

        <Box>
          <Stack align="center">
            <NavLink link='/seller/profile' icon="user" label="Profile" />
            <NavLink link="/seller/logout" icon="logout" label="Logout" />
          </Stack>
        </Box>
      </Flex>
    </Paper>
  )
}

export default Navbar
