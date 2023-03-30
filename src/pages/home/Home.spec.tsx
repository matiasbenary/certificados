import { cleanup, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe } from 'vitest'

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
    expect(carousel).toBeInTheDocument()
  })

  it('should render form', () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /ver validacion/i
    })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })
})
