import { GuidePage, Section, guideMetadata } from '../../components/GuidePage'

const path = '/online-nikah-in-islam/'
const title = 'Online Nikah in Islam – Conditions, Wakeel and Video Nikah Views'
const description = 'The Islamic conditions of a nikah (ijab and qabul, witnesses, wali, mahr), how schools of thought differ on video and proxy nikah, and how a nikah is registered in Pakistan under the MFLO 1961.'

export const metadata = guideMetadata({ title, description, path })

const faq = [
  ['Is an online nikah valid in Islam?', 'It depends on how it is done. Scholars broadly accept a nikah where an absent party appoints a wakeel who accepts on their behalf in front of witnesses. Whether offer and acceptance exchanged only over a live video call is enough is a question on which scholars and schools of thought differ.'],
  ['What are the basic conditions of a nikah?', 'Most schools of thought list the free consent of both parties, a clear offer and acceptance (ijab and qabul), witnesses who hear it, and mahr. Several schools also require the bride’s wali. Details differ between schools, so families often follow the school they belong to.'],
  ['Why do many families choose the wakeel route?', 'Appointing a wakeel (agent) is a long-established practice in Islamic law and is widely accepted across schools of thought. The wakeel sits with the other party and the witnesses, so the offer and acceptance take place in one sitting. The Pakistani nikah nama also has entries for a wakeel.'],
  ['Do the witnesses have to be in the same place?', 'Where a wakeel is used, the witnesses attend the sitting where the wakeel and the other party exchange offer and acceptance. Witnesses to the wakeel’s appointment are also recorded. Whether witnesses following a video call can fulfil the role is one of the points scholars differ on.'],
  ['Is a wali required for the bride?', 'Schools of thought differ. Several schools treat the wali as a condition. The Hanafi school holds that an adult woman can contract her own nikah. Pakistani courts follow the position that an adult woman’s nikah with her free consent is valid. Many families still involve the wali.'],
  ['Does an Islamic nikah also need registration in Pakistan?', 'Yes. Section 5 of the Muslim Family Laws Ordinance 1961 requires every Muslim marriage in Pakistan to be registered with a Nikah Registrar licensed by the Union Council. After registration, the Union Council can issue a NADRA marriage registration certificate.'],
  ['Do you give religious rulings?', 'No. We are a legal-services team. We explain the views that exist and the Pakistani legal procedure. For a ruling on your own situation, please consult a scholar you trust.'],
]

export default function Page() {
  return <GuidePage
    path={path}
    crumb="Online nikah in Islam"
    eyebrow="NIKAH IN ISLAM"
    h1="Online Nikah in Islam: Conditions and Views"
    headline="Online Nikah in Islam: Conditions, Wakeel and How Scholars View Video Nikah"
    description={description}
    image="/support-signing.png"
    imageAlt="Hands signing a Nikah document with a fountain pen"
    lead="What makes a nikah complete in Islam, how scholars differ on video and proxy nikah, and how the marriage is then registered under Pakistani law."
    intro={['The Ceremony Follows Islamic Conditions; Registration Follows Pakistani Law.', 'An online nikah is not a separate kind of marriage. It is a nikah in which one or both parties cannot be present, so the question is how the usual conditions are met at a distance. This guide sets out those conditions, the views of scholars on remote arrangements, and the legal registration that follows in Pakistan.']}
    faq={faq}
    waMessage="Hello, I would like to ask about arranging a nikah with a wakeel."
  >
    <Section n="01" eyebrow="Our approach" title="We Explain the Views; We Do Not Issue Rulings.">
      <p>We are a legal-services team, not a religious authority. Where this page describes Islamic conditions or differences between schools, it reports what scholars and schools of thought hold. It is not our own religious opinion, and it is not a fatwa.</p>
      <p>If your family follows a particular scholar or institution, ask them before the date is fixed. Tell us their guidance and we will arrange the ceremony and the paperwork around it.</p>
    </Section>

    <Section n="02" eyebrow="Conditions" title="The Essential Conditions of a Nikah">
      <p>Scholars set out the essentials of a nikah in slightly different ways, but most discussions cover the same core elements, whether the nikah is held in person or as an online nikah.</p>
      <h3>Free consent of both parties</h3>
      <p>Neither the bride nor the groom can be married against their will. Consent must be real, informed and freely given. A wakeel or a family member can convey consent; they cannot replace it.</p>
      <h3>Ijab and qabul (offer and acceptance)</h3>
      <p>One side makes a clear offer of marriage and the other accepts it in clear words. Most schools require this to happen in a single sitting (majlis), so that the acceptance plainly answers the offer. That requirement is at the centre of the debate about video nikah.</p>
      <h3>Witnesses</h3>
      <p>The offer and acceptance must be witnessed. In the Hanafi school, which most Muslims in Pakistan follow, this means two adult Muslim witnesses: two men, or one man and two women, who hear and understand the exchange. Other schools set their own conditions for witnesses.</p>
      <h3>The wali (guardian)</h3>
      <p>Schools differ here. In the Shafi‘i, Maliki and Hanbali schools, the bride’s wali is generally treated as a condition of the nikah. The Hanafi school holds that an adult woman of sound mind may contract her own nikah, while recognising the wali’s role and the value of family involvement. Under any view, the bride’s own consent remains essential.</p>
      <h3>Mahr (dower)</h3>
      <p>Mahr is the bride’s right, paid by the groom. It can be prompt (payable on demand) or deferred, or partly each. Scholars hold that the obligation exists even if no amount is stated, but agreeing and recording it avoids later disputes. Mahr is the wife’s property. It is not a fee for the ceremony.</p>
    </Section>

    <Section n="03" eyebrow="Remote options" title="Video Nikah and Proxy Nikah: How Scholars Differ">
      <p>When the bride or groom cannot attend, there are broadly two ways people try to complete an online nikah. Scholars view them differently.</p>
      <h3>Nikah through a wakeel (proxy)</h3>
      <p>Appointing an agent (wakalah) to accept a marriage on someone’s behalf is long established in Islamic law and is recognised across the major schools of thought. The absent party appoints a trusted person in writing. The wakeel then attends the sitting with the other party, or their wakeel, and the witnesses, and accepts the offer on the principal’s instructions. Because the offer, acceptance and witnesses are all in one place, the single-sitting condition is met in the ordinary way.</p>
      <h3>Offer and acceptance over a live video call</h3>
      <p>Here the parties exchange ijab and qabul directly over video, with witnesses following the call. Scholars and fatwa bodies differ:</p>
      <ul>
        <li>Some scholars hold that a live video call does not amount to a single sitting, or does not allow the witnesses to be present in the required sense, and so advise against relying on it.</li>
        <li>Other scholars accept it where both parties and the witnesses can clearly see and hear each other at the same time, identities are certain and there is no risk of deception, sometimes only where a wakeel is not practical.</li>
        <li>Many advise that, even where a video exchange is considered acceptable, appointing a wakeel is the safer course because it avoids the disagreement.</li>
      </ul>
      <h3>The commonly accepted route</h3>
      <p>Because it is recognised across schools of thought and fits the Pakistani nikah nama, the wakeel route is the approach we recommend in practice for an online nikah. The absent party signs a vakalatnama (a written appointment of the wakeel), usually attested if signed abroad. Family members who cannot travel can still watch the ceremony on video. The video is then for the family; it is not the means by which consent is given.</p>
    </Section>

    <Section n="04" eyebrow="Pakistani law" title="Registering the Nikah in Pakistan">
      <p>An Islamic nikah performed in Pakistan must also be registered. The law treats the ceremony and the registration as connected but separate steps.</p>
      <ul>
        <li><strong>Muslim Family Laws Ordinance 1961, section 5.</strong> Every Muslim marriage must be registered by a Nikah Registrar licensed by the Union Council, on the prescribed nikah nama. Failure to register is an offence, although it does not by itself make the nikah void.</li>
        <li><strong>Union Council.</strong> The registrar lodges the nikah nama with the Union Council, which keeps the record.</li>
        <li><strong>NADRA MRC.</strong> The Union Council enters the marriage in NADRA’s system and can then issue a computerised marriage registration certificate (MRC), which NADRA offices, embassies and immigration authorities commonly ask for.</li>
        <li><strong>Section 6.</strong> A man who is already married needs the prior written permission of the Arbitration Council before another nikah.</li>
        <li><strong>Minimum age.</strong> The minimum age of marriage is 18 in Sindh (2013), ICT (2025) and Punjab (2026).</li>
      </ul>
      <p>The nikah nama records the wakeel appointed by the bride or groom and the witnesses to that appointment, so a nikah through a wakeel is registered in the same way as one where both parties attend. Check every entry against the CNICs before anyone signs: names, parentage, mahr, the delegated right of divorce and marital status.</p>
    </Section>

    <Section n="05" eyebrow="Practical steps" title="Planning an Online Nikah With Care">
      <ol>
        <li>Agree within the family which scholar’s guidance you will follow on the wali and on remote arrangements.</li>
        <li>Confirm both parties’ eligibility: age, marital status and any previous divorce documents.</li>
        <li>Prepare the vakalatnama for the absent party and arrange attestation where it is signed abroad.</li>
        <li>Choose the wakeel and witnesses, and agree the mahr and any conditions to be written in the nikah nama.</li>
        <li>Hold the nikah before the Nikah Registrar, with family joining by video if they wish.</li>
        <li>Make sure the nikah nama is lodged with the Union Council and ask for the NADRA MRC.</li>
      </ol>
      <p>We can help with the vakalatnama, the registrar, the nikah nama review and the registration. Fees vary with the city and the documents involved; ask on WhatsApp.</p>
    </Section>
  </GuidePage>
}
