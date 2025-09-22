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
    background_color: '#ffffff',
    theme_color: '#667eea',
    icons: [
      {
        src: '/images/profile.jpeg',
        sizes: 'any',
        type: 'image/jpeg',
      },
    ],
  }
}
