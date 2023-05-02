import { FC, useEffect, useState } from 'react'

import { Alert, Button, Icons, Input, Spinner } from '@/components/ui'
import { apiCall } from '@/lib'
import { CertificateType } from '@/types'
import { classNames, validCode } from '@/utils'
import { useSearchParams } from 'react-router-dom'

interface Props {
  setCertificate: (certificate: CertificateType) => void
}

export const CertificateForm: FC<Props> = ({ setCertificate }) => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [code, setCode] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validteCertificate = async () => {
    setIsError(false)

    if (!validCode(code)) {
      setIsError(true)
      return
    }

    setSearchParams({ code: code.toUpperCase() })

    setIsLoading(true)
    try {
      const { data } = await apiCall(`getCertificateDate/${code.toUpperCase()}`)
      setCertificate({
        ...data,
        code
      })
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!searchParams.has('code')) return

    const code = searchParams.get('code') || ''

    setCode(code)

    validteCertificate()
  }, [])

  return (
    <>
      <form
        className="grid gap-4 rounded py-4 px-6 shadow md:grid-cols-5 md:items-end bg-white"
        onSubmit={(e) => {
          e.preventDefault()
          validteCertificate()
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
          />
        </div>
        <Button className="w-full" type="submit" disabled={isLoading}>
          Validar
        </Button>
      </form>

      {isError && (
        <Alert>
          <div className="flex gap-4 items-center justify-center">
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
