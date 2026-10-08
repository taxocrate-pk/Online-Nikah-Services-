import { Layout, CTA, PageJsonLd, whatsappLink } from '../layout'

export const metadata = {
  title:{absolute:'Online Nikah Guides Pakistan | Validity, Documents and Registration'},
  description:'Focused Online Nikah guides on validity, CNIC and marriage records, Nikah Khawan roles, registration and document verification in Pakistan.',
  alternates:{canonical:'/blogs/'},
  openGraph:{
    title:'Online Nikah Guides Pakistan | Validity, Documents and Registration',
    description:'Focused legal and documentation guides supporting the main Online Nikah service without duplicating its broad keyword intent.',
    url:'/blogs/',
    type:'website'
  }
}

const posts = [
  {
    title:'Is Online Nikah Valid in Islam? Legal and Sharia Considerations',
    desc:'A focused guide to consent, witnesses, offer and acceptance, remote participation, representation and the separate Pakistan registration question.',
    href:'/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/',
    intent:'Validity'
  },
  {
    title:'Online Nikah in Pakistan: CNIC, Registration and Verification Guide',
    desc:'Why CNIC can support identity checking but does not by itself prove a marriage, and how Nikah Nama and civil registration records fit together.',
    href:'/online-nikah-service-in-pakistan-urdu/',
    intent:'Verification'
  },
  {
    title:'Nikah Khawan in Pakistan: Role, Records and Registration',
    desc:'The difference between conducting the ceremony and performing statutory registration, with practical guidance for remote arrangements.',
    href:'/nikah-khawan-service-overview-a-comprehensive-guide/',
    intent:'Nikah Khawan'
  },
  {
    title:'Marriage Certificate Verification in Pakistan: NADRA and Local Records',
    desc:'How to think about the issuing authority, local marriage register, identity data, document authenticity and later foreign use.',
    href:'/nadra-marriage-certificate-authenticity-guide/',
    intent:'Marriage Record'
  }
]

export default function Page(){
  return <Layout><main>
    <section className="article-list">
      <p className="eyebrow">ONLINE NIKAH KNOWLEDGE CENTRE</p>
      <h1>Online Nikah Guides for Validity, Documents and Registration</h1>
      <div className="article-intro">
        <h2>Focused Answers That Support the Main Online Nikah Service Page</h2>
        <h3>Each Guide Targets One Legal or Documentation Question Instead of Competing for the Same Broad Keyword</h3>
        <p>The homepage remains the primary broad-intent page for “Online Nikah.” These guides are deliberately narrower. They answer questions about religious and legal validity, identity and CNIC-related searches, the role of a Nikah Khawan and marriage-record verification. That structure makes the content more useful to readers and reduces keyword cannibalisation across the site.</p>
        <p>General information cannot decide a particular couple’s case. Identity, free consent, marital status, witnesses, Mahr, representation, registration and overseas document use may require a case-specific review before a ceremony is fixed.</p>
      </div>

      <div className="article-grid">
        {posts.map((post,i)=><article className="article-card" key={post.href}>
          <p className="eyebrow">{String(i+1).padStart(2,'0')} / {post.intent}</p>
          <h2>{post.title}</h2>
          <p>{post.desc}</p>
          <a className="text-link" href={post.href}>Read the Guide <span>↗</span></a>
        </article>)}
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">START WITH SERVICE INTENT</p><h2>Need an Online Nikah Service Rather Than General Information?</h2></div>
      <div className="prose">
        <p>If you already know that you want to arrange an Online Nikah, the main service and Pakistan pages are the better starting point. They explain the ceremony sequence, identity and consent review, witnesses, Mahr, professional fee, registration assistance and how overseas document-use questions are separated from the Pakistan process.</p>
        <p><a className="text-link" href="/">Online Nikah Services <span>↗</span></a></p>
        <p><a className="text-link" href="/pakistan/">Online Nikah in Pakistan <span>↗</span></a></p>
        <p><a className="text-link" href="/our-services/">Ceremony, Documents and Registration Scope <span>↗</span></a></p>
      </div>
    </section>

    <section className="intro-band">
      <div><p className="eyebrow">CITY AND COUNTRY INTENT</p><h2>Use Location Pages When the Jurisdiction or Service Area Matters</h2></div>
      <div>
        <h3>Pakistan Cities and Overseas Countries Have Separate Online Nikah Guidance</h3>
        <p>Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and Rahim Yar Khan have local service pages. The UK, USA, Canada, UAE, Saudi Arabia and Qatar have country pages that focus on Pakistan-side arrangements and the separate question of recognition or document use in the destination country.</p>
      </div>
    </section>

    <section className="cta-band">
      <p className="eyebrow">CASE-SPECIFIC QUESTION</p>
      <h2>Ask the Online Nikah Team About Your Own Circumstances</h2>
      <p>Share both parties’ locations, marital status and intended document use so the team can identify the right service or guide.</p>
      <CTA href={whatsappLink('Hello, I have a question after reading an Online Nikah guide.')} children="Ask on WhatsApp"/>
    </section>

    <PageJsonLd
      breadcrumb={[['Home','/'],['Guides','/blogs/']]}
      path="/blogs/"
      title="Online Nikah Guides for Validity, Documents and Registration"
      description="Focused Online Nikah guides on validity, documents, registration and marriage-record verification in Pakistan."
    />
  </main></Layout>
}
