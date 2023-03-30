import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Alert: FC<Props> = ({ children }) => {
  return (
    <div className="bg-red-400 p-4 text-center text-white" role="alert">
      {children}
    </div>
  )
}
