import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Alert, Button, Icons, Input, Spinner } from '@/components/ui'
import { apiCall } from '@/lib'
import { CertificateType } from '@/types'
import { classNames, validCode } from '@/utils'

interface Props {
  setCertificate: (certificate: CertificateType | null) => void
}

export const CertificateForm: FC<Props> = ({ setCertificate }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [code, setCode] = useState(searchParams.get('code') || '')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateCertificate = async () => {
    setIsError(false)
    setCertificate(null)

    if (!validCode(code)) {
      setSearchParams()
      setIsError(true)
      return
    }

    setIsLoading(true)
    try {
      const { data } = await apiCall(`getCertificateDate/${code.toUpperCase()}`)

      if (!data?.certificate) throw new Error('No se encontró el certificado')

      setCertificate({
        ...data?.certificate,
        code
      })

      setSearchParams({ code: code.toUpperCase() })
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!code) return
    validateCertificate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <form
        className="grid gap-4 rounded bg-white py-4 px-6 shadow md:grid-cols-5 md:items-end"
        onSubmit={(e) => {
          e.preventDefault()
          validateCertificate()
        }}
      >
        <div className="grid gap-4 md:col-span-4">
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
            autoComplete="off"
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          Validar
        </Button>
      </form>

      {isError && (
        <Alert>
          <div className="flex items-center justify-center gap-4">
            <Icons.alert />
            <p>El codigo ingresado no es válido</p>
          </div>
        </Alert>
      )}

      {isLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}
    </>
  )
}
