import { Layout, CTA, PageJsonLd, OfficePanel, PractitionerPanel, siteConfig, whatsappLink } from '../layout'
import WhatsAppForm from './WhatsAppForm'

export const metadata = {
  title:{absolute:'Contact Online Nikah Services | WhatsApp Consultation'},
  description:'Contact Online Nikah Services in Pakistan for ceremony planning, documents and registration guidance. Karachi Johar and DHA Phase 7 consultations.',
  alternates:{canonical:'/contact-us/'},
  openGraph:{
    title:'Contact Online Nikah Services | WhatsApp Consultation',
    description:'Contact the Pakistan-based Online Nikah team for a structured first review by WhatsApp.',
    url:'/contact-us/',
    type:'website'
  }
}

export default function Page(){
  return <Layout><main>
    <section className="contact-layout">
      <div>
        <p className="eyebrow">ONLINE NIKAH ENQUIRY / PAKISTAN</p>
        <h1>Contact Online Nikah Services for A Case Assessment</h1>
        <h2>Start With Both Parties’ Locations, Marital Status and Intended Document Use</h2>
        <h3>Our Matrimonial Team Reviews The Ceremony, Witnesses and Registration Route Before You Fix The Date</h3>
        <p className="section-lead">Tell us where both intended spouses are located, nationality, current marital status, preferred date and why you need the final marriage documents. This lets the team identify the first checklist without asking you to send unnecessary sensitive material.</p>
        <div className="prose">
          <p><strong>General Online Nikah contact</strong><br/><a className="text-link" href={whatsappLink('Hello, I would like an Online Nikah assessment.')}>WhatsApp {siteConfig.phone} <span>↗</span></a></p>
          <p><strong>Professional fee range</strong><br/>The usual professional fee is PKR 40,000–60,000 depending on the agreed scope. The normal payment structure is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope. Mahr, official charges, courier, translation and attestation costs are separate unless expressly included.</p>
          <p><strong>Before sending documents</strong><br/>Please begin with the facts of the matter. Identity documents, prior-marriage records or authority documents should be sent only after the team confirms that they are needed for the review.</p>
          <CTA href={whatsappLink('Hello, I would like an Online Nikah assessment. Both parties are located in: ')} children="Open WhatsApp Directly" />
        </div>
      </div>
      <WhatsAppForm/>
    </section>

    <OfficePanel/>

    <section className="content-section split-section">
      <div><p className="eyebrow">WHAT HAPPENS NEXT</p><h2>Online Nikah Enquiry Review Before Ceremony Scheduling</h2></div>
      <div className="prose">
        <p>The first response is intended to establish the practical route, not to make a blanket promise. The team considers identity, free consent, witnesses, Mahr, any previous marriage, the proposed participation method and whether a power of attorney or other authority document may be relevant.</p>
        <p>Where the couple needs a Pakistan marriage registration record, embassy use, spouse-visa evidence or other overseas documentation, those needs should be mentioned at the start. A Nikah ceremony, statutory registration and foreign recognition are connected but separate questions, and the receiving authority controls its own requirements.</p>
        <p>Karachi consultations can be coordinated through the Johar Head Office or DHA Phase 7 office. Remote enquiries from Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and overseas are routed to the relevant matrimonial team member or regional coordinator.</p>
      </div>
    </section>

    <PractitionerPanel/>

    <section className="cta-band">
      <p className="eyebrow">READY TO START</p>
      <h2>Send The Facts for Your Online Nikah Assessment</h2>
      <p>A short, accurate outline is more useful than a large document bundle at the first stage.</p>
      <CTA href={whatsappLink('Hello, I would like an Online Nikah assessment.')} children="WhatsApp the Online Nikah Team"/>
    </section>

    <PageJsonLd
      breadcrumb={[['Home','/'],['Contact','/contact-us/']]}
      service="Online Nikah Consultation and Case Assessment"
      path="/contact-us/"
      title="Contact Online Nikah Services for a Case Assessment"
      description="Contact the Pakistan-based Online Nikah team for ceremony planning, documents and registration guidance."
      areaServed="Worldwide"
    />
  </main></Layout>
}
