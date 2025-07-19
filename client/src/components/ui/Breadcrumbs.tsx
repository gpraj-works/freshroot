import { type FC } from 'react'
import { Breadcrumbs as MantineBreadcrumbs, Anchor } from '@mantine/core'
import Icon from '../shared/Icon'

interface BreadcrumbsProps {
  items: { label: string; link: string }[]
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <MantineBreadcrumbs
      separator={<Icon name="breadcrumb_next" color="#438344" size={20} />}
      separatorMargin={3}
    >
      {items.map((item, idx) => (
        <Anchor key={item.label + idx} fz="sm" href={item.link}>
          {item.label}
        </Anchor>
      ))}
    </MantineBreadcrumbs>
  )
}

export default Breadcrumbs
