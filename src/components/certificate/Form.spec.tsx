import { cleanup, render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'

import { CertificateForm } from '@/components/certificate/Form'

afterEach(cleanup)

vi.mock('axios')

// TODO: Faltan validar casos

vi.mock('react-router-dom', async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = (await vi.importActual('react-router-dom')) as any
  return {
    ...actual,
    useSearchParams: vi.fn(() => [
      { has: () => true, get: () => 'UK6A-4J5H-09KO-7PSG' },
      () => true
    ])
  }
})

describe('Certificate Form', () => {
  const setCertificate = vi.fn()

  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['?code=UK6A-4J5H-09KO-7PSG']}>
        <CertificateForm setCertificate={setCertificate} />
      </MemoryRouter>
    )
  })

  it('should render form', () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /validar/i
    })

    expect(input).toBeDefined()
    expect(button).toBeDefined()
  })

  it('should show error when code is invalid', async () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const submitButton: HTMLButtonElement = screen.getByRole('button', {
      name: /validar/i
    })

    expect(input.value).toBe('UK6A-4J5H-09KO-7PSG')

    await user.click(submitButton)

    const alert = await screen.findByRole('alert')

    expect(alert).toBeDefined()
  })
})
