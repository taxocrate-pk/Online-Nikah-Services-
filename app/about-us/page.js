import { Layout, CTA, PageJsonLd, PractitionerPanel, OfficePanel, whatsappLink } from '../layout'

export const metadata = {
  title:{absolute:'About Online Nikah Services | Matrimonial Legal Team'},
  description:'Meet the Pakistan-based matrimonial legal team behind Online Nikah Services and learn how remote Nikah, documents and registration are handled.',
  alternates:{canonical:'/about-us/'},
  openGraph:{
    title:'About Online Nikah Services | Matrimonial Legal Team',
    description:'Pakistan-based matrimonial lawyers coordinating Online Nikah ceremony, documentation and registration matters.',
    url:'/about-us/',
    type:'website'
  }
}

export default function Page(){
  return <Layout><main>
    <section className="about-block">
      <p className="eyebrow">ABOUT ONLINE NIKAH SERVICES / PAKISTAN</p>
      <h1>Pakistan-Based Online Nikah Team for Remote Marriage Guidance</h1>
      <div className="about-columns">
        <div>
          <h2>Matrimonial Legal Experience Behind The Online Nikah Service</h2>
          <h3>Lawyers Coordinate Ceremony, Documentation and Registration Questions Without Blurring Their Legal Effect</h3>
          <p>Online Nikah Services is built around a simple principle: a remote marriage arrangement deserves the same care with identity, free consent, witnesses, Mahr and accurate documentation as an in-person matter. The technology is only the communication medium. The legal and religious elements of the Nikah, the Pakistan registration route and the later use of documents must still be considered on their own terms.</p>
          <p>The service is coordinated through Pakistan-based advocates and matrimonial professionals. Karachi files may involve Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant. Islamabad and Rawalpindi matters are coordinated through Kashif Mumtaz, Advocate High Court, while Lahore matters are coordinated through Junaid Kahloon, Advocate High Court.</p>
          <p>Team allocation depends on the city, parties’ locations and the actual legal or documentary work required. A website profile does not mean that every named lawyer personally reviews every enquiry, and no page should attribute an individual review unless that review has actually taken place.</p>
        </div>
        <div>
          <h2>Clear Limits Are Part of Professional Online Nikah Guidance</h2>
          <p>We do not describe a video call as a complete legal solution. A religious ceremony, the Nikah Nama, statutory marriage registration, a computerised marriage certificate, translation, attestation and foreign recognition are connected stages but not interchangeable documents or outcomes.</p>
          <p>We also do not guarantee a government processing time, visa approval, embassy acceptance or civil recognition in another country. Where the documents will be used abroad, the receiving authority should be identified early and its current requirements should be confirmed. Our role is to coordinate and explain the Pakistan-side process within the agreed scope.</p>
          <p>The usual professional service fee is PKR 40,000–60,000 depending on the agreed work, with 50% advance and the remaining 50% after Nikah and registration, subject to the written scope. Mahr, official charges and third-party expenses remain separate unless expressly included.</p>
          <CTA href={whatsappLink('Hello, I would like to discuss an Online Nikah matter with your matrimonial team.')} children="Talk to the Matrimonial Team"/>
        </div>
      </div>
    </section>

    <PractitionerPanel/>

    <section className="content-section split-section">
      <div><p className="eyebrow">OUR WORKING METHOD</p><h2>Evidence, Consent and Documentation Before Ceremony Convenience</h2></div>
      <div className="prose">
        <p>An enquiry starts with the facts that materially affect the arrangement: where both intended spouses are located, nationality, identity documents, current marital status, free consent, proposed witnesses, Mahr and the intended use of the final records. If either person has been married before, the relevant termination record may need review before a new ceremony is scheduled.</p>
        <p>If a power of attorney or other authority document is proposed, the team considers whether it is actually required and what acts it must authorise. Where execution takes place abroad, notarisation, consular attestation or another formal step may be relevant. We prefer a case-specific authority document over a generic form copied into every remote marriage file.</p>
        <p>The same care applies to the Nikah Nama. Names, identity numbers, dates, witnesses and Mahr entries can matter later for registration, immigration or overseas documentary use. Accurate first-stage work reduces the risk of later correction problems.</p>
      </div>
    </section>

    <section className="intro-band">
      <div><p className="eyebrow">REMOTE-FIRST, NOT REMOTE-ONLY</p><h2>Online Nikah Support Across Pakistan and for Overseas Couples</h2></div>
      <div>
        <h3>National Coverage With City and Country Guidance Kept Separate</h3>
        <p>The website has dedicated Pakistan, city and overseas country pages because a Karachi service enquiry, a UK recognition question and a general “Online Nikah” search do not have exactly the same intent. This structure helps clients reach the right information and reduces the need to repeat one generic page across multiple locations.</p>
      </div>
    </section>

    <OfficePanel/>

    <section className="content-section split-section">
      <div><p className="eyebrow">INFORMATION STANDARDS</p><h2>What We Promise and What We Do Not Promise</h2></div>
      <div className="prose">
        <p>We aim to explain the process in plain language, identify the documents that are actually relevant and distinguish professional work from decisions that belong to a government or foreign authority. General website information is not a substitute for reviewing a particular couple’s facts.</p>
        <p>Where a question depends on a religious school, foreign jurisdiction, embassy, immigration body or civil registry, we identify that boundary rather than presenting a universal answer. Qualified religious guidance may be appropriate for school-specific Sharia questions, while foreign legal or administrative recognition must be confirmed with the relevant authority or suitably qualified adviser in that jurisdiction.</p>
        <p>This approach is part of the site’s E-E-A-T standard: identify who handles the work, explain the scope, avoid fabricated guarantees, use current office information and keep religious ceremony, Pakistan registration and overseas use distinct.</p>
      </div>
    </section>

    <section className="cta-band">
      <p className="eyebrow">CASE-SPECIFIC REVIEW</p>
      <h2>Start With A Short Online Nikah Assessment</h2>
      <p>Tell us both parties’ locations, marital status, preferred date and intended document use. The team can then identify the first practical step.</p>
      <CTA href={whatsappLink('Hello, I would like an Online Nikah assessment.')} children="Request an Assessment"/>
    </section>

    <PageJsonLd
      breadcrumb={[['Home','/'],['About Us','/about-us/']]}
      path="/about-us/"
      title="Pakistan-Based Online Nikah Team for Remote Marriage Guidance"
      description="Learn about the Pakistan-based advocates and matrimonial professionals coordinating Online Nikah matters."
    />
  </main></Layout>
}
