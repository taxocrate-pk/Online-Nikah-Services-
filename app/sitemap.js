const base = 'https://onlinenikahservices.com'

const routes = [
  '/',
  '/our-services/',
  '/pakistan/',
  '/karachi/',
  '/lahore/',
  '/islamabad/',
  '/rawalpindi/',
  '/faisalabad/',
  '/hyderabad/',
  '/rahim-yar-khan/',
  '/united-arab-emirates/',
  '/saudi-arabia/',
  '/qatar/',
  '/united-kingdom/',
  '/united-states/',
  '/canada/',
  '/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/',
  '/online-nikah-service-in-pakistan-urdu/',
  '/nikah-khawan-service-overview-a-comprehensive-guide/',
  '/nadra-marriage-certificate-authenticity-guide/',
  '/blogs/',
  '/about-us/',
  '/contact-us/'
]

export default function sitemap(){
  return routes.map((path) => ({
    url: `${base}${path === '/' ? '/' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/pakistan/' ? 0.95 : path.startsWith('/online-nikah-') ? 0.75 : 0.8
  }))
}
