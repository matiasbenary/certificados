import { cleanup, render, screen } from '@testing-library/react'
import { describe } from 'vitest'

import { Certificate } from '@/components/certificate/Certificate'
import { CertificateType } from '@/types'

afterEach(cleanup)

describe('Certificate', () => {
  const certificate: CertificateType = {
    id: 123,
    name: 'Juan',
    bussiness_name: 'Empresa',
    id_number: '123456',
    title: 'Certificado de prueba',
    activity_from: '2021-01-01',
    activity_to: '2021-01-01',
    certificate_description: 'Este es un certificado de prueba',
    creatorName: 'Juan',
    horas: '10',
    code: 'AAAA-BBBB-CCCC-DDDD'
  }

  beforeEach(() => {
    render(<Certificate certificate={certificate} />)
  })

  it('should render certificate', () => {
    const code = screen.getByText(certificate.code)
    const name = screen.getByText(certificate.name)
    const description = screen.getByText(certificate.certificate_description!)
    const business_name = screen.getByText(certificate.bussiness_name!)

    expect(code).toBeDefined()
    expect(name).toBeDefined()
    expect(description).toBeDefined()
    expect(business_name).toBeDefined()
  })
})
