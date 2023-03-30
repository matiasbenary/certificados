import { FC } from 'react'

import { CertificateType } from '@/types'

interface Props {
  certificate: CertificateType
}

export const Certificate: FC<Props> = ({ certificate = {} }) => {
  const { certificate_description, name, bussiness_name, code } = certificate

  return (
    <div className="p-6 text-center text-lg leading-8 text-gray-500">
      <p>
        Este certificado de{' '}
        <span className="font-bold">{certificate_description}</span> fue emitido
        a <span className="font-bold">{name}</span> avalado por la entidad{' '}
        <span className="font-bold"> {bussiness_name}</span>
      </p>
      <p>
        Código: <span className="font-bold"> {code}</span>
      </p>
    </div>
  )
}
