import { saveAs } from 'file-saver'
import { FC, useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { Button, Icons } from '@/components/ui'
import { apiCall } from '@/lib'
import { CertificateType } from '@/types'

interface Props {
  certificate: CertificateType
}

export const Certificate: FC<Props> = ({ certificate = {} }) => {
  const { name, bussiness_name, code } = certificate
  const [isCopied, setIsCopied] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [isCopied])

  const download = async () => {
    try {
      setIsDownloading(true)
      const { data } = await apiCall(
        `certificate/${code}`,
        undefined,
        'GET',
        'blob'
      )
      saveAs(data, `Certificate.pdf`)
    } catch (error) {
      alert('ERROR')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section className="rounded bg-white">
      <div className="flex items-center gap-2 border-b-2 border-slate-300 p-4">
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
      <div className="flex justify-end gap-5 p-4">
        <Button
          className="flex items-center gap-2 bg-gray-200 font-normal text-primary-400 shadow-lg hover:bg-gray-100"
          unstyled
          onClick={download}
        >
          <span>{isDownloading ? 'Descargando...' : 'Descargar'}</span>
          <Icons.download />
        </Button>
        <CopyToClipboard text={location.href} onCopy={() => setIsCopied(true)}>
          <Button
            className="flex items-center gap-2 bg-gray-200 font-normal text-black shadow-lg hover:bg-gray-100"
            unstyled
          >
            <Icons.copy />
            <span>{isCopied ? 'Copiado' : 'Copiar'}</span>
          </Button>
        </CopyToClipboard>
      </div>
    </section>
  )
}
