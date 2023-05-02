import { FC } from 'react'

import { CertificateType } from '@/types'
import { Button, Icons } from '@/components/ui'

interface Props {
  certificate: CertificateType
}

export const Certificate: FC<Props> = ({ certificate = {} }) => {
  const { name, bussiness_name, code } = certificate

  return (
    <section className="bg-white rounded">
      <div className="border-b-2 border-slate-300 p-4 flex gap-2 items-center">
        <Icons.checkValid />
        <h2>Certificado Valido</h2>
      </div>
      <div className="p-4 text-lg">
        <p className="space-x-2">
          El certificado con codigo: <strong>{code}</strong> fue emitido a{' '}
          <strong>{name}</strong>
        </p>
        <p>
          Avalado por la entidad <strong>{bussiness_name}</strong>
        </p>
      </div>
      <div className="grid grid-cols-3 p-4">
        <p className="col-span-2">logo</p>
        <div className="flex gap-5 justify-end">
          <Button className="text-primary-400 bg-gray-200 font-normal shadow-lg flex gap-2 items-center hover:bg-gray-100">
            <span>Descargar</span>
            <Icons.download />
          </Button>

          <Button className="text-black bg-gray-200 font-normal shadow-lg flex gap-2 items-center hover:bg-gray-100">
            <Icons.copy />
            <span>Copiar</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
