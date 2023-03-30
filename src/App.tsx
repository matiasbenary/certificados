import { Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/layouts'
import NotFound from '@/pages/error/NotFound'
import HomePage from '@/pages/home/Home'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
