import { MetadataRoute } from 'next'
import { metaData } from './config'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metaData.name,
    short_name: metaData.name,
    description: metaData.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#05140b',
    theme_color: '#39ff14',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
