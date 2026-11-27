import { GuidePage, Section, guideMetadata } from '../../components/GuidePage'

const path = '/is-online-nikah-free/'
const title = 'Online Nikah Fee in Pakistan – Is Online Nikah Free?'
const description = 'Which parts of an online nikah in Pakistan can be free, which have fees (Nikah Registrar or nikah khawan, Union Council, NADRA MRC, attestation, professional fees), and why “free online nikah” offers that skip registration are risky.'

export const metadata = guideMetadata({ title, description, path })

const faq = [
  ['Is an online nikah free?', 'Some parts can be. Islam does not require any payment for the nikah itself, apart from the mahr owed to the bride, and family members can act as wakeel and witnesses without charge. Registration with the Nikah Registrar and Union Council, the NADRA certificate, document attestation and any professional help usually involve fees.'],
  ['Is mahr a fee?', 'No. Mahr is the bride’s right, paid by the groom to her. It is agreed between the spouses and written in the nikah nama. It is not a payment to the registrar, the nikah khawan or any service provider.'],
  ['Do your professional fees include registration and NADRA charges?', 'No. Our professional fees do not include the Nikah Registrar or Union Council registration charges or the NADRA MRC charges. Those are separate and are paid at actual cost. We list each item in writing before any work starts.'],
  ['How much does a nikah with registration cost?', 'Fees vary with the city, whether a wakeel and vakalatnama are needed, whether the vakalatnama is signed abroad, and which certificates and attestations you need. Ask on WhatsApp and we will send our fees, and the separate official charges that apply, in writing.'],
  ['Can I get the NADRA marriage certificate for free?', 'The MRC is issued by the Union Council from NADRA’s system, and charges are set by the issuing office. They can differ between Union Councils, so check with the office concerned or ask us.'],
  ['Are “free online nikah” websites safe?', 'Be careful. An offer that skips the Nikah Registrar and Union Council may leave you with no registered nikah nama and no NADRA record. Offers that ask for CNIC copies, photos or payment details with no named office or registrar can also lead to misuse of your documents.'],
  ['Can you promise the cheapest route?', 'No. We explain which steps your case needs and which it does not, so you are not paying for anything unnecessary. Official charges are set by the offices concerned.'],
]

export default function Page() {
  return <GuidePage
    path={path}
    crumb="Online nikah fee in Pakistan"
    eyebrow="FEES EXPLAINED"
    h1="Online Nikah Fee in Pakistan: Is It Free?"
    headline="Online Nikah Fee in Pakistan: Is Online Nikah Free, and What Has Fees?"
    description={description}
    image="/support-rings.webp"
    imageAlt="Simple wedding rings beside a Nikah document"
    lead="An honest breakdown of which parts of a nikah can be free, which steps involve fees, and why a “free online nikah” offer that skips registration can cost far more later."
    intro={['The Nikah Itself Can Be Simple. Registration and Documents Usually Have Fees.', 'Islam does not attach a fee to the nikah. But a nikah in Pakistan also has to be registered, and a couple who will use the marriage for a CNIC update, visa or family record needs proper documents. Those steps involve the registrar, the Union Council, NADRA and sometimes attestation offices, each with their own charges.']}
    faq={faq}
    waMessage="Hello, I would like to know the fees for an online nikah with registration."
  >
    <Section n="01" eyebrow="Free" title="What Can Genuinely Cost Nothing">
      <p>Many people search for a free nikah because they want a simple, modest ceremony. That is entirely reasonable, and several parts of a nikah need not cost anything:</p>
      <ul>
        <li><strong>The nikah as a religious contract.</strong> Islam does not require a payment to anyone for the offer and acceptance to take place.</li>
        <li><strong>The wakeel.</strong> A trusted relative or friend can act as wakeel for an absent bride or groom without charge.</li>
        <li><strong>The witnesses.</strong> Family members who meet the conditions can serve as witnesses.</li>
        <li><strong>A video link for family.</strong> Relatives abroad can watch the ceremony on an ordinary video call.</li>
        <li><strong>A simple ceremony.</strong> No hall, catering or event is needed for a valid nikah.</li>
      </ul>
      <p>Mahr is different. It is not a fee, but it is an obligation: the groom owes it to the bride, in the amount and on the terms the couple agree and record in the nikah nama.</p>
    </Section>

    <Section n="02" eyebrow="Fees" title="What Usually Has Fees">
      <p>The cost comes almost entirely from registration, documents and any help you choose to use. We do not publish figures, because charges differ between cities, Union Councils and missions abroad, and they change. Fees vary; ask on WhatsApp.</p>
      <p>When people ask about the online nikah fee in Pakistan, they usually mean the total of several separate items, listed below.</p>
      <h3>Nikah Registrar or nikah khawan</h3>
      <p>The Nikah Registrar is licensed by the Union Council to complete and register the nikah nama under section 5 of the Muslim Family Laws Ordinance 1961. Registrars, and nikah khawans who perform the ceremony, usually charge for their attendance and the registration. Some registrars also perform the nikah; sometimes a separate nikah khawan does.</p>
      <h3>Union Council registration</h3>
      <p>The Union Council records the nikah nama. Its charges are set locally.</p>
      <h3>NADRA marriage registration certificate (MRC)</h3>
      <p>Once the marriage is entered in NADRA’s system, the Union Council can issue the computerised MRC. Charges are set by the issuing office.</p>
      <h3>Vakalatnama and attestation</h3>
      <p>When the absent party signs a vakalatnama abroad, the Pakistani embassy or consulate usually needs to attest it. If the nikah nama or MRC will be used abroad, MOFA attestation and sometimes the foreign embassy’s own attestation follow. Translation and courier costs can also arise. Each office sets its own charges.</p>
      <h3>Our professional fees: what they cover</h3>
      <p>If you use us, our professional fees cover the work we do: checking eligibility and documents, drafting the vakalatnama, arranging the registrar and witnesses where needed, reviewing the nikah nama, and following up with the Union Council for the MRC.</p>
      <h3>What our professional fees exclude</h3>
      <p><strong>Our professional fees do not include the Nikah registration charges (Nikah Registrar and Union Council) or the NADRA MRC charges.</strong> Those are separate and are paid at actual cost. Attestation, translation and courier charges are also separate. We set out each item in writing before any work starts, so you can see what is our fee and what goes to an office.</p>
    </Section>

    <Section n="03" eyebrow="Be careful" title="The Problem With “Free Online Nikah” Offers">
      <p>Some websites and social media pages advertise a free online nikah, or a nikah “without any paperwork”. Before you rely on one, ask what is actually being offered.</p>
      <ul>
        <li><strong>No registration.</strong> If no licensed Nikah Registrar completes a nikah nama and lodges it with the Union Council, there will be no registered record and no NADRA MRC. Failing to register a nikah is an offence under section 5 of the Ordinance.</li>
        <li><strong>An unofficial certificate.</strong> A decorative “nikah certificate” printed by a website is not a nikah nama and is not issued by any Union Council or by NADRA.</li>
        <li><strong>A video call presented as the whole process.</strong> Scholars differ on a nikah done only over video, and a recording is not proof of a registered marriage.</li>
        <li><strong>Hidden charges later.</strong> A “free” start is sometimes followed by payments demanded for the “real” certificate.</li>
        <li><strong>Misuse of your documents.</strong> Be wary of anyone who asks for CNIC copies, photographs or payment details without a named office, registrar or Union Council.</li>
      </ul>
      <p>The consequences of an unregistered nikah usually appear later: when a wife applies to update her CNIC, when a spouse applies for a visa, when a child is registered, or when mahr, maintenance or inheritance is in question. Putting the registration right at that stage is usually slower and harder than registering at the time.</p>
    </Section>

    <Section n="04" eyebrow="Keeping it simple" title="How to Keep the Costs Down">
      <ul>
        <li>Use a family member as wakeel and family members as witnesses.</li>
        <li>Hold the nikah where the registrar is local, to avoid travel for the registrar or the wakeel.</li>
        <li>Prepare the CNICs, the vakalatnama and any divorce documents before the date, so nothing has to be repeated.</li>
        <li>Ask for the NADRA MRC at the same time as registration, rather than coming back for it later.</li>
        <li>Only arrange attestation for the documents a foreign authority will actually ask for.</li>
      </ul>
      <p>Whatever route you choose, keep the registration. A modest, registered nikah is far better than a free one that leaves no record.</p>
    </Section>

    <Section n="05" eyebrow="Before you decide" title="Questions to Ask Anyone Offering Help">
      <ol>
        <li>Which licensed Nikah Registrar and which Union Council will register the nikah?</li>
        <li>Will I receive a copy of the registered nikah nama and the NADRA MRC?</li>
        <li>Which fees are yours, and which are official charges paid at actual cost?</li>
        <li>How will the absent party’s wakeel be appointed and the vakalatnama attested?</li>
        <li>Who will check the nikah nama entries against our CNICs before signing?</li>
      </ol>
      <p>If you would like us to look at your case, send your city or country and whether a wakeel will be needed. Fees vary; ask on WhatsApp and we will reply in writing.</p>
    </Section>
  </GuidePage>
}
