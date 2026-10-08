import { Layout, Hero, CTA, FAQ, PageJsonLd, PractitionerPanel, SupportingImages, whatsappLink } from '../layout'

const serviceFaq = [
  ['What does the Online Nikah service include?', 'The service begins with a structured review of both parties’ locations, identity, nationality, marital status, free consent, witnesses, Mahr and intended document use. Depending on the agreed scope, the team can coordinate the remote ceremony structure, prepare or review relevant authority documents, support completion of the Nikah documentation and assist with Pakistan-side registration steps. Translation, attestation, courier work and foreign recognition are separate unless specifically included in writing.'],
  ['Is the Online Nikah ceremony the same as legal registration?', 'No. The Nikah ceremony and statutory marriage registration are related but different stages. The Nikah Nama records the Muslim marriage contract, while a computerised marriage certificate is obtained through the relevant civil registration process. Couples who need the documents for immigration, embassy, spouse-visa or overseas civil use should discuss the intended destination early so the Pakistan-side documents can be planned with that purpose in mind.'],
  ['Can you arrange an Online Nikah when both parties live abroad?', 'Both intended spouses can request an initial assessment while living outside Pakistan. The team reviews how each person will participate, whether any representative authority is needed, how witnesses will be arranged and what Pakistan-side documentation or registration is expected. The fact that both people are abroad does not remove the need for identity, consent, witnesses, Mahr and accurate marriage records.'],
  ['Do you provide a Nikah Khawan as part of the service?', 'The agreed ceremony scope can include coordination of an appropriate Nikah Khawan or solemnisation arrangement where required. The role of the person conducting the ceremony should not be confused automatically with the role of a licensed Nikah Registrar or the later civil registration process. The team identifies which roles and documents are needed for the particular arrangement before the ceremony is confirmed.'],
  ['Can the service include a power of attorney?', 'Where representation is actually required, the legal team can prepare or review an authority or power-of-attorney document for the acts that need to be performed. It is not automatically necessary in every remote Nikah. If the document will be executed abroad, notarisation, consular attestation or another formal step may apply, so the place of execution should be disclosed before the wording is finalised.'],
  ['How much does the service cost?', 'The usual professional fee range is PKR 40,000–60,000 depending on locations, documentation, representation and registration scope. The normal payment structure is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope. Mahr is separate, as are official fees, translation, courier, attestation and other third-party costs unless expressly included in the quotation.'],
  ['Can you guarantee a foreign embassy will accept the documents?', 'No. Embassies, immigration departments, civil registries and foreign courts apply their own rules. The team can help organise the Pakistan-side Nikah and registration records and identify likely translation, authentication or attestation questions, but it cannot guarantee acceptance or a visa outcome. The receiving country and intended use should be identified at the first review so the documentation can be planned responsibly.'],
  ['Which cities do you cover in Pakistan?', 'The service is remote-first and accepts enquiries nationwide. Dedicated city guidance is available for Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and Rahim Yar Khan, while couples in other locations can begin through the same remote assessment. A city service page describes coverage and coordination; it should not be read as a claim that every registration step occurs at a physical office in that city.'],
  ['Who handles Online Nikah files?', 'Karachi coordination may involve Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant. Islamabad and Rawalpindi matters are coordinated through Kashif Mumtaz, Advocate High Court, and Lahore matters through Junaid Kahloon, Advocate High Court. Allocation depends on the location and legal or documentary work required, and the site does not imply personal review by a named lawyer unless that review actually occurs.'],
  ['How do we begin?', 'Send both parties’ current countries and cities, nationality, marital status, preferred ceremony date and the intended use of the final documents through the official WhatsApp contact. The team will identify the first checklist and whether any prior-marriage record, authority document, witness information or registration material is needed. This targeted approach reduces unnecessary sharing of sensitive documents and helps separate the ceremony from later administrative steps.']
]

export const metadata = {
  title:{absolute:'Online Nikah Services in Pakistan | Ceremony, Documents and Registration'},
  description:'Online Nikah services in Pakistan: remote ceremony coordination, document review, Nikah Nama, witnesses, Mahr and marriage registration assistance.',
  alternates:{canonical:'/our-services/'},
  openGraph:{
    title:'Online Nikah Services in Pakistan | Ceremony, Documents and Registration',
    description:'Understand the professional scope of Pakistan-based Online Nikah ceremony and registration assistance.',
    url:'/our-services/',
    type:'website'
  }
}

export default function Page(){
  return <Layout><main>
    <Hero
      eyebrow="ONLINE NIKAH SERVICE SCOPE"
      title="Online Nikah Services for Ceremony, Documents and Registration"
      image="/hero-nikah.png"
      imageAlt="Online Nikah ceremony and marriage documents coordinated by a Pakistan-based legal team"
      actions={<><CTA href={whatsappLink('Hello, I would like to discuss the scope of your Online Nikah service.')} children="Request a Service Assessment"/><CTA href="/pakistan/" outline children="Read the Pakistan Guide"/></>}
    >
      <p>Our Online Nikah service is designed for couples who need more than a video call. The work begins with identity, eligibility, free consent, witnesses, Mahr and the proposed participation structure, then separates the ceremony from Pakistan registration and later document-use questions.</p>
      <p>The exact scope depends on where both intended spouses are located, whether either person has been married before, whether representation is required and what the final marriage documents will be used for.</p>
    </Hero>

    <section className="content-section split-section">
      <div>
        <p className="eyebrow">E-E-A-T / SERVICE REVIEW</p>
        <h2>Family Law Professionals Review The Online Nikah Route Before Scheduling</h2>
        <h3>Remote Nikah Ceremony Support With Clear Legal and Documentation Boundaries</h3>
      </div>
      <div className="prose">
        <p>The first professional task is to understand the facts. Both parties’ current locations, nationality, identity documents and marital status can affect how the ceremony and documents should be arranged. Free consent must be clear, proposed witnesses should be identified and the Mahr terms should be settled before the Nikah Nama is treated as final.</p>
        <p>If one intended spouse is overseas, the team considers how that person will participate and whether any attorney, proxy or other authority document is appropriate. A power of attorney should not be inserted into every case as a standard formality. Where representation is needed, the authority should match the acts that actually need to be performed and overseas execution requirements should be checked before the document is relied upon.</p>
        <p>This early review also helps prevent a common mistake: treating religious solemnisation, statutory marriage registration and foreign recognition as one event. They are connected stages, but they answer different legal and administrative questions.</p>
      </div>
    </section>

    <SupportingImages/>

    <section className="process-section">
      <div className="section-title">
        <p className="eyebrow">01 / CEREMONY</p>
        <h2>Online Nikah Ceremony Coordination</h2>
        <p className="section-lead">The ceremony is planned around the parties, witnesses and agreed participation method rather than around the technology alone.</p>
      </div>
      <div className="process-grid">
        <div className="process-item"><span>01</span><h3>Identity and Marital Status</h3><p>CNIC, NICOP or passport particulars and any relevant prior-marriage record are reviewed before arrangements are confirmed.</p></div>
        <div className="process-item"><span>02</span><h3>Consent and Participation</h3><p>The team confirms how each intended spouse will participate and whether any representative authority needs preparation or review.</p></div>
        <div className="process-item"><span>03</span><h3>Witnesses and Mahr</h3><p>Witness participation and Mahr instructions are settled early enough to be recorded accurately in the marriage documentation.</p></div>
        <div className="process-item"><span>04</span><h3>Nikah Coordination</h3><p>The ceremony timing and agreed structure are coordinated after the essential legal and documentary questions have been addressed.</p></div>
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">02 / DOCUMENTS</p><h2>Online Nikah Document Review and Authority Papers</h2></div>
      <div className="prose">
        <p>Document review is not a request for every personal document a couple possesses. The initial enquiry should provide enough information to identify a targeted checklist. That normally means the parties’ names, current countries and cities, nationality, marital status, preferred date, intended witnesses and the purpose for which the marriage documents will be used.</p>
        <p>Where a previous marriage has ended, an appropriate divorce, dissolution, Khula, Talaq or death record may be relevant. Where representation is proposed, the authority document should be prepared for the actual acts required rather than copied from an unrelated precedent. Overseas signing formalities may also need to be confirmed before the ceremony.</p>
        <p>The Nikah Nama itself deserves careful review. Names, identity numbers, dates, witness particulars and Mahr entries can become important later for registration, immigration or other official use. Errors are easier to prevent before execution than to correct after multiple records have been issued.</p>
      </div>
    </section>

    <section className="intro-band">
      <div><p className="eyebrow">03 / REGISTRATION</p><h2>Marriage Registration Assistance After The Online Nikah</h2></div>
      <div>
        <h3>Nikah Nama and Computerised Marriage Certificate Are Separate Records</h3>
        <p>Where registration assistance is part of the agreed scope, the team helps organise the Pakistan-side documentary route after solemnisation. The competent authority and procedure depend on the facts and locality. A computerised marriage certificate should not be described as the same document as the Nikah Nama, and government processing times should not be guaranteed by a private service provider.</p>
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">04 / OVERSEAS USE</p><h2>Translation, Attestation and Foreign Document Use</h2></div>
      <div className="prose">
        <p>Couples abroad often need the Pakistan documents for an embassy, immigration application, spouse visa, foreign civil registry, employer, bank or another official purpose. Each receiving institution can set its own requirements. Some may ask for certified translation, authentication, attestation, additional identity evidence or proof of how the marriage was registered.</p>
        <p>The Online Nikah service can help identify the Pakistan-side documents and common next questions, but it cannot turn a religious ceremony into a guaranteed civil result in another jurisdiction. The destination authority should be identified as early as possible so that the couple understands what must be confirmed outside the Pakistan process.</p>
        <p>Country-specific guides are available for the United Kingdom, United States, Canada, United Arab Emirates, Saudi Arabia and Qatar. These pages intentionally focus on document-use and recognition cautions rather than repeating the generic service page.</p>
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">05 / PROFESSIONAL FEES</p><h2>Online Nikah Professional Fee and Payment Terms</h2></div>
      <div className="prose">
        <p>The usual professional service fee is PKR 40,000–60,000. The exact figure depends on the agreed scope, the parties’ locations, whether representation documents are needed, the complexity of prior-marriage or identity records and the registration work included.</p>
        <p>The normal payment structure is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope. Mahr is a separate obligation agreed between the intended spouses. Official fees, translation, courier, authentication, attestation and other third-party charges should also be identified separately unless expressly included in writing.</p>
        <p>Before payment, the couple should know what the professional scope includes and what remains dependent on a government authority, foreign institution or outside service provider. Clear scope is more useful than a package description that merges unrelated stages.</p>
      </div>
    </section>

    <PractitionerPanel/>

    <section className="city-section">
      <div className="section-title"><p className="eyebrow">06 / SERVICE AREAS</p><h2>Online Nikah Coverage In Pakistan and Abroad</h2><p className="section-lead">The service is remote-first, with dedicated national, city and overseas guidance pages so each search intent remains clear.</p></div>
      <div className="city-grid">
        <article><div><span className="city-pin">P</span><h3>Pakistan</h3></div><p>National Online Nikah guidance with separate city pages for major local service searches.</p><a href="/pakistan/">Online Nikah in Pakistan <span>↗</span></a></article>
        <article><div><span className="city-pin">K</span><h3>Karachi</h3></div><p>Karachi-specific Online Nikah guidance and current Johar and DHA Phase 7 consultation details.</p><a href="/online-nikah-marriage-court-marriage-in-karachi/">Online Nikah in Karachi <span>↗</span></a></article>
        <article><div><span className="city-pin">L</span><h3>Lahore</h3></div><p>Lahore service intent with regional coordination and remote document review.</p><a href="/online-nikah-marriage-court-marriage-in-lahore/">Online Nikah in Lahore <span>↗</span></a></article>
        <article><div><span className="city-pin">O</span><h3>Overseas Couples</h3></div><p>Country pages separate Pakistan-side ceremony work from destination-country recognition questions.</p><a href="/united-kingdom/">Explore Overseas Guidance <span>↗</span></a></article>
      </div>
    </section>

    <section className="content-section faq-section">
      <div className="section-title"><p className="eyebrow">07 / FAQ</p><h2>Questions About The Online Nikah Service Scope</h2><p className="section-lead">The written scope for a particular couple controls the professional engagement; these answers describe the usual structure.</p></div>
      <FAQ items={serviceFaq}/>
    </section>

    <section className="cta-band">
      <p className="eyebrow">REQUEST A SCOPE REVIEW</p>
      <h2>Tell Us What You Need From The Online Nikah Service</h2>
      <p>Share both parties’ locations, marital status, preferred date and intended document use so the team can define the right scope before you proceed.</p>
      <CTA href={whatsappLink('Hello, I would like a scope and fee assessment for Online Nikah services.')} children="Request a Scope and Fee Assessment"/>
    </section>

    <PageJsonLd
      breadcrumb={[['Home','/'],['Our Services','/our-services/']]}
      service="Online Nikah Ceremony, Document and Registration Services"
      faq={serviceFaq}
      path="/our-services/"
      title="Online Nikah Services for Ceremony, Documents and Registration"
      description="Pakistan-based remote Nikah ceremony coordination, document review and marriage registration assistance."
      areaServed="Worldwide"
    />
  </main></Layout>
}
