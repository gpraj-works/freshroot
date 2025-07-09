import type { FC } from 'react'
import icons from '../../utils/icon'

export type IconName = keyof typeof icons

interface IconProps {
  name: IconName
  color?: string
  size?: number
}

const Icon: FC<IconProps> = ({ name, color, size }) => {
  const RemixIcon = icons[name]
  return <RemixIcon size={size} color={color} />
}

export default Icon
