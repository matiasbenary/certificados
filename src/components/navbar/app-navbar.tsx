import { NavLink } from 'react-router-dom'

import { Logo } from '@/components/ui'
import { siteConfig } from '@/config'

export const AppNavbar = () => {
  return (
    <header className="grid items-center justify-center gap-5 p-4 shadow-md md:grid-cols-2 md:p-8">
      <Logo />
      <nav className="flex justify-end gap-4">
        {siteConfig.mainNav.map(({ title, href }, i) => {
          const isLast = i === siteConfig.mainNav.length - 1
          return (
            <div key={title} className="flex gap-5 text-primary">
              <NavLink
                to={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                className={({ isActive }) => (isActive ? 'underline ' : '')}
              >
                {title}
              </NavLink>
              {!isLast && <span className="text-gray-500">|</span>}
            </div>
          )
        })}
      </nav>
    </header>
  )
}
