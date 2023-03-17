import { apiCall } from 'lib/api'
import { useEffect, useState } from 'react'
import Error from './Error'

type TextProps = {
  code: string
}

type CertificateResponse = {
  name: string
  id: number
  id_number: string
  title: string
  certificate_description: string | null
  horas: string | null
  activity_from: string | null
  activity_to: string | null
  creatorName: string | null
  bussiness_name: string | null
}

const Text = ({ code }: TextProps) => {
  const [certificate, setCertificate] = useState<CertificateResponse>()

  const getData = async () => {
    const response = await apiCall(
      `getCertificateDate/${code.toUpperCase()}`,
      null,
      'GET'
    )
    setCertificate(response.data?.certificate)
  }

  useEffect(() => {
    getData()
  }, [])

  if (certificate === undefined) {
    return <p> Cargando...</p>
  }

  if (certificate === null) {
    return <Error></Error>
  }

  return (
    <div className="bg-gray-100 py-5 pl-6">
      <p>
        Este certificado fue emitido a {certificate.name} avalado por la entidad{' '}
        {certificate.bussiness_name}
      </p>
      <p> Código: {code}</p>
    </div>
  )
}

export default Text
