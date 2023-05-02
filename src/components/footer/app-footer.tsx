import { Icons, Logo } from '@/components/ui'
import { siteConfig } from '@/config'

export const AppFooter = () => {
  return (
    <div className="bg-primary py-10 text-white">
      <div className="container max-w-6xl mx-auto flex flex-col justify-between gap-5 p-4 md:flex-row">
        <div className="flex flex-col items-center gap-8">
          <Logo fill="white" width={300} />

          <div className="flex gap-8">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.facebook fill="white" width={25} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.linkedin fill="white" width={25} />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.twitter fill="white" width={25} />
            </a>
          </div>
        </div>
        <div className="flex max-w-xl flex-col gap-8">
          <p className="text-center md:text-left">{siteConfig.description}</p>
          <div className="flex justify-between">
            <a href="/terms-of-service" className="underline">
              Terminos de Uso
            </a>
            <a href="/privacy-policy" className="underline">
              Politica de privacidad
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
