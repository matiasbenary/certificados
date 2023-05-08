import { ButtonHTMLAttributes, forwardRef } from 'react'

import { classNames } from '@/utils'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  unstyled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, unstyled, ...props }, ref) => {
    return (
      <button
        className={classNames(
          'active:scale-95 inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2  disabled:opacity-50 disabled:pointer-events-none  text-sm md:text-base  h-10  py-2 px-4',
          !unstyled &&
            'bg-primary hover:bg-primary-600 focus:ring-primary-300 text-white',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'
