import NukaCarousel from 'nuka-carousel'
import { FC, ReactNode } from 'react'

import { Icons } from '@/components/ui'

interface Props {
  children: ReactNode
}

export const Carousel: FC<Props> = ({ children }) => {
  return (
    <NukaCarousel
      renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
        <button
          onClick={previousSlide}
          disabled={previousDisabled}
          className="rotate-180 rounded-full bg-primary-700 p-2 disabled:opacity-50"
        >
          <Icons.chevronRight width={12} fill="white" />
        </button>
      )}
      renderCenterRightControls={({ nextDisabled, nextSlide }) => (
        <button
          onClick={nextSlide}
          disabled={nextDisabled}
          className="rounded-full bg-primary-700 p-2 disabled:opacity-50"
        >
          <Icons.chevronRight width={12} fill="white" />
        </button>
      )}
    >
      {children}
    </NukaCarousel>
  )
}
