import { type FC } from 'react'
import { Breadcrumbs as MantineBreadcrumbs, Anchor } from '@mantine/core'
import Icon from '../shared/Icon'

interface BreadcrumbsProps {
  items: { label: string; link: string }[]
  fontSize?: number | string
  iconSize?: number
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items, fontSize, iconSize }) => {
  return (
    <MantineBreadcrumbs
      separator={<Icon name="breadcrumb_next" color="#438344" size={iconSize ?? 20} />}
      separatorMargin={3}
    >
      {items.map((item, idx) => (
        <Anchor key={item.label + idx} fz={fontSize ?? 'sm'} href={item.link}>
          {item.label}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  )
}

export default Breadcrumbs
