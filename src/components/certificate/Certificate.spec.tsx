import { cleanup, render, screen } from '@testing-library/react'
import { describe } from 'vitest'

import { Certificate } from '@/components/certificate/Certificate'
import { CertificateType } from '@/types'

afterEach(cleanup)

// TODO: Faltan tests

describe('Certificate', () => {
  const certificate: CertificateType = {
    id: 123,
    name: 'Juan',
    bussiness_name: 'Empresa',
    id_number: '123456',
    title: 'Certificado de prueba',
    certificate_description: 'Este es un certificado de prueba',
    horas: '10',
    code: 'AAAA-BBBB-CCCC-DDDD',
    activity_from: new Date(),
    activity_to: new Date(),
    creatorName: 'Pepe'
  }

  beforeEach(() => {
    render(<Certificate certificate={certificate} />)
  })

  it('should render certificate', () => {
    const code = screen.getByText(certificate.code)
    const name = screen.getByText(certificate.name)
    const business_name = screen.getByText(certificate.bussiness_name!)

    expect(code).toBeDefined()
    expect(name).toBeDefined()
    expect(business_name).toBeDefined()
  })
})
