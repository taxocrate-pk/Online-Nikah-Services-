const base = 'https://onlinenikahservices.com'

const routes = [
  '/',
  '/our-services/',
  '/pakistan/',
  '/online-nikah-marriage-court-marriage-in-karachi/',
  '/online-nikah-marriage-court-marriage-in-lahore/',
  '/online-nikah-marriage-court-marriage-in-islamabad/',
  '/rawalpindi/',
  '/faisalabad/',
  '/hyderabad/',
  '/online-nikah-marriage-court-marriage-in-rahimyar-khan/',
  '/online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/',
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
