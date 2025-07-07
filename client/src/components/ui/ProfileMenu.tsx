import { Avatar, Button, Divider, Menu } from '@mantine/core'
import { type FC } from 'react'
import { avatar } from '../../assets'

interface ProfileMenuProps {
  user: object | null | boolean
  showUserLogin: (isShow: boolean) => void
  logout: () => void
}

const ProfileMenu: FC<ProfileMenuProps> = (props) => {
  if (!props.user) {
    return (
      <Button onClick={() => props.showUserLogin(true)}>
        Login
      </Button>
    )
  }

  return (
    <Menu shadow="md" width={130} position="top-end">
      <Menu.Target>
        <Avatar src={avatar['f45414cd']} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item component="a" href="/orders">
          Orders
        </Menu.Item>
        <Divider />
        <Menu.Item onClick={props.logout}>Logout</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default ProfileMenu
