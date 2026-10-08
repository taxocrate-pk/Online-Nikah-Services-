/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.onlinenikahservices.com' }],
        destination: 'https://onlinenikahservices.com/:path*',
        permanent: true,
      },

      // Consolidate legacy generic Online Nikah service URLs into the strongest current intent pages.
      { source: '/get-married-online-our-online-nikah-services/', destination: '/', permanent: true },
      { source: '/online-nikah-services-and-validity-of-online-nikah/', destination: '/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/', permanent: true },
      { source: '/understanding-online-nikah-a-comprehensive-guide/', destination: '/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/', permanent: true },
      { source: '/online-marriage-services-in-the-modern-era/', destination: '/', permanent: true },
      { source: '/online-nikah-documentation-by-expert-lawyers/', destination: '/pakistan/', permanent: true },
      { source: '/online-nikah-services-in-islamabad-karachi-rahimyar-khan-lahore-peshawar-rawalpindi/', destination: '/online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/', permanent: true },

      // Preserve indexed city URLs; redirect only new clean aliases to the historical canonical targets.
      { source: '/karachi/', destination: '/online-nikah-marriage-court-marriage-in-karachi/', permanent: true },
      { source: '/lahore/', destination: '/online-nikah-marriage-court-marriage-in-lahore/', permanent: true },
      { source: '/islamabad/', destination: '/online-nikah-marriage-court-marriage-in-islamabad/', permanent: true },
      { source: '/rahim-yar-khan/', destination: '/online-nikah-marriage-court-marriage-in-rahimyar-khan/', permanent: true },


      // Consolidate older overlapping marriage-document and generic content with stronger preserved targets.
      { source: '/nadra-marriage-certificate-in-pakistan/', destination: '/nadra-marriage-certificate-authenticity-guide/', permanent: true },
      { source: '/non-marriage-certificate-right-for-you/', destination: '/nadra-marriage-certificate-authenticity-guide/', permanent: true },
      { source: '/online-marriage-success-stories/', destination: '/', permanent: true },

      // Court-marriage-only legacy intent belongs to the dedicated Court Marriage property.
      { source: '/court-marriage-civil-marriage-in-pakistan-about-court-marriage/', destination: 'https://court-marriage.com/', permanent: true },
      { source: '/court-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/', destination: 'https://court-marriage.com/', permanent: true },
      { source: '/court-marriage-in-karachi-islamabad-rawalpindi-pakistan', destination: 'https://court-marriage.com/', permanent: true },
      { source: '/court-marriage-in-karachi-islamabad-rawalpindi-pakistan/', destination: 'https://court-marriage.com/', permanent: true },
      { source: '/introduction-to-court-marriage-unveiling-the-legal-union/', destination: 'https://court-marriage.com/', permanent: true },
      { source: '/understanding-the-process-of-civil-marriage-ceremonies/', destination: 'https://court-marriage.com/', permanent: true },

      // Old WordPress index.php variants.
      { source: '/index.php/about-us/', destination: '/about-us/', permanent: true },
      { source: '/index.php/contact-us/', destination: '/contact-us/', permanent: true },
      { source: '/index.php/online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/', destination: '/online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/', permanent: true },
      { source: '/index.php/online-nikah-services-in-islamabad-karachi-rahimyar-khan-lahore-peshawar-rawalpindi/', destination: '/online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan/', permanent: true },
      { source: '/category/uncategorized/', destination: '/blogs/', permanent: true },
      { source: '/author/:path*', destination: '/about-us/', permanent: true },
    ]
  },
}

export default nextConfig
