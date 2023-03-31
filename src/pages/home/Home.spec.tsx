import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import HomePage from './Home'

afterEach(cleanup)

describe('Home', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    )
  })

  it('should render carousel', () => {
    const carousel = screen.getByRole('region', { name: /carousel/i })
    expect(carousel).toBeDefined()
  })

  it('should render form', () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /ver validacion/i
    })

    expect(input).toBeDefined()
    expect(button).toBeDefined()
  })
})
