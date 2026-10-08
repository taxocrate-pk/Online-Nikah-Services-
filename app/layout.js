import Image from 'next/image'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://onlinenikahservices.com'),
  title: {
    default: 'Online Nikah Pakistan | Online Nikah Services',
    template: '%s | Online Nikah Services'
  },
  description: 'Online Nikah services in Pakistan for local and overseas couples: legal guidance, remote ceremony coordination, documents and registration assistance.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Online Nikah Services',
    title: 'Online Nikah Pakistan | Online Nikah Services',
    description: 'Pakistan-based Online Nikah guidance, remote ceremony coordination and registration assistance for couples in Pakistan and abroad.',
    url: '/'
  },
}
export const viewport = { colorScheme: 'light', themeColor: '#f7f4ed', userScalable: true }
export default function RootLayout({ children }) {
  return <html lang="en-GB"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

export function headingCase(text='') {
  const lowerWords = new Set(['of','for','and'])
  return String(text).replace(/\b([A-Za-z][A-Za-z'-]*)\b/g, (word) => {
    const lower = word.toLowerCase()
    if (lowerWords.has(lower)) return lower
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  })
}

export const siteConfig = {
  phone: '+92 333 1127830',
  whatsapp: 'https://wa.me/923331127830',
  email: 'info@onlinenikahservices.com',
  offices: {
    johar: {
      name: 'Karachi Head Office',
      address: 'A-220, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Johar, Karachi',
      phone: '+92 333 1127830'
    },
    dha: {
      name: 'Karachi DHA Office',
      address: 'Jami Commercial, DHA Phase 7, Karachi',
      phone: '+92 331 6644789'
    }
  },
  cities: {
    Karachi: '+92 333 1127830',
    Lahore: '+92 333 1127835',
    Islamabad: '+92 333 1127836',
    Rawalpindi: '+92 333 1127831',
    Faisalabad: '+92 333 1127830',
    Hyderabad: '+92 333 1127830',
    'Rahim Yar Khan': '+92 333 1127830'
  }
}

export const legalTeam = [
  { name:'Shankar Lal Kataria', role:'Family Law Head' },
  { name:'Mohsin Ali Mirani', role:'Advocate' },
  { name:'Sobia Mohsin', role:'Family and Corporate Taxation Lawyer' },
  { name:'Zaheer Ashraf Qazi', role:'Advocate' },
  { name:'Kashif Mumtaz', role:'Advocate High Court · Islamabad and Rawalpindi' },
  { name:'Junaid Kahloon', role:'Advocate High Court · Lahore' }
]

export function jsonLd(data) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id':'https://onlinenikahservices.com/#organization',
  name: 'Online Nikah Services',
  url: 'https://onlinenikahservices.com/',
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: 'Pakistan-based Online Nikah guidance, ceremony coordination, document review and marriage registration assistance for local and overseas couples.',
  location: [
    {
      '@type':'Place',
      name: siteConfig.offices.johar.name,
      address: {
        '@type':'PostalAddress',
        streetAddress:'A-220, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Johar',
        addressLocality:'Karachi',
        addressCountry:'PK'
      }
    },
    {
      '@type':'Place',
      name: siteConfig.offices.dha.name,
      address: {
        '@type':'PostalAddress',
        streetAddress:'Jami Commercial, DHA Phase 7',
        addressLocality:'Karachi',
        addressCountry:'PK'
      }
    }
  ]
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id':'https://onlinenikahservices.com/#website',
  name: 'Online Nikah Services',
  url: 'https://onlinenikahservices.com/',
  publisher:{'@id':'https://onlinenikahservices.com/#organization'}
}

export const countries = [
  ['Pakistan','/pakistan/'],
  ['United Arab Emirates','/united-arab-emirates/'],
  ['Saudi Arabia','/saudi-arabia/'],
  ['Qatar','/qatar/'],
  ['United Kingdom','/united-kingdom/'],
  ['United States','/united-states/'],
  ['Canada','/canada/']
]

export const services = [
  ['Online Nikah ceremony','/our-services/'],
  ['Document review','/our-services/'],
  ['Registration assistance','/our-services/'],
  ['Overseas document use','/our-services/']
]

export function breadcrumbSchema(items) {
  return {
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type':'ListItem',
      position:index+1,
      name:item[0],
      item:`https://onlinenikahservices.com${item[1]}`
    }))
  }
}

export function PageJsonLd({ breadcrumb, service, faq, path='/', title, description, areaServed='Worldwide', article=false }) {
  const absolute = `https://onlinenikahservices.com${path}`
  const serviceId = `${absolute}#legalservice`
  const pageId = `${absolute}#webpage`
  const localBusiness = {
    '@context':'https://schema.org',
    '@type':'LocalBusiness',
    '@id':'https://onlinenikahservices.com/#localbusiness',
    name:'Online Nikah Services',
    url:'https://onlinenikahservices.com/',
    telephone:siteConfig.phone,
    email:siteConfig.email,
    areaServed:['Pakistan','United Kingdom','United States','Canada','United Arab Emirates','Saudi Arabia','Qatar'],
    address:{
      '@type':'PostalAddress',
      streetAddress:'A-220, 2nd Floor, Supreme Corner, Johar Chowrangi, Block 18, Gulistan-e-Johar',
      addressLocality:'Karachi',
      addressCountry:'PK'
    },
    department:{
      '@type':'LocalBusiness',
      name:'Online Nikah Services — DHA Phase 7',
      telephone:siteConfig.offices.dha.phone,
      address:{
        '@type':'PostalAddress',
        streetAddress:'Jami Commercial, DHA Phase 7',
        addressLocality:'Karachi',
        addressCountry:'PK'
      }
    }
  }
  const serviceGraph = service ? {
    '@context':'https://schema.org',
    '@graph':[
      {
        '@type':'LegalService',
        '@id':serviceId,
        name:service,
        url:absolute,
        description:description || service,
        areaServed,
        provider:{'@id':'https://onlinenikahservices.com/#organization'}
      },
      {
        '@type':'WebPage',
        '@id':pageId,
        url:absolute,
        name:title || service,
        description:description || service,
        isPartOf:{'@id':'https://onlinenikahservices.com/#website'},
        about:{'@id':serviceId}
      }
    ]
  } : {
    '@context':'https://schema.org',
    '@type':'WebPage',
    '@id':pageId,
    url:absolute,
    name:title || 'Online Nikah Services',
    description:description || 'Online Nikah guidance and service information.',
    isPartOf:{'@id':'https://onlinenikahservices.com/#website'}
  }
  const articleSchema = article ? {
    '@context':'https://schema.org',
    '@type':'Article',
    '@id':`${absolute}#article`,
    headline:title,
    description:description,
    url:absolute,
    mainEntityOfPage:{'@id':pageId},
    publisher:{'@id':'https://onlinenikahservices.com/#organization'},
    author:{'@id':'https://onlinenikahservices.com/#organization'}
  } : null
  return <>
    {jsonLd(organisationSchema)}
    {jsonLd(websiteSchema)}
    {jsonLd(localBusiness)}
    {breadcrumb && jsonLd(breadcrumbSchema(breadcrumb))}
    {jsonLd(serviceGraph)}
    {articleSchema && jsonLd(articleSchema)}
    {faq && jsonLd({
      '@context':'https://schema.org',
      '@type':'FAQPage',
      mainEntity:faq.map(x => ({
        '@type':'Question',
        name:x[0],
        acceptedAnswer:{ '@type':'Answer', text:x[1] }
      }))
    })}
  </>
}

export function makeMetadata(title, description, path) {
  return {
    title:{absolute:title},
    description,
    alternates:{canonical:path},
    openGraph:{title, description, url:path, type:'website'}
  }
}

export function whatsappLink(message='Hello, I would like to ask about your online Nikah services.') { return `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}` }

export function safeCityWhatsApp(city) { const numbers = { Karachi:'923331127830', Lahore:'923331127835', Islamabad:'923331127836', Rawalpindi:'923331127831' }; return `https://wa.me/${numbers[city] || '923331127830'}` }

export function SectionTitle({ eyebrow, title, children, light=false }) { return <div className={`section-title ${light ? 'section-title-light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{headingCase(title)}</h2>{children && <p className="section-lead">{children}</p>}</div> }

export function CTA({ href=siteConfig.whatsapp, children='Start a conversation', outline=false }) { return <a className={`button ${outline ? 'button-outline' : ''}`} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>{children}<span aria-hidden="true">↗</span></a> }

export function Footer() { return <footer className="footer"><div className="footer-inner"><div><a className="brand footer-brand" href="/">Online <span>Nikah</span><br/><span>Services</span></a><p className="footer-note">Pakistan-based Online Nikah guidance for couples in Pakistan and abroad, with ceremony, document and registration questions kept clear.</p></div><div><p className="footer-heading">Online Nikah Guides</p><a href="/">Online Nikah Services</a><a href="/pakistan/">Online Nikah in Pakistan</a><a href="/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/">Validity in Islam</a><a href="/blogs/">Focused Guides</a><a href="/about-us/">About the Team</a></div><div><p className="footer-heading">Contact</p><a href="tel:+923331127830">{siteConfig.phone}</a><a href={siteConfig.whatsapp}>WhatsApp the Team</a><a href="/contact-us/">Send an Enquiry</a><a href="/karachi/">Karachi</a><a href="/lahore/">Lahore</a><a href="/islamabad/">Islamabad</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Online Nikah Services</span><span>General information only; case-specific legal and registration questions require review.</span></div></footer> }

export function PageFrame({ children, dark=false }) { return <>{children}<Footer/><a className="mobile-action" href={siteConfig.whatsapp}>WhatsApp us <span>↗</span></a></> }

export function Hero({ eyebrow='ONLINE NIKAH SERVICES', title, children, image='/hero-nikah.png', imageAlt='A modest Muslim couple preparing for their Nikah ceremony', imageCaption='Online Nikah · Pakistan-Based Legal Support', actions }) { return <section className="hero"><div className="hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{headingCase(title)}</h1><div className="hero-description">{children}</div><div className="hero-actions">{actions}</div></div><figure className="hero-image"><Image src={image} alt={imageAlt} title={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 50vw" className="hero-image-media" /><figcaption className="image-caption">{imageCaption}</figcaption></figure></section> }

export function SupportingImages() { return <section className="supporting-images" aria-label="Online Nikah ceremony and documentation"><figure><Image src="/support-signing.png" alt="Online Nikah Nama signing and marriage documentation in Pakistan" title="Online Nikah Nama Signing and Documentation" width={900} height={675} loading="lazy" sizes="(max-width: 800px) 100vw, 33vw" /><figcaption>Online Nikah Nama Signing and Document Review</figcaption></figure><figure><Image src="/support-rings.png" alt="Wedding rings beside Online Nikah marriage documents" title="Online Nikah Marriage Documents and Mahr Details" width={900} height={675} loading="lazy" sizes="(max-width: 800px) 100vw, 33vw" /><figcaption>Mahr and Marriage Record Details</figcaption></figure><figure><Image src="/support-video-call.png" alt="Remote Online Nikah ceremony coordinated through a video call" title="Remote Online Nikah Ceremony Coordination" width={900} height={675} loading="lazy" sizes="(max-width: 800px) 100vw, 33vw" /><figcaption>Remote Online Nikah Ceremony Coordination</figcaption></figure></section> }

export function FAQ({ items }) { return <div className="faq-list">{items.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div> }

export function Header() { return <header className="site-header"><div className="header-inner"><a className="brand" href="/">Online <span>Nikah</span><br/><span>Services</span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="/">Home</a><div className="nav-menu"><button type="button">Our Services <span>⌄</span></button><div className="nav-dropdown">{services.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</div></div><div className="nav-menu"><button type="button">Countries <span>⌄</span></button><div className="nav-dropdown countries-menu">{countries.map(([name, href]) => <a key={name} href={href}>{name}</a>)}</div></div><div className="nav-menu"><button type="button">Pakistan Cities <span>⌄</span></button><div className="nav-dropdown countries-menu">{Object.entries(cityData).map(([slug,data]) => <a key={slug} href={data.path}>{data.name}</a>)}</div></div><a href="/blogs/">Guides</a><a href="/about-us/">About Us</a><a href="/contact-us/">Contact</a></nav><a className="header-whatsapp" href={whatsappLink('Hello, I would like an Online Nikah assessment.')}>WhatsApp <span>↗</span></a><details className="mobile-nav"><summary aria-label="Open menu">☰</summary><nav>{[['Home','/'],['Our Services','/our-services/'],['Pakistan','/pakistan/'],['Karachi','/karachi/'],['Lahore','/lahore/'],['Islamabad','/islamabad/'],['Guides','/blogs/'],['About Us','/about-us/'],['Contact','/contact-us/']].map(([n,h]) => <a key={n} href={h}>{n}</a>)}</nav></details></div></header> }

export function Layout({ children }) { return <PageFrame><Header />{children}</PageFrame> }

export function CountryGrid() { return <div className="country-grid">{countries.map(([name, href], i) => <a className="country-tile" href={href} key={name}><span className="country-number">0{i+1}</span><span><strong>{name}</strong><small>Explore service guidance</small></span><span className="arrow">↗</span></a>)}</div> }

export function ContactForm() { return <form className="contact-form" action={siteConfig.whatsapp} target="_blank"><div className="form-grid"><label>Your name<input required name="name" placeholder="Full name" /></label><label>Your country<input required name="country" placeholder="Where do you live?" /></label></div><label>WhatsApp number<input required name="phone" placeholder="Include country code" /></label><label>How can we help?<textarea required name="message" rows="5" placeholder="Tell us briefly about your situation" /></label><button className="button" type="submit">Continue to WhatsApp <span>↗</span></button><p className="form-note">Your details will open in WhatsApp for you to review and send. We do not request identity document uploads through this form.</p></form> }

export const countryData = {
  'united-arab-emirates': {
    name:'United Arab Emirates',
    short:'the UAE',
    seoName:'UAE',
    intro:'Online Nikah support for UAE residents who need Pakistan-based ceremony coordination, identity and consent checks, witness planning and document guidance.',
    image:'/hero-uae.png',
    angle:'Online Nikah Planning for UAE Residents With Pakistan-Based Support',
    recognition:'A Pakistan-side Nikah and registration record should not be treated as automatic proof of civil-marriage recognition in the UAE. The couple should confirm the current requirements of the UAE authority, embassy, court, immigration office or other receiving institution that will use the documents.',
    documents:'UAE residents commonly need to think separately about identity documents, marital-status evidence, any authority or proxy document, Pakistan registration records, translation and attestation. The exact sequence depends on nationality, residence status and the purpose for which the marriage documents will be used.',
    localContext:'Time-zone coordination is straightforward between the UAE and Pakistan, but legal effect still depends on the ceremony structure and the later registration or document-use step. We therefore review both parties’ locations and intended document use before confirming the route.'
  },
  'saudi-arabia': {
    name:'Saudi Arabia',
    short:'Saudi Arabia',
    seoName:'Saudi Arabia',
    intro:'Online Nikah guidance for Saudi residents arranging a Pakistan-connected Nikah with careful attention to identity, consent, witnesses and later document use.',
    image:'/hero-saudi.png',
    angle:'A Clear Online Nikah Route for Couples Living in Saudi Arabia',
    recognition:'A Pakistan-side Nikah record does not by itself determine how a Saudi authority will treat the marriage. The receiving authority should be asked about current recognition, translation, authentication, attestation and any local personal-status requirements that may apply to the couple.',
    documents:'The starting file usually includes identity documents, nationality and residence details, present marital status, intended witnesses and the purpose of the final documents. If an authority or proxy document is needed, its wording and execution formalities should be settled before the ceremony.',
    localContext:'Saudi residents often need the Pakistan-side ceremony and the destination-country documentation questions handled as two connected but distinct stages. We keep those stages separate so that a religious ceremony is not presented as a guaranteed administrative outcome.'
  },
  'qatar': {
    name:'Qatar',
    short:'Qatar',
    seoName:'Qatar',
    intro:'Remote Online Nikah coordination for Qatar residents who want Pakistan-based support with ceremony planning, documents and registration questions.',
    image:'/hero-qatar.png',
    angle:'Online Nikah Guidance for Qatar Residents Before the Ceremony Date',
    recognition:'Recognition and document acceptance in Qatar are authority-specific questions. A couple should confirm what the relevant civil, immigration, embassy or other authority expects rather than assuming that a Pakistan-issued record will be accepted automatically for every purpose.',
    documents:'Useful first-stage material includes passports or CNIC/NICOP details, current locations, marital status, witness information, Mahr instructions and the intended use of the marriage documents. Translation and attestation, when required, are later documentary steps and should be scoped separately.',
    localContext:'Pakistan and Qatar are close enough in time zones for practical remote coordination, but the legal and administrative questions remain case-specific. We review the proposed ceremony structure before advising what Pakistan-side documents may be appropriate.'
  },
  'united-kingdom': {
    name:'United Kingdom',
    short:'the UK',
    seoName:'UK',
    intro:'Online Nikah guidance for UK residents arranging a Pakistan-connected Nikah while keeping ceremony, registration and UK recognition separate.',
    image:'/hero-uk.png',
    angle:'Online Nikah for UK Residents With Clear Religious and Civil Distinctions',
    recognition:'A religious Nikah does not necessarily create a civil marriage recognised for every purpose in the United Kingdom. Couples should confirm the effect of their chosen ceremony and documents under the law applicable to them and should not rely on a Pakistan-side process as a substitute for UK civil requirements.',
    documents:'UK residents may need to consider passports, immigration or residence details, prior-marriage records, authority documents, the Pakistan Nikah Nama, marriage registration evidence, certified translations and any authentication or attestation requested by a receiving body.',
    localContext:'The most important planning question is usually not whether a video call can be arranged, but what legal and documentary result the couple actually needs. We start there, then separate the ceremony, Pakistan registration and UK-use questions.'
  },
  'united-states': {
    name:'United States',
    short:'the United States',
    seoName:'USA',
    intro:'Online Nikah planning for US residents seeking Pakistan-based ceremony coordination and document guidance without assuming uniform recognition across states.',
    image:'/hero-usa.png',
    angle:'Online Nikah Support for US Residents With State-Specific Caution',
    recognition:'Marriage law and recognition questions in the United States can depend on state law and the purpose for which a document is being used. A Pakistan-side Nikah or registration record should therefore be checked against the requirements of the relevant state, federal agency or other receiving institution.',
    documents:'The initial review should identify each person’s passport or identity details, current state and country, marital status, proposed witnesses, Mahr, any authority document and the intended use of the final records. Immigration evidence and foreign-document authentication should be treated as separate questions.',
    localContext:'Because US residents may be many hours behind Pakistan, ceremony timing needs careful coordination. Time-zone convenience, however, does not answer the legal-recognition question, so the intended use of the documents should be disclosed from the outset.'
  },
  'canada': {
    name:'Canada',
    short:'Canada',
    seoName:'Canada',
    intro:'Online Nikah guidance for Canadian residents arranging a Pakistan-connected ceremony, document review and possible Pakistan registration assistance.',
    image:'/hero-canada.png',
    angle:'Online Nikah Planning for Canadian Residents and Pakistan-Based Documentation',
    recognition:'Canadian marriage and document-use questions can vary by province, territory and purpose. A religious ceremony or Pakistan-issued record should not be assumed to produce the same legal consequence in every Canadian context, so the receiving authority should be identified before finalising the documentation route.',
    documents:'Useful initial information includes passports or CNIC/NICOP details, province of residence, nationality, marital status, witness plans, Mahr instructions and the purpose of the final documents. Translation, authentication or other documentary formalities may follow depending on where the record will be used.',
    localContext:'The process works best when the couple distinguishes the Nikah ceremony from Pakistan registration and from later Canadian use. That prevents a remote ceremony from being described as a blanket solution to a separate civil or immigration requirement.'
  }
}

export const cityData = {
  karachi: {
    name:'Karachi',
    path:'/online-nikah-marriage-court-marriage-in-karachi/',
    image:'/hero-dulha-dulhan.png',
    intro:'Online Nikah services in Karachi with remote ceremony coordination, document review, witnesses, Mahr guidance and Pakistan registration assistance where applicable.',
    coordinator:'Karachi matters may be coordinated by Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant to the file.',
    localities:['DHA Phases 1–8','Clifton','Gulistan-e-Johar Blocks 17 and 18','Gulshan-e-Iqbal','PECHS','Bahadurabad','Korangi','Malir','Federal B Area Blocks 1–21','Azizabad','Dastagir','Al-Noor','Ancholi','Karimabad','Liaquatabad','Nazimabad','North Karachi','New Karachi','Buffer Zone','Sohrab Goth','Bahria Town Karachi']
  },
  lahore: {
    name:'Lahore',
    path:'/online-nikah-marriage-court-marriage-in-lahore/',
    image:'/support-signing.png',
    intro:'Online Nikah services in Lahore for couples who need a remote-first process, document review and clear separation between ceremony and registration.',
    coordinator:'Relevant Lahore matters are coordinated through Junaid Kahloon, Advocate High Court, with remote support from the matrimonial team.',
    localities:['DHA Lahore','Gulberg','Model Town','Johar Town','Garden Town','Lahore Cantt','Wapda Town','Faisal Town','Iqbal Town','Bahria Town Lahore']
  },
  islamabad: {
    name:'Islamabad',
    path:'/online-nikah-marriage-court-marriage-in-islamabad/',
    image:'/hero-nikah.png',
    intro:'Online Nikah services in Islamabad with identity, consent, witness and document review before the remote ceremony is scheduled.',
    coordinator:'Relevant Islamabad matters are coordinated through Kashif Mumtaz, Advocate High Court.',
    localities:['F-6','F-7','F-8','F-10','F-11','G-8','G-9','G-10','G-11','I-8','I-9','I-10','E-11','DHA Islamabad','Bahria Enclave']
  },
  rawalpindi: {
    name:'Rawalpindi',
    path:'/rawalpindi/',
    image:'/support-video-call.png',
    intro:'Online Nikah services in Rawalpindi for local and overseas couples needing structured ceremony coordination and Pakistan-side paperwork guidance.',
    coordinator:'Relevant Rawalpindi matters are coordinated through Kashif Mumtaz, Advocate High Court, with the wider matrimonial team supporting documentation.',
    localities:['Saddar','Satellite Town','Chaklala','Commercial Market','Peshawar Road','Adiala Road','Bahria Town Rawalpindi','DHA Rawalpindi']
  },
  faisalabad: {
    name:'Faisalabad',
    path:'/faisalabad/',
    image:'/support-rings.png',
    intro:'Online Nikah services in Faisalabad with nationwide remote support for ceremony planning, witnesses, documents and registration questions.',
    coordinator:'Faisalabad enquiries are handled through the nationwide matrimonial service with local coordination arranged when required by the agreed scope.',
    localities:['D-Ground','Peoples Colony','Madina Town','Susan Road','Canal Road','Gulberg Faisalabad','Satiana Road','Jaranwala Road']
  },
  hyderabad: {
    name:'Hyderabad',
    path:'/hyderabad/',
    image:'/hero-pakistan.png',
    intro:'Online Nikah services in Hyderabad, Sindh for couples who want remote ceremony planning and clear Pakistan-side document guidance.',
    coordinator:'Hyderabad enquiries can be coordinated with the regional legal network while Online Nikah documentation remains centrally reviewed.',
    localities:['Latifabad','Qasimabad','Saddar Hyderabad','Civil Lines','Auto Bhan Road','Citizen Colony','Hirabad']
  },
  'rahim-yar-khan': {
    name:'Rahim Yar Khan',
    path:'/online-nikah-marriage-court-marriage-in-rahimyar-khan/',
    image:'/hero-saudi.png',
    intro:'Online Nikah services in Rahim Yar Khan with remote coordination designed to preserve the city-specific search intent of the site’s established legacy page.',
    coordinator:'Rahim Yar Khan enquiries are handled through the nationwide matrimonial service, with the required local or documentary coordination confirmed case by case.',
    localities:['Rahim Yar Khan city','Satellite Town','Model Town','Abu Dhabi Road','Shahi Road']
  }
}

export const cityRouteMap = {
  'online-nikah-marriage-court-marriage-in-karachi':'karachi',
  'online-nikah-marriage-court-marriage-in-lahore':'lahore',
  'online-nikah-marriage-court-marriage-in-islamabad':'islamabad',
  'rawalpindi':'rawalpindi',
  'faisalabad':'faisalabad',
  'hyderabad':'hyderabad',
  'online-nikah-marriage-court-marriage-in-rahimyar-khan':'rahim-yar-khan'
}

export const guideData = {
  'online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online': {
    title:'Is Online Nikah Valid in Islam? Legal and Sharia Considerations',
    metaTitle:'Is Online Nikah Valid in Islam? | Online Nikah Pakistan Guide',
    description:'Understand Online Nikah validity, consent, witnesses, offer and acceptance, remote participation, Pakistan registration and overseas document use.',
    eyebrow:'ONLINE NIKAH VALIDITY GUIDE',
    image:'/hero-nikah.png',
    intro:'Online Nikah can involve remote participation, but a video call alone is not the legal or religious test. The ceremony structure, free consent, witnesses, offer and acceptance, identity and any representation arrangement all require careful attention.',
    sections:[
      ['Online Nikah Validity Starts With the Elements of Nikah','A remote medium does not remove the underlying requirements of a Nikah. The parties should be identifiable, their consent should be voluntary, the offer and acceptance should be clear, applicable witness requirements should be satisfied and the Mahr terms should be recorded accurately. Where a party participates through an authorised representative, the authority should be specific enough to show what that person may do. A qualified religious scholar should be consulted where the couple needs a school-specific Sharia ruling.'],
      ['Pakistan Registration Is a Separate Legal Step','Religious solemnisation and statutory registration are related but distinct. A ceremony may answer one question while a Union Council, Nikah Registrar, embassy, immigration authority or foreign civil registry asks for another document or formality. Couples should therefore plan the registration route before the ceremony rather than assuming that a recording, call log or private certificate will replace the official record required later.'],
      ['Remote Participation Requires Strong Identity and Consent Controls','Online Nikah arrangements should be designed to reduce impersonation and coercion risk. The legal team should know who is participating, where each person is located, whether instructions are consistent and whether any attorney or proxy document is authentic and adequate for the intended acts. If there is uncertainty about identity, consent or capacity, the ceremony should not be rushed merely because a date has been proposed.'],
      ['Foreign Recognition Depends on the Receiving Authority','A Pakistan-side Nikah or marriage registration record does not create automatic acceptance everywhere. Translation, authentication, attestation and additional evidence may be required, and some jurisdictions distinguish sharply between religious and civil marriage. The safest approach is to identify the authority that will receive the documents and ask what it requires before treating a remote Nikah as a complete solution.']
    ]
  },
  'online-nikah-service-in-pakistan-urdu': {
    title:'Online Nikah in Pakistan: CNIC, Registration and Verification Guide',
    metaTitle:'Online Nikah in Pakistan | CNIC and Nikah Verification Guide',
    description:'Guide to Online Nikah in Pakistan, CNIC-based identity checks, Nikah Nama, marriage registration and what can or cannot be verified online.',
    eyebrow:'PAKISTAN VERIFICATION GUIDE',
    image:'/hero-pakistan.png',
    intro:'People often search for an “Online Nikah check by CNIC,” but identity verification and marriage-record verification are not the same thing. This guide explains the difference and the documents that should be checked.',
    sections:[
      ['CNIC Can Support Identity Checking, Not Prove a Marriage by Itself','A CNIC or NICOP identifies a person; it is not by itself a public marriage-status certificate. A responsible Online Nikah file uses identity documents to confirm names and particulars, but the existence and status of a marriage should be assessed through the relevant Nikah Nama, registration record and competent local authority. Public search tools should not be assumed to reveal a complete private marital history.'],
      ['Nikah Nama and Computerised Marriage Certificate Are Different Records','The Nikah Nama records the marriage contract and contains important particulars such as the parties, witnesses, Mahr and registration information. A computerised marriage certificate is a later civil record issued through the relevant registration process. Couples should keep clear copies of both where applicable and should check spellings, CNIC numbers, dates and other particulars before using the documents for immigration, banking or overseas purposes.'],
      ['Online Nikah Verification Should Follow the Document Chain','Verification is strongest when the identity documents, executed Nikah Nama, registrar details and civil registration record tell a consistent story. If a document will be used abroad, translation, authentication or attestation may also need to be checked. A screenshot or WhatsApp message is not an adequate substitute for the underlying marriage record.'],
      ['Punjab, Sindh and Other Areas May Use Different Administrative Channels','Registration administration is local. The relevant Union Council, cantonment, municipal or other authority depends on the place and circumstances of registration. A couple should confirm the competent office for its own record rather than relying on a general claim that every Nikah can be checked through one national CNIC search.']
    ]
  },
  'nikah-khawan-service-overview-a-comprehensive-guide': {
    title:'Nikah Khawan in Pakistan: Role, Records and Registration',
    metaTitle:'Nikah Khawan in Pakistan | Role, Nikah Nama and Registration',
    description:'Learn the role of a Nikah Khawan, witnesses, Nikah Nama completion, Nikah Registrar functions and registration steps for Pakistan-based marriages.',
    eyebrow:'NIKAH KHAWAN GUIDE',
    image:'/support-signing.png',
    intro:'A Nikah Khawan conducts or facilitates the religious ceremony, while statutory registration and the functions of a licensed Nikah Registrar involve separate legal and administrative responsibilities.',
    sections:[
      ['The Nikah Khawan Conducts the Ceremony but the Record Still Matters','The ceremony should accurately reflect the identities and free consent of the parties, the agreed Mahr, the witnesses and any representation arrangement. The completed Nikah Nama is not a decorative form; it is an important legal record. Names, CNIC or passport details, dates and contractual entries should be checked carefully before signatures are completed.'],
      ['Nikah Khawan and Nikah Registrar Should Not Be Confused Automatically','In practice one person may perform more than one role, but the legal functions should still be understood. The person conducting the ceremony and the person authorised to register the marriage may be the same in some situations and different in others. Couples should confirm who will complete, sign and submit the relevant registration documents.'],
      ['Remote Nikah Requires the Same Attention to Consent and Witnesses','Using video or other remote communication does not make identity, consent, witnesses or documentation less important. Where representation is used, the authority document should be checked. The ceremony should be structured so that the parties and witnesses understand what is happening and the resulting record can be completed accurately.'],
      ['Registration Should Be Planned Before the Ceremony','Couples who need a computerised marriage certificate, attestation or overseas use should discuss the registration route in advance. This reduces the risk of discovering later that the wrong local authority, incomplete particulars or missing documents delay the civil record.']
    ]
  },
  'nadra-marriage-certificate-authenticity-guide': {
    title:'Marriage Certificate Verification in Pakistan: NADRA and Local Records',
    metaTitle:'Marriage Certificate Verification Pakistan | NADRA Record Guide',
    description:'Understand marriage certificate verification in Pakistan, the role of local registration authorities, NADRA data and document authenticity checks.',
    eyebrow:'MARRIAGE RECORD GUIDE',
    image:'/support-rings.png',
    intro:'The phrase “NADRA marriage certificate” is widely used, but marriage registration is rooted in the competent local registration process. Verification should focus on the issuing record and the authority behind it.',
    sections:[
      ['Start With the Issuing Marriage Registration Record','A computerised marriage certificate should be linked to an underlying registered Nikah record. Check the names, CNIC or passport numbers, date of marriage, registration particulars and issuing authority. Where the document is intended for formal use, verification should be obtained through the competent administrative channel rather than relying only on appearance.'],
      ['NADRA Data and the Local Marriage Register Are Not the Same Thing','National identity data can support accurate personal particulars, but the legal marriage record originates from the marriage-registration process. The fact that a certificate is commonly called a NADRA certificate does not mean that every verification question can be answered through a public NADRA search.'],
      ['Foreign Use May Require Additional Authentication','Embassies, immigration authorities and foreign civil registries may ask for certified translation, authentication, attestation or other evidence. Those requirements depend on the destination and purpose. A document that is valid in Pakistan may still need additional formalities before another authority accepts it.'],
      ['Correct Errors Before They Become an Overseas Problem','Spelling differences, wrong identity numbers, inconsistent dates and incomplete entries can create difficulty later. Couples should review the Nikah Nama and registration certificate early and obtain advice on correction procedures before submitting documents for immigration or other official use.']
    ]
  },
  'online-marriage-in-islamabad-peshawar-lahore-rawalpindi-karachi-rahimyar-khan': {
    title:'Online Nikah Service Areas in Pakistan: City-by-City Guidance',
    metaTitle:'Online Nikah Service Areas Pakistan | City Guide',
    description:'Online Nikah service areas in Pakistan with city guidance for Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and Rahim Yar Khan.',
    eyebrow:'PAKISTAN ONLINE NIKAH CITY GUIDE',
    image:'/hero-pakistan.png',
    intro:'This established multi-city URL now serves one clear purpose: helping users choose the correct city-specific Online Nikah page without competing with the homepage for the broad “Online Nikah” keyword.',
    sections:[
      ['Karachi, Lahore and Islamabad Have Dedicated Online Nikah Service Pages','Karachi, Lahore and Islamabad searches often carry local service intent. Their dedicated pages explain the relevant coordinator, local service areas, ceremony and document review, professional fee structure and registration cautions. Existing indexed city URLs are preserved where Search Console already shows them rather than replaced merely for a cleaner slug.'],
      ['Rawalpindi, Faisalabad and Hyderabad Use Separate Local Targets','Rawalpindi, Faisalabad and Hyderabad are handled through their own city pages so one multi-city page does not attempt to rank for every local variation. The initial service remains remote-first: identity, marital status, free consent, witnesses, Mahr and the intended document use are reviewed before a ceremony date is treated as final.'],
      ['Rahim Yar Khan Keeps Its Historically Performing URL','The Rahim Yar Khan legacy page has current Search Console visibility and is therefore preserved as its own city target. Its content is refined around Online Nikah intent while the outdated mixed “Court Marriage” wording remains only in the protected historical URL. This avoids sacrificing an indexed asset simply to create a prettier address.'],
      ['Use the National Page for Pakistan-Wide Questions','The national Online Nikah in Pakistan page is the correct target for country-wide procedure, documents, registration and nationwide service questions. This city directory is a navigation and comparison guide, not a second generic service page. That division keeps search intent clearer and reduces internal keyword cannibalisation.']
    ]
  }
}

export function countryFaq(name) {
  return [
    [`Can a couple in ${name} arrange an Online Nikah remotely?`, `Remote participation may be possible for a couple in ${name}, but the answer depends on the proposed ceremony structure, identity checks, free consent, witnesses and any attorney or proxy arrangement. We review where each person is physically located, how each person will participate and what Pakistan-side registration is expected. The ceremony should not be fixed merely because a video connection is available; the legal and documentary route should be understood first.`],
    ['Is an Online Nikah automatically recognised where we live?', 'No. A religious Nikah, Pakistan statutory registration and recognition by a foreign civil, immigration or other authority are different questions. The receiving authority may require a civil marriage, a particular registration record, translation, authentication, attestation or additional evidence. We can help organise the Pakistan-side process and identify the questions that need confirmation, but we do not promise automatic recognition outside Pakistan.'],
    ['What documents should we provide for the first review?', 'Start with clear identity details for both intended spouses, current countries and cities, nationality, marital status, preferred ceremony date and the intended use of the final documents. Depending on the facts, CNIC, NICOP or passport copies, prior divorce or death records, witness details and a proposed authority or proxy document may be relevant. Sensitive originals should not be sent casually before the team confirms what is actually required.'],
    ['Can one spouse be in Pakistan and the other abroad?', 'Yes, that structure can be assessed. The team should confirm how the overseas spouse will give instructions and consent, whether representation is needed, how witnesses will participate and what information must appear in the Nikah Nama. The later registration and overseas-use steps should also be discussed because the ceremony alone may not produce every document a foreign authority will ask for.'],
    ['Can both spouses be outside Pakistan?', 'Both spouses can request a remote assessment even when neither is physically in Pakistan. The practical route depends on nationality, location, the ceremony arrangement, witness availability and whether any Pakistan-based representation or registration work is required. We do not treat distance as the only issue; identity, consent and the intended legal use of the documents remain central.'],
    ['Is a power of attorney always required?', 'No. A power of attorney or other authority document is not an automatic requirement in every remote arrangement. Whether one is needed depends on how the ceremony is structured, who will sign or submit documents and what acts must be performed in Pakistan. Where authority is required, the wording should identify the permitted acts clearly and overseas execution formalities should be checked before the document is relied upon.'],
    ['How do you deal with free consent in a remote ceremony?', 'Each intended spouse should give clear, voluntary and consistent instructions. Remote communication should not be used to bypass concerns about coercion, impersonation or uncertainty over identity. If instructions conflict, identity cannot be confirmed or either person appears pressured, the matter requires further review before a ceremony is scheduled. The same principle applies whether participation is in person, by video or through an authorised representative.'],
    ['Are witnesses still required for Online Nikah?', 'Remote coordination does not remove applicable witness requirements. The proposed witnesses should be identified before the ceremony, their participation should be practical and the details entered in the Nikah record should be accurate. Where the couple needs a school-specific Sharia interpretation of witness requirements, a qualified religious scholar should be consulted in addition to legal and registration advice.'],
    ['What is the difference between Nikah Nama and a marriage certificate?', 'The Nikah Nama records the Muslim marriage contract and contains the parties’ particulars, witnesses, Mahr and other agreed entries. A computerised marriage certificate is a separate civil registration record obtained through the relevant administrative process. Couples who need documents for immigration or overseas use should usually plan both stages rather than assuming that one document is simply another name for the other.'],
    ['Can you guarantee same-day registration?', 'No. Ceremony scheduling and official registration timing are separate. We can prepare and coordinate the agreed Pakistan-side steps, but the competent registration authority controls its own processing, record checks and issuance timetable. If a client has an embassy, travel or immigration deadline, that should be disclosed at the beginning so the scope can be planned realistically without promising a government processing time we do not control.'],
    ['What is the Online Nikah professional fee?', 'The usual professional service range is PKR 40,000–60,000, depending on the agreed scope, locations, documentation and registration work. The normal payment structure is 50% in advance and the remaining 50% after Nikah and registration, subject to the written scope for the matter. Mahr and any official, courier, translation, attestation or third-party charges are separate unless the written quotation expressly says otherwise.'],
    ['Is Mahr included in the professional fee?', 'No. Mahr is a term of the marriage agreed between the intended spouses and is separate from the legal team’s professional fee. Its amount, currency and prompt or deferred terms should be discussed before the Nikah Nama is finalised. The legal team can help ensure that the agreed instruction is recorded clearly, but it does not select the Mahr amount for the couple.'],
    ['Can a divorced or widowed person arrange an Online Nikah?', 'Yes, subject to current legal and religious eligibility. The previous marriage’s termination should be evidenced appropriately rather than left as an oral statement. Depending on the facts, a divorce certificate, dissolution decree, Talaq record, Khula decree or death certificate may need review. Any waiting-period or other case-specific religious question should be addressed with appropriate legal and, where necessary, scholarly advice before the new Nikah is scheduled.'],
    ['Does a video call by itself make the Nikah valid?', 'No. A video platform is only a communication medium. It does not by itself establish identity, free consent, witnesses, offer and acceptance, representation authority, registration or foreign recognition. A properly planned remote arrangement focuses on the legal and religious elements of the ceremony and on the documentary result that the couple needs afterward.'],
    ['Can the documents be used for immigration or a spouse visa?', 'Marriage documents may form part of an immigration or spouse-visa application, but the immigration authority decides what evidence it accepts. We can assist with the Pakistan-side Nikah and registration documents and can identify common translation or attestation questions. We do not guarantee visa approval, immigration recognition or a particular decision by an embassy or foreign government.'],
    ['Will Pakistani Nikah documents automatically be accepted overseas?', 'No automatic foreign acceptance should be assumed. A receiving authority may require certified translation, authentication, attestation, a civil marriage record, further identity evidence or proof of how the ceremony was conducted. Requirements vary by country and purpose, so the safer approach is to identify the destination authority early and prepare the Pakistan documents with that intended use in mind.'],
    ['Which lawyers handle Online Nikah matters?', 'Karachi coordination may involve Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant to the matter. Islamabad and Rawalpindi matters are coordinated through Kashif Mumtaz, Advocate High Court, and Lahore matters through Junaid Kahloon, Advocate High Court. Allocation depends on the location and the legal or documentary work actually required.'],
    ['How long does an Online Nikah process take?', 'Timing depends on document readiness, participation arrangements, witness availability, any authority document and the registration work included in the scope. A straightforward ceremony can often be coordinated more quickly than a matter involving overseas execution, prior-marriage records, corrections, translation or attestation. We therefore give a case-specific estimate after reviewing the basic facts rather than advertising one timeline for every couple.'],
    ['What should we decide before choosing a ceremony date?', 'Both parties should be clear about their current locations, identity documents, marital status, intended witnesses, Mahr, participation method and the purpose of the final marriage documents. If a proxy or attorney is proposed, the authority should be prepared in time. A date should be chosen after those points are workable, not before, because last-minute document problems can affect both the ceremony and later registration.'],
    [`How do we start an Online Nikah matter from ${name}?`, `Send both parties’ countries and cities, nationality, marital status, preferred date and intended document use through the official WhatsApp contact. The team will identify the initial documents and the likely participation structure. Do not send unnecessary sensitive documents until the team confirms what is needed. Once the scope is understood, the ceremony, Pakistan registration and any later document-use stages can be planned separately.`]
  ]
}

export const pakistanFaq = countryFaq('Pakistan')

export function cityFaq(city) {
  const base = countryFaq(city)
  base[0] = [`Do you provide Online Nikah services in ${city}?`, `Yes. Online Nikah enquiries from ${city} can be handled through the remote-first matrimonial service. The initial review covers identity, free consent, witnesses, Mahr, ceremony structure and the intended registration or document-use outcome. A remote service area should not be confused with a claim that every step occurs at a physical office; the team confirms the correct forum and local arrangement for the particular matter.`]
  base[19] = [`How do we start an Online Nikah matter in ${city}?`, `Send both parties’ locations, nationality, marital status, preferred date, intended witnesses and the purpose of the final documents. Mention ${city} in the first message so the enquiry can be routed correctly. The team will then identify the initial checklist, whether any local coordination is needed and which parts of the process can be handled remotely.`]
  return base
}

export function PractitionerPanel() {
  return <section className="content-section practitioner-section">
    <div className="section-title">
      <p className="eyebrow">E-E-A-T / MATRIMONIAL TEAM</p>
      <h2>Matrimonial Lawyers Coordinating Remote Nikah Matters</h2>
      <p className="section-lead">The service is coordinated through advocates and family-law professionals. Team allocation depends on the city, documentation and legal issue involved; no page should imply that a named lawyer personally reviewed a matter unless that review actually occurred.</p>
    </div>
    <div className="practitioner-grid">
      {legalTeam.map(person => <article className="practitioner-card" key={person.name}><h3>{person.name}</h3><p>{person.role}</p></article>)}
    </div>
  </section>
}

export function OfficePanel() {
  return <section className="office-panel">
    <div>
      <p className="eyebrow">KARACHI CONSULTATION LOCATIONS</p>
      <h2>Johar and DHA Phase 7 Office Details</h2>
    </div>
    <div className="office-grid">
      <article><h3>{siteConfig.offices.johar.name}</h3><p>{siteConfig.offices.johar.address}</p><a className="text-link" href={`tel:${siteConfig.offices.johar.phone.replaceAll(' ','')}`}>{siteConfig.offices.johar.phone}</a></article>
      <article><h3>{siteConfig.offices.dha.name}</h3><p>{siteConfig.offices.dha.address}</p><a className="text-link" href={`tel:${siteConfig.offices.dha.phone.replaceAll(' ','')}`}>{siteConfig.offices.dha.phone}</a></article>
    </div>
  </section>
}

export function CountryBody({ data, isPakistan=false }) {
  const faq = isPakistan ? pakistanFaq : countryFaq(data.name)
  const place = isPakistan ? 'Pakistan' : data.name
  return <>
    <section className="intro-band">
      <div>
        <p className="eyebrow">LEGAL PROCESS BEFORE THE CEREMONY</p>
        <h2>{isPakistan ? 'Pakistan-Based Online Nikah Team With Registration Experience' : data.angle}</h2>
        <h3>Online Nikah Procedure, Documents and Registration Reviewed Before You Book</h3>
      </div>
      <p>{isPakistan ? 'Our role is to review the practical sequence: identity and eligibility, ceremony planning, witnesses and Mahr, followed where appropriate by Pakistan registration assistance and later document-use guidance.' : data.intro}</p>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">01 / SCOPE</p><h2>What The Online Nikah Service Covers</h2></div>
      <div className="prose">
        <p>Every enquiry starts with both parties’ current locations, identity, marital status, free consent, intended witnesses, Mahr and the reason the marriage documents are required. That first review matters because an Online Nikah ceremony, statutory marriage registration and foreign use of documents are connected but not interchangeable.</p>
        <p>Where Pakistan-based arrangements are relevant, the team can coordinate the agreed ceremony structure, review supporting documents and explain what registration work is included. Translation, attestation, embassy use, immigration evidence and recognition in another country are treated as separate stages rather than guaranteed consequences of the ceremony.</p>
        <p>{isPakistan ? 'For Pakistan matters, the competent registration route depends on the facts and locality. We do not claim that one national office or one CNIC search answers every marriage-record question.' : data.localContext}</p>
        <a className="text-link" href="/contact-us/">Ask About Your Circumstances <span>↗</span></a>
      </div>
    </section>

    <SupportingImages/>

    <section className="process-section">
      <div className="section-title"><p className="eyebrow">02 / PROCESS</p><h2>Online Nikah Steps From Review To Registration</h2></div>
      <div className="process-grid">{[
        ['01','Eligibility and Identity Review','We confirm the parties’ basic identity details, locations, marital status and the practical structure of participation.'],
        ['02','Consent, Witnesses and Mahr','The couple settles free consent, witness participation and the Mahr instructions before the Nikah Nama is finalised.'],
        ['03','Remote Ceremony Coordination','Timing, participation and any representative role are organised around the agreed and reviewed arrangement.'],
        ['04','Registration and Document Use','Where included, Pakistan registration is handled as a separate step and later foreign-document requirements are identified without guarantees.']
      ].map(x => <div className="process-item" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div>
    </section>

    {!isPakistan && <section className="content-section split-section">
      <div><p className="eyebrow">03 / LOCAL CONTEXT</p><h2>Recognition and Document Use in {data.name}</h2></div>
      <div className="prose"><p>{data.recognition}</p><p>{data.documents}</p><p>{data.localContext}</p><a className="text-link" href="/pakistan/">Read the Pakistan Online Nikah Guide <span>↗</span></a></div>
    </section>}

    <PractitionerPanel/>

    <section className="content-section faq-section">
      <div className="section-title"><p className="eyebrow">04 / QUESTIONS</p><h2>Online Nikah Answers for {place}</h2></div>
      <FAQ items={faq} />
    </section>

    <section className="cta-band">
      <p className="eyebrow">NEXT STEP</p>
      <h2>Discuss Your Online Nikah Before Fixing The Date</h2>
      <p>Share both parties’ locations, marital status, proposed date and intended document use. We will identify the first documents and the practical route.</p>
      <CTA href={whatsappLink(`Hello, I live in ${place} and would like to ask about Online Nikah services.`)} children="Request an Online Nikah Assessment" />
    </section>
  </>
}

export function CountryPage({ data, isPakistan=false }) {
  const place = isPakistan ? 'Pakistan' : data.name
  return <Layout><main>
    <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>{place}</span></nav>
    <Hero
      eyebrow={isPakistan ? 'PAKISTAN REMOTE MARRIAGE SERVICE' : `REMOTE NIKAH / ${data.name.toUpperCase()}`}
      title={isPakistan ? 'Online Nikah in Pakistan — Online Nikah for Local and Overseas Couples' : `Online Nikah in ${data.name} — Online Nikah With Pakistan-Based Support`}
      image={isPakistan ? '/hero-pakistan.png' : data.image}
      imageAlt={isPakistan ? 'Pakistani Muslim couple completing Online Nikah documentation' : `Muslim couple preparing Online Nikah documents for ${data.name}`}
      actions={<><CTA href={whatsappLink()} children="Start on WhatsApp" /><CTA href="#details" outline children="Read the Procedure" /></>}
    >
      <p>{isPakistan ? 'A Pakistan-based Online Nikah service for couples who need structured ceremony coordination, witnesses, documents and registration assistance without confusing the ceremony with later civil or overseas requirements.' : data.intro}</p>
    </Hero>
    <div id="details"><CountryBody data={data} isPakistan={isPakistan} /></div>
    {isPakistan && <PakistanCities />}
  </main></Layout>
}

export function PakistanCities() {
  return <section className="city-section">
    <div className="section-title">
      <p className="eyebrow">CITY-SPECIFIC ONLINE NIKAH PAGES</p>
      <h2>Online Nikah Services Across Pakistan</h2>
      <p className="section-lead">Each city page has its own local intent and contact context. These are service areas; a city page does not imply that every process step occurs at a physical office.</p>
    </div>
    <div className="city-grid">{Object.entries(cityData).map(([slug,data]) => <article key={slug}><div><span className="city-pin">{data.name.slice(0,1)}</span><h3>{data.name}</h3></div><p>{data.intro}</p><a href={data.path}>Online Nikah in {data.name} <span>↗</span></a></article>)}</div>
  </section>
}

export function CityPage({ data, slug }) {
  const faq=cityFaq(data.name)
  const path=`/${slug}/`
  return <Layout><main>
    <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><a href="/pakistan/">Pakistan</a><span aria-hidden="true">›</span><span>{data.name}</span></nav>
    <Hero
      eyebrow={`REMOTE MARRIAGE SERVICE / ${data.name.toUpperCase()}`}
      title={`Online Nikah in ${data.name} — Online Nikah for Local and Overseas Couples`}
      image={data.image}
      imageAlt={`Online Nikah service and marriage documentation for couples connected with ${data.name}`}
      actions={<><CTA href={whatsappLink(`Hello, I need Online Nikah services in ${data.name}.`)} children="Ask About Your Case" /><CTA href="#city-details" outline children="Read City Guidance" /></>}
    >
      <p>{data.intro} The service begins with identity, marital-status and consent review before the ceremony date is finalised.</p>
    </Hero>

    <section id="city-details" className="intro-band">
      <div>
        <p className="eyebrow">LOCAL E-E-A-T AND PROCESS</p>
        <h2>{data.name} Online Nikah Guidance by Pakistan-Based Lawyers</h2>
        <h3>Remote Nikah Procedure, Witnesses, Documents and Registration in {data.name}</h3>
      </div>
      <p>{data.coordinator} The legal and registration route is checked separately from the convenience of remote participation.</p>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">01 / WHAT WE REVIEW</p><h2>Online Nikah Requirements for {data.name} Couples</h2></div>
      <div className="prose">
        <p>The first review covers both parties’ identity documents, current locations, nationality, marital status, free consent, proposed witnesses, Mahr and intended use of the final records. If one or both parties are overseas, the participation or representation structure is discussed before any ceremony date is treated as confirmed.</p>
        <p>An Online Nikah is not reduced to a video call. The medium supports communication, while the legal and religious elements, accurate Nikah Nama entries and later registration need their own attention. Where a power of attorney or other authority document is required, its wording and execution formalities should be reviewed in advance.</p>
        <p>The usual professional service range is PKR 40,000–60,000 depending on scope. The normal payment structure is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope. Mahr, official charges, translation, courier and attestation costs are separate unless expressly included.</p>
      </div>
    </section>

    <SupportingImages/>

    <section className="localities-section">
      <div className="section-title"><p className="eyebrow">02 / SERVICE AREAS</p><h2>{data.name} Localities Served for Online Nikah Enquiries</h2><p className="section-lead">Initial consultations and document review can begin remotely from these areas and surrounding locations.</p></div>
      <div className="locality-list">{data.localities.map(area=><span key={area}>{area}</span>)}</div>
    </section>

    {data.name==='Karachi' && <OfficePanel/>}

    <PractitionerPanel/>

    <section className="content-section split-section">
      <div><p className="eyebrow">03 / REGISTRATION</p><h2>Nikah Nama, Marriage Registration and Overseas Use</h2></div>
      <div className="prose">
        <p>The Nikah Nama records the marriage contract, while a computerised marriage certificate is a separate civil record obtained through the relevant registration process. Couples should decide early whether the documents are intended for ordinary local use, immigration, embassy submission, spouse visa evidence or another overseas purpose.</p>
        <p>Translation, authentication, attestation and foreign recognition are not automatic consequences of the ceremony. The receiving authority should be identified so that the Pakistan-side record can be prepared with the likely documentary requirements in mind. No lawyer can guarantee a visa, embassy acceptance or a government processing time.</p>
        <p><a className="text-link" href="/pakistan/">Read the National Online Nikah in Pakistan Guide <span>↗</span></a></p>
      </div>
    </section>

    <section className="content-section faq-section"><div className="section-title"><p className="eyebrow">04 / FAQ</p><h2>Online Nikah Questions in {data.name}</h2></div><FAQ items={faq}/></section>

    <section className="cta-band"><p className="eyebrow">START WITH THE FACTS</p><h2>Request an Online Nikah Assessment for {data.name}</h2><p>Send both parties’ locations, marital status, preferred date and intended document use so the team can identify the first practical step.</p><CTA href={whatsappLink(`Hello, I need Online Nikah services in ${data.name}.`)} children={`WhatsApp the ${data.name} Team`} /></section>
  </main></Layout>
}

export function guideFaq(title) {
  return [
    ['Does this guide replace advice on my own facts?','No. The guide explains general Pakistan-side concepts and common documentary distinctions. A particular Online Nikah can involve different nationality, residence, prior-marriage, representation, witness, registration or overseas-use questions. The relevant facts should be reviewed before anyone treats general information as a conclusion about a specific marriage.'],
    ['Is a video call alone enough for an Online Nikah?','No. A video call is only the communication medium. Identity, free consent, witnesses, offer and acceptance, Mahr, any representative authority, accurate documentation and later registration remain separate issues. A remote ceremony should be designed around those elements rather than around the software being used.'],
    ['Can an Online Nikah be registered in Pakistan?','Registration may be possible depending on the facts, locality and the way the ceremony and documents are structured. The competent registration route should be identified in advance. A religious ceremony and a civil registration record should not be presented as the same step.'],
    ['Can I use the documents abroad?','Possibly, but foreign acceptance is controlled by the receiving authority. Translation, authentication, attestation, additional identity evidence or a civil-marriage requirement may apply. The destination and intended use should therefore be disclosed at the start of the Pakistan-side planning.'],
    ['What should I send for an initial review?','Send both parties’ current countries and cities, nationality, marital status, preferred date and intended document use. The team can then identify which identity documents, prior-marriage records, witness details or authority documents are actually needed.'],
    ['How much does the Online Nikah service cost?','The usual professional fee range is PKR 40,000–60,000 depending on scope and documentation. The normal payment arrangement is 50% in advance and the remaining 50% after Nikah and registration, subject to the agreed written scope.'],
    ['Is Mahr part of the legal fee?','No. Mahr is agreed between the intended spouses and should be recorded accurately in the Nikah documentation. It is separate from professional legal fees and from official or third-party charges.'],
    ['Can a divorced person use the Online Nikah service?','Yes, subject to current eligibility and review of the previous marriage’s termination. Relevant divorce, dissolution, Khula or death records may need to be checked before the ceremony is arranged.'],
    ['Who handles Online Nikah matters?','Karachi coordination may involve Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant. Islamabad and Rawalpindi matters are coordinated through Kashif Mumtaz, Advocate High Court, and Lahore matters through Junaid Kahloon, Advocate High Court.'],
    ['How do I start?','Use the official WhatsApp contact and briefly state both parties’ locations, nationality, marital status, preferred date and the purpose for which the marriage documents will be used. The team will identify the first checklist before asking for unnecessary sensitive material.'],
    ['Can you guarantee registration or foreign recognition?','No. The team can coordinate and prepare the agreed Pakistan-side work, but the competent registration authority and any foreign receiving authority make their own decisions. Government timelines and overseas recognition are not guaranteed.'],
    ['Can a power of attorney be used in a remote Nikah?', 'A power of attorney or other authority document may be appropriate when a person must act on behalf of an intended spouse, but it is not an automatic requirement in every Online Nikah. The document should describe the permitted acts clearly, and overseas execution formalities should be checked before use. A generic form should not be assumed suitable simply because the ceremony is being arranged remotely.'],
    ['What role does the Nikah Nama play after the ceremony?', 'The Nikah Nama records the Muslim marriage contract and contains important details about the parties, witnesses, Mahr and registration particulars. It can become the foundation for later civil registration and document use, so names, identity numbers and other entries should be checked carefully. A computerised marriage certificate is a separate civil record and should not be treated as another name for the Nikah Nama.'],
    ['Can CNIC data alone confirm whether someone is married?', 'A CNIC identifies a person but should not be treated as a universal public marriage-status certificate. Marriage verification depends on the relevant marriage record and competent registration authority. Online searches or screenshots should not replace the underlying Nikah Nama and registration evidence. Where marital status is material to a new Nikah, the appropriate prior-marriage or termination documents should be reviewed rather than relying on a general CNIC assumption.'],
    ['Are translation and attestation always required?', 'No. Translation, authentication and attestation depend on where the marriage documents will be used and what the receiving authority requires. A document used only in Pakistan may have different needs from one submitted to an embassy, immigration department or foreign civil registry. The destination and purpose should therefore be identified first, after which any translation or attestation can be scoped separately from the Nikah ceremony itself.'],
    ['Can the guide answer a school-specific Sharia question?', 'The guide can explain common legal and documentary considerations, but school-specific religious rulings may require a qualified scholar. Questions about witnesses, representation, offer and acceptance or other religious details can have jurisprudential dimensions that should not be oversimplified. The legal team can coordinate the Pakistan documentation and registration issues while identifying when a specialised religious opinion is appropriate for the couple’s particular concern.'],
    ['What if one party was previously married?', 'The previous marriage’s termination should be documented before a new Online Nikah is arranged. Depending on the circumstances, the relevant evidence may be a divorce certificate, Talaq record, Khula or dissolution decree, or death certificate. Any current legal or religious eligibility issue should be resolved before the new ceremony date is fixed. The purpose is to establish the facts rather than rely only on an oral statement of marital status.'],
    ['Does an urgent ceremony change the document requirements?', 'Urgency does not remove the need to check identity, marital status, free consent, witnesses, Mahr and any authority document. A ceremony can sometimes be coordinated quickly when the file is already clear, but private scheduling should not be confused with official registration timing. Travel, embassy, immigration or family deadlines should be disclosed at the first review so the team can explain which parts are controllable and which depend on an outside authority.'],
    ['Where should I go for the actual Online Nikah service?', 'Use the homepage or the Online Nikah in Pakistan page for broad service intent, or select the relevant city or country page when location matters. These focused guides are designed to answer a narrower informational question and then direct users to the appropriate service target. That structure prevents multiple articles from competing unnecessarily for the same generic “Online Nikah” search while preserving useful historical URLs and specialised information.'],
    [`Why is “${title}” treated separately from the main service page?`, 'The site separates broad Online Nikah service intent from narrower informational questions so that users and search engines can identify the most relevant page. Specific guides answer one focused question and link back to the main service or Pakistan page instead of competing with them for the same broad keyword.']
  ]
}

export function GuidePage({ data, slug }) {
  const faq=guideFaq(data.title)
  const path=`/${slug}/`
  return <Layout><main>
    <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><a href="/blogs/">Guides</a><span aria-hidden="true">›</span><span>{data.title}</span></nav>
    <Hero eyebrow={data.eyebrow} title={data.title} image={data.image} imageAlt={data.title} actions={<><CTA href="/pakistan/" children="Online Nikah in Pakistan" /><CTA href={whatsappLink()} outline children="Ask a Question" /></>}><p>{data.intro}</p></Hero>
    <section className="intro-band">
      <div><p className="eyebrow">LEGAL and DOCUMENTARY CONTEXT</p><h2>Pakistan-Based Review of Remote Nikah Records and Procedure</h2><h3>Legal Guidance Separates Religious Ceremony, Registration and Overseas Document Use</h3></div>
      <p>This guide addresses a focused search question while the main Online Nikah service page remains the broad commercial target. Where a conclusion depends on a couple’s own identity, marital status, participation structure or destination country, a case-specific review is still required.</p>
    </section>
    <section className="content-section guide-prose">
      {data.sections.map(([heading,body],i)=><article key={heading}><p className="eyebrow">{String(i+1).padStart(2,'0')} / GUIDE</p><h2>{heading}</h2><p>{body}</p></article>)}
      <div className="guide-next"><h3>Need Online Nikah Service Rather Than General Information?</h3><p>Use the main service page for a case-specific review of both parties’ locations, documents, witnesses, Mahr, ceremony structure and registration needs.</p><a className="text-link" href="/">Go to Online Nikah Services <span>↗</span></a></div>
    </section>
    <section className="content-section faq-section"><div className="section-title"><p className="eyebrow">FAQ</p><h2>Questions Related To This Online Nikah Guide</h2></div><FAQ items={faq}/></section>
  </main></Layout>
}

// end
