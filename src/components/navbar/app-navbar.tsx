import { NavLink } from 'react-router-dom'

import { Logo } from '@/components/ui'
import { siteConfig } from '@/config'

export const AppNavbar = () => {
  return (
    <header className="bg-white p-3 shadow-md">
      <div className="container mx-auto grid max-w-6xl items-center justify-center gap-5 md:grid-cols-2">
        <Logo />
        <nav className="flex justify-end gap-2">
          {siteConfig.mainNav.map(({ title, href }, i) => {
            const isLast = i === siteConfig.mainNav.length - 1
            return (
              <div key={title} className="flex gap-2 ">
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
      </div>
    </header>
  )
}
