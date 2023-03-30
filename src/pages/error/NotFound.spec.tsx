import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import NotFound from './NotFound'

describe('NotFound', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
  })

  it('should render 404', () => {
    const title = screen.getByRole('heading', { name: /404/i })
    const link = screen.getByRole('link', {
      name: /volver a la página principal/i
    })

    expect(title).toBeInTheDocument()
    expect(link).toBeInTheDocument()
  })
})
