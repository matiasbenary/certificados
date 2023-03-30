import { cleanup, render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { vi } from 'vitest'

import { CertificateForm } from '@/components/certificate/Form'

afterEach(cleanup)

vi.mock('axios')

describe('Certificate Form', () => {
  const setCertificate = vi.fn()

  beforeEach(() => {
    render(<CertificateForm setCertificate={setCertificate} />)
  })

  it('should render form', () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const button: HTMLButtonElement = screen.getByRole('button', {
      name: /ver validacion/i
    })

    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('should show error when code is invalid', async () => {
    const input: HTMLInputElement = screen.getByRole('textbox')
    const submitButton: HTMLButtonElement = screen.getByRole('button', {
      name: /ver validacion/i
    })

    await user.type(input, '123')

    expect(input.value).toBe('123')

    await user.click(submitButton)

    const alert = await screen.findByRole('alert')

    expect(alert).toBeInTheDocument()
  })
})
