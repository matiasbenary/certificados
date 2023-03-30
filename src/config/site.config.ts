import { NavItem } from '@/types'

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  social: {
    home: string
    twitter: string
    facebook: string
    linkedin: string
  }
}

export const siteConfig: SiteConfig = {
  name: 'Fonselp',
  description:
    'Fonselp opera en Argentina a través de Res Non Verba Asociación Civil, en Colombia a través de Fundación Casa Cívica y en México a través Tecnología sin fines de Lucro AC.',
  mainNav: [
    {
      title: 'Sitio Institucional',
      href: 'https://www.fonselp.org/'
    },
    {
      title: 'Registrate',
      href: 'https://app.fonselp.com/sumarse'
    },
    {
      title: 'Iniciar Sesión',
      href: 'https://app.fonselp.com/login'
    }
  ],
  social: {
    home: 'https://fonselp.org',
    facebook: 'https://www.facebook.com/fonselp/',
    twitter: 'https://twitter.com/fonselpC',
    linkedin: 'https://www.linkedin.com/company/fonselp/'
  }
}
