import {
  Layout,
  Hero,
  CTA,
  CountryGrid,
  FAQ,
  PageJsonLd,
  SupportingImages,
  PractitionerPanel,
  OfficePanel,
  cityData,
  whatsappLink
} from './layout'

const faqs = [
  ['What is an Online Nikah service?', 'An Online Nikah service coordinates a Muslim marriage where one or both intended spouses may participate remotely and the Pakistan-side ceremony, documents and registration questions are planned in advance. The service should not be reduced to a video call. Identity, free consent, witnesses, Mahr, any attorney or proxy arrangement, accurate Nikah Nama entries and later registration all need separate attention.'],
  ['Is Online Nikah legally valid in Pakistan?', 'A remote arrangement can be legally workable in Pakistan when the relevant marriage requirements, identities, consent, witnesses, documentation and registration route are properly addressed. The exact answer depends on the facts and how participation is structured. A ceremony should therefore be reviewed before it is scheduled, particularly where an overseas spouse, attorney, prior marriage or later foreign use of documents is involved.'],
  ['Is Online Nikah valid in Islam?', 'Remote communication does not by itself decide Sharia validity. The underlying elements of Nikah remain important, including clear identity, free consent, offer and acceptance, witnesses and Mahr. Where a party acts through an authorised representative, that authority should also be considered. Couples who need a school-specific religious ruling should consult a qualified scholar in addition to obtaining legal and registration guidance.'],
  ['Can both bride and groom be outside Pakistan?', 'Yes, both intended spouses can request an initial Online Nikah assessment while living abroad. The team will review nationality, current countries and cities, marital status, intended witnesses, the proposed participation method and whether Pakistan-based representation or registration work is required. The service is planned around the required legal and documentary result rather than around the physical distance alone.'],
  ['Can one spouse be in Pakistan and the other overseas?', 'Yes. This is a common remote structure, but the overseas spouse’s identity, consent and participation method must be clear. Depending on the arrangement, a power of attorney or other authority document may be relevant. The couple should also decide whether the resulting Pakistan documents will later be used for immigration, embassy, spouse-visa or other overseas purposes because those uses may require additional formalities.'],
  ['Is a power of attorney compulsory for every Online Nikah?', 'No. A power of attorney is not an automatic requirement for every remote Nikah. Its necessity depends on whether a person must act, sign or submit documents on behalf of an intended spouse in Pakistan. Where authority is required, the wording should be tailored to the acts actually needed and any overseas notarisation or attestation requirement should be checked before the document is relied upon.'],
  ['What documents are required for Online Nikah?', 'The first-stage checklist usually starts with CNIC, NICOP or passport details, current locations, nationality, marital status, preferred date, witness details and the intended use of the marriage documents. A divorced or widowed person may need the relevant termination or death record. Additional authority, translation, attestation or registration documents depend on the specific arrangement and should be requested only after the initial review.'],
  ['How are witnesses handled in an Online Nikah?', 'Remote coordination does not remove applicable witness requirements. The proposed witnesses should be identified before the ceremony, their participation should be practical and their details should be recorded accurately. Where the couple wants a particular school of Islamic jurisprudence applied to witness questions, that religious issue should be confirmed with a qualified scholar while the legal team handles the documentation and registration route.'],
  ['How is free consent checked when the Nikah is remote?', 'Each intended spouse should provide clear and consistent voluntary instructions. Identity should be checked and any concern about coercion, impersonation, conflicting instructions or lack of capacity should be addressed before the ceremony. A remote format should increase care, not reduce it. If the team cannot obtain a reliable understanding of identity and consent, the matter should not be rushed simply because a ceremony date has been requested.'],
  ['What is Mahr and is it included in the service fee?', 'Mahr is an agreed term of the marriage between the intended spouses. Its amount, currency and whether it is prompt or deferred should be settled before the Nikah Nama is finalised. Mahr is not part of the professional legal fee. The Online Nikah service fee covers the agreed professional scope; Mahr, official charges and third-party costs remain separate unless a written quotation specifically states otherwise.'],
  ['What is the Online Nikah service fee?', 'The usual professional fee range is PKR 40,000–60,000 depending on the agreed scope, locations, documentation and registration work. The normal arrangement is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope of the matter. Official fees, courier charges, translations, attestations and other third-party expenses should be identified separately rather than hidden inside an unclear package price.'],
  ['Is Online Nikah the same as marriage registration?', 'No. The Nikah ceremony, statutory marriage registration and later use of the documents are related but distinct stages. A Nikah Nama records the Muslim marriage contract. A computerised marriage certificate is a separate civil registration record obtained through the competent process. Translation, authentication, attestation and foreign recognition are further issues and should not be described as automatic consequences of the ceremony.'],
  ['Can you guarantee same-day marriage registration?', 'No responsible service should guarantee a government registration time that it does not control. The ceremony can be scheduled when the reviewed participants and documents are ready, while official registration follows the competent authority’s procedure and timetable. If the couple has a travel, embassy or immigration deadline, that should be disclosed at the beginning so the work can be planned realistically.'],
  ['Can Online Nikah documents be used for a spouse visa?', 'Marriage documents may support a spouse-visa or immigration application, but the receiving immigration authority determines what evidence it accepts. The legal team can coordinate the Pakistan-side Nikah and registration records and identify likely translation or attestation questions. It cannot guarantee visa approval, immigration recognition or a particular decision by an embassy, consulate or foreign government.'],
  ['Will an Online Nikah in Pakistan automatically be recognised abroad?', 'No. Foreign recognition depends on the law and requirements of the receiving country and the purpose for which the documents are being used. A foreign authority may request civil registration, certified translation, authentication, attestation, proof of the ceremony structure or additional evidence. The destination authority should therefore be identified early instead of assuming that one Pakistan document works everywhere.'],
  ['Can a divorced or widowed person arrange an Online Nikah?', 'Yes, subject to current legal and religious eligibility. The previous marriage’s termination should be documented appropriately. Depending on the facts, the relevant record may be a divorce certificate, Talaq record, Khula or dissolution decree, or death certificate. Any case-specific waiting-period or religious question should be addressed before the new Nikah date is confirmed.'],
  ['Which lawyers handle Online Nikah matters?', 'Karachi coordination may involve Shankar Lal Kataria, Mohsin Ali Mirani, Zaheer Ashraf Qazi and Sobia Mohsin as relevant to the matter. Islamabad and Rawalpindi enquiries are coordinated through Kashif Mumtaz, Advocate High Court, and Lahore matters through Junaid Kahloon, Advocate High Court. The team member assigned depends on location and the legal or documentary work actually required.'],
  ['Do you provide Online Nikah services outside Karachi?', 'Yes. The service is remote-first and accepts enquiries from Pakistan and overseas. Dedicated city pages cover Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and Rahim Yar Khan. A city service page describes coverage and coordination; it does not mean that every ceremony or registration step must occur at a physical office in that city.'],
  ['How long does an Online Nikah process take?', 'Timing depends on document readiness, participation arrangements, witnesses, any authority document, prior-marriage evidence, registration work and later translation or attestation. A straightforward matter can move faster than a file with missing or inconsistent documents. For that reason the team gives a case-specific estimate after the initial review instead of advertising one timeline for every couple.'],
  ['How do we start an Online Nikah enquiry?', 'Send both parties’ countries and cities, nationality, marital status, preferred date and the purpose for which the final documents will be used through the official WhatsApp contact. The team will identify the first documents and likely participation structure. Do not send unnecessary sensitive identity material until the team confirms what is required for the review.']
]

export const metadata = {
  title:{absolute:'Online Nikah Services Pakistan | Online Nikah for Overseas Couples'},
  description:'Online Nikah services in Pakistan for local and overseas couples: remote ceremony coordination, legal guidance, documents and registration assistance.',
  alternates:{canonical:'/'},
  openGraph:{
    title:'Online Nikah Services Pakistan | Online Nikah for Overseas Couples',
    description:'Pakistan-based Online Nikah guidance, ceremony coordination, documents and registration assistance for couples in Pakistan and abroad.',
    url:'/',
    type:'website'
  }
}

export default function Page(){
  return <Layout><main>
    <nav className="breadcrumb" aria-label="Breadcrumb"><span>Home</span></nav>

    <Hero
      eyebrow="REMOTE MUSLIM MARRIAGE SUPPORT / PAKISTAN"
      title="Online Nikah Services in Pakistan for Local and Overseas Couples"
      image="/hero-dulha-dulhan.png"
      imageAlt="Muslim couple discussing Online Nikah documents with Pakistan-based ceremony support"
      actions={<><CTA href={whatsappLink('Hello, I would like an Online Nikah assessment.')} children="Request an Online Nikah Assessment" /><CTA href="#procedure" outline children="Read the Procedure" /></>}
    >
      <p>Online Nikah Services helps couples plan a remote Nikah with the legal and documentary questions visible from the beginning. We review both parties’ locations, identity, marital status, free consent, witnesses, Mahr, participation structure and the purpose for which the final marriage documents will be used.</p>
      <p>The service is Pakistan-based and supports couples inside Pakistan as well as overseas. A religious ceremony, statutory marriage registration and foreign recognition are treated as connected but separate stages. That distinction is important for couples who later need a marriage certificate, embassy attestation, immigration evidence or spouse-visa documentation.</p>
    </Hero>

    <section id="procedure" className="content-section split-section">
      <div>
        <p className="eyebrow">E-E-A-T / FIRST REVIEW</p>
        <h2>Online Nikah Guidance by Pakistan-Based Family Law Professionals</h2>
        <h3>Online Nikah Procedure, Documents and Registration Explained Before the Ceremony</h3>
      </div>
      <div className="prose">
        <p>A serious Online Nikah service begins before the video call. The first task is to establish who the parties are, whether each person is legally and religiously free to marry, whether consent is voluntary, how witnesses will participate and whether any representative authority is needed. Only after those points are workable should the ceremony date become the centre of the discussion.</p>
        <p>The same review also protects the later paperwork. Names, CNIC or passport details, Mahr instructions, witness particulars and any authority document should be consistent before the Nikah Nama is completed. Where a party has previously been married, the relevant divorce, dissolution or death record should be checked instead of relying only on an oral statement.</p>
        <p>Our role is not to promise that one remote ceremony automatically solves every civil, immigration or foreign-recognition question. The legal team coordinates the Pakistan-side process and identifies which later questions belong to a Union Council, Nikah Registrar, embassy, immigration authority, civil registry or other receiving institution.</p>
        <CTA href={whatsappLink('Hello, please review my Online Nikah requirements before I fix a date.')} children="Discuss Your Requirements" />
      </div>
    </section>

    <SupportingImages/>

    <section className="process-section">
      <div className="section-title">
        <p className="eyebrow">01 / ONLINE NIKAH PROCESS</p>
        <h2>From Initial Review to Nikah and Registration</h2>
        <p className="section-lead">The process is designed to separate ceremony planning from official registration and later document use so that the couple knows what each stage is intended to achieve.</p>
      </div>
      <div className="process-grid">
        <div className="process-item"><span>01</span><h3>Identity and Eligibility Review</h3><p>We review both parties’ locations, identity documents, nationality, marital status and any prior-marriage record that affects eligibility.</p></div>
        <div className="process-item"><span>02</span><h3>Consent, Witnesses and Mahr</h3><p>Free consent, witness participation and Mahr instructions are settled before the Nikah Nama is finalised.</p></div>
        <div className="process-item"><span>03</span><h3>Remote Ceremony Coordination</h3><p>The agreed participation method, timing and any representative role are coordinated around the reviewed facts.</p></div>
        <div className="process-item"><span>04</span><h3>Marriage Registration and Documents</h3><p>Where included, Pakistan registration is handled separately and later translation, attestation or foreign-use questions are identified.</p></div>
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">02 / REQUIRED INFORMATION</p><h2>Documents Commonly Needed for Online Nikah</h2></div>
      <div className="prose">
        <p>The exact checklist depends on the couple, but an initial Online Nikah review usually needs the full names of both parties, current countries and cities, nationality, CNIC, NICOP or passport particulars, current marital status and a proposed ceremony date. Witness information and Mahr instructions should also be considered early because they form part of the marriage record.</p>
        <p>If either person has been married before, the legal team may need to review the record showing how that marriage ended. If one person will act through an attorney or proxy, the authority document should identify the permitted acts clearly. Overseas execution may involve notarisation, consular attestation or another formal step depending on the document and location.</p>
        <p>Couples should avoid sending large bundles of sensitive documents before the first review. The better approach is to explain the facts, receive a targeted checklist and then provide only the material actually needed for the agreed scope.</p>
      </div>
    </section>

    <section className="intro-band">
      <div>
        <p className="eyebrow">03 / LEGAL DISTINCTIONS</p>
        <h2>Nikah, Marriage Registration and Overseas Recognition Are Different Questions</h2>
      </div>
      <div>
        <h3>A Remote Ceremony Does Not Remove the Later Legal Steps</h3>
        <p>A Nikah is the Muslim marriage contract and ceremony. The Nikah Nama records that contract. A computerised marriage certificate is a separate civil registration record. Translation, authentication, attestation and recognition by a foreign authority are additional stages. An Online Nikah service should explain these differences rather than bundle them into one guarantee.</p>
      </div>
    </section>

    <section className="content-section split-section">
      <div><p className="eyebrow">04 / PROFESSIONAL FEE</p><h2>Online Nikah Service Fee and Payment Structure</h2></div>
      <div className="prose">
        <p>The usual professional service fee is PKR 40,000–60,000, depending on the agreed scope, locations, document work and registration requirements. The normal payment structure is 50% advance and the remaining 50% after Nikah and registration, subject to the written scope for the matter.</p>
        <p>Mahr is not part of the professional fee. Government charges, courier costs, certified translation, authentication, attestation and other third-party expenses are also separate unless the written quotation expressly includes them. Clear separation of these amounts makes it easier for the couple to understand what the professional fee covers and what depends on an outside authority or service provider.</p>
      </div>
    </section>

    <PractitionerPanel/>

    <section id="countries" className="country-section">
      <div className="section-title">
        <p className="eyebrow">05 / COUNTRY GUIDES</p>
        <h2>Online Nikah Guidance for Couples Living Abroad</h2>
        <p className="section-lead">Country pages preserve their own search intent and explain the distinction between a Pakistan-side Online Nikah and the separate recognition or document-use questions in the place where the couple lives.</p>
      </div>
      <CountryGrid />
    </section>

    <section className="city-section">
      <div className="section-title">
        <p className="eyebrow">06 / PAKISTAN CITY PAGES</p>
        <h2>Online Nikah Services in Major Pakistani Cities</h2>
        <p className="section-lead">City pages are separate targets so Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Hyderabad and the protected Rahim Yar Khan legacy intent do not compete through one multi-city URL.</p>
      </div>
      <div className="city-grid">
        {Object.entries(cityData).map(([slug,data]) => <article key={slug}><div><span className="city-pin">{data.name.slice(0,1)}</span><h3>{data.name}</h3></div><p>{data.intro}</p><a href={data.path}>Online Nikah in {data.name} <span>↗</span></a></article>)}
      </div>
    </section>

    <OfficePanel/>

    <section className="content-section split-section">
      <div><p className="eyebrow">07 / INTERNAL GUIDES</p><h2>Focused Online Nikah Guides Without Keyword Cannibalisation</h2></div>
      <div className="prose">
        <p>The homepage is the primary broad-intent page for <strong>Online Nikah</strong>. The Pakistan page targets <strong>Online Nikah in Pakistan</strong>, country pages target overseas locations and city pages target local service intent. Narrow informational questions are handled through focused guides instead of creating multiple pages that all chase the same generic keyword.</p>
        <p><a className="text-link" href="/online-nikah-in-islam-a-comprehensive-guide-to-e-nikkah-online/">Is Online Nikah Valid in Islam? <span>↗</span></a></p>
        <p><a className="text-link" href="/online-nikah-service-in-pakistan-urdu/">CNIC, Registration and Online Nikah Verification in Pakistan <span>↗</span></a></p>
        <p><a className="text-link" href="/nikah-khawan-service-overview-a-comprehensive-guide/">Nikah Khawan Role and Registration Guide <span>↗</span></a></p>
        <p><a className="text-link" href="/nadra-marriage-certificate-authenticity-guide/">Marriage Certificate Verification Guide <span>↗</span></a></p>
      </div>
    </section>

    <section className="content-section faq-section">
      <div className="section-title">
        <p className="eyebrow">08 / FAQ</p>
        <h2>Online Nikah Questions Before You Start</h2>
        <p className="section-lead">These answers explain the service at a general level. The facts of the couple’s own matter still need review before a ceremony or document route is confirmed.</p>
      </div>
      <FAQ items={faqs} />
    </section>

    <section className="cta-band">
      <p className="eyebrow">START WITH THE FACTS</p>
      <h2>Request an Online Nikah Assessment</h2>
      <p>Send both parties’ locations, nationality, marital status, preferred date and intended document use. The team will identify the first checklist and practical route.</p>
      <CTA href={whatsappLink('Hello, I would like an Online Nikah assessment. Both parties are located in: ')} children="Start on WhatsApp" />
    </section>

    <PageJsonLd
      breadcrumb={[['Home','/']]}
      service="Online Nikah Services"
      faq={faqs}
      path="/"
      title="Online Nikah Services in Pakistan for Local and Overseas Couples"
      description="Pakistan-based Online Nikah services for local and overseas couples, including ceremony coordination, documents and registration assistance."
      areaServed="Worldwide"
    />
  </main></Layout>
}
