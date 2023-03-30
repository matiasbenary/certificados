import { FC } from 'react'
import { Link } from 'react-router-dom'

import { IconProps, Icons } from '@/components/ui'
import { siteConfig } from '@/config'

export const Logo: FC<IconProps> = ({ fill = '#2CAAE1', width = 250 }) => {
  return (
    <Link to="/">
      <h1 className="sr-only">{siteConfig.name}</h1>
      <Icons.logo fill={fill} width={width} />
    </Link>
  )
}
