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
    background_color: '#070a12',
    theme_color: '#00e5ff',
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
