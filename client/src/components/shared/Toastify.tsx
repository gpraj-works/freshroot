import toast, { type ToastOptions } from 'react-hot-toast'
import icons from '../../utils/icon'
import { type IconName } from './Icon'

type IconOptions = {
  name: IconName
  size?: number
  color?: string
}

type ExtendedToastOptions = Omit<ToastOptions, 'icon'> & {
  icon?: IconOptions
}

export function toastify(message: string, options?: ExtendedToastOptions) {
  const { icon, ...toastOptions } = options || {}
  const Icon = icon && icons[icon.name]
  return toast(message, {
    ...toastOptions,
    ...(Icon && { icon: <Icon size={icon.size ?? 20} color={icon.color} /> }),
  })
}
