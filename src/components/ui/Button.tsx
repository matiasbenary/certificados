import { ButtonHTMLAttributes, forwardRef } from 'react'

import { classNames } from '@/utils'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={classNames(
          'active:scale-95 inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:opacity-50 disabled:pointer-events-none bg-primary text-sm md:text-base text-white h-10 hover:bg-primary-600 py-2 px-4',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
