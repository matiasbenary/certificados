import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { AppFooter } from '@/components/footer'
import { AppNavbar } from '@/components/navbar'

export const AppLayout: FC = () => {
  return (
    <div className="grid gap-5 bg-[#f5f5f5]">
      <AppNavbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <AppFooter />
    </div>
  )
}
