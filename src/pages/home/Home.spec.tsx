import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import HomePage from '@/pages/home/Home'

afterEach(cleanup)

vi.mock('react-router-dom', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useSearchParams: vi.fn(() => [
      { has: () => true, get: () => '123' },
      () => true
    ])
  }
})

describe('Home', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/?code=123-123-123-123']}>
        <HomePage />
      </MemoryRouter>
    )
  })

  it('should render carousel', () => {
    const carousel = screen.getByRole('region', { name: /carousel/i })
    expect(carousel).toBeDefined()
  })

  it('should render form', () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /validar/i
    })

    expect(input).toBeDefined()
    expect(button).toBeDefined()
  })
})
