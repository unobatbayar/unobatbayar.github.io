import { MetadataRoute } from 'next'
import { metaData } from './config'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${metaData.baseUrl}sitemap.xml`,
  }
}
