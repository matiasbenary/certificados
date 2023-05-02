import { useState } from 'react'

import Banner1 from '@/assets/banner/1.png'
import Banner2 from '@/assets/banner/2.png'
import Banner3 from '@/assets/banner/3.png'
import { Certificate, CertificateForm } from '@/components/certificate'
import { Carousel } from '@/components/ui'
import { siteConfig } from '@/config'
import { CertificateType } from '@/types'

const HomePage = () => {
  const [certificate, setCertificate] = useState<CertificateType | null>(null)

  return (
    <div className="container max-w-6xl mx-auto grid gap-10 ">
      <Carousel>
        {[Banner1, Banner2, Banner3].map((banner, index) => (
          <a
            key={`banner-${index}`}
            href={siteConfig.social.home}
            target="_blank"
            rel="noreferrer"
          >
            <img src={banner} alt={`Banner ${index}`} className="w-full" />
          </a>
        ))}
      </Carousel>

      {/* Certificate */}

      <CertificateForm setCertificate={setCertificate} />

      {certificate && <Certificate certificate={certificate} />}
    </div>
  )
}
export default HomePage
