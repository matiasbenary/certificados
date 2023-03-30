import { FC, useState } from 'react'

import { Alert, Button, Input, Spinner } from '@/components/ui'
import { apiCall } from '@/lib'
import { CertificateType } from '@/types'
import { classNames, validCode } from '@/utils'

interface Props {
  setCertificate: (certificate: CertificateType) => void
}

export const CertificateForm: FC<Props> = ({ setCertificate }) => {
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsError(false)

    if (!validCode(code)) {
      setIsError(true)
      return
    }
    setIsLoading(true)

    try {
      const { data } = await apiCall(`getCertificateDate/${code.toUpperCase()}`)
      setCertificate({
        ...data?.certificate,
        code
      })
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <form
        className="grid gap-4 rounded p-4 shadow md:grid-cols-4 md:items-end"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-2 md:col-span-3">
          <label htmlFor="certificate" className="text-gray-700">
            Insertar el codigo de certificado
            <span className="ml-1 text-red-500">*</span>
          </label>
          <Input
            id="certificate"
            value={code}
            className={classNames(isError && 'border-red-500 focus:ring-0')}
            onChange={(e) => {
              setIsError(false)
              setCode(e.target.value)
            }}
            required
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          Ver validacion
        </Button>
      </form>

      {isError && <Alert>El codigo ingresado no es válido</Alert>}

      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
    </>
  )
}
