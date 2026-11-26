import { Layout, Hero, CTA, FAQ, PageJsonLd, jsonLd, whatsappLink } from '../app/layout'

const SITE = 'https://www.onlinenikahservices.com'

export function guideMetadata({ title, description, path }) {
  return { title: { absolute: title }, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: 'article' } }
}

export function Section({ n, eyebrow, title, children }) {
  return <section className="content-section split-section guide-section"><div><p className="eyebrow">{n} / {eyebrow}</p><h2>{title}</h2></div><div className="prose">{children}</div></section>
}

export function GuidePage({ path, crumb, eyebrow, h1, headline, description, image, imageAlt, lead, intro, faq, waMessage, children }) {
  const article = { '@context': 'https://schema.org', '@type': 'Article', headline, description, mainEntityOfPage: `${SITE}${path}`, url: `${SITE}${path}`, datePublished: '2026-11-26', dateModified: '2026-11-26', inLanguage: 'en', author: { '@type': 'Organization', name: 'Online Nikah Services', url: SITE }, publisher: { '@id': `${SITE}/#organization` }, image: `${SITE}${image}` }
  return <Layout><main>
    <nav className="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><a href="/blogs/">Guides</a><span aria-hidden="true">›</span><span>{crumb}</span></nav>
    <Hero eyebrow={eyebrow} title={h1} image={image} imageAlt={imageAlt} actions={<><CTA href={whatsappLink(waMessage)} children="Ask on WhatsApp" /><CTA href="#guide" outline children="Read the guide" /></>}><p>{lead}</p></Hero>
    <section className="intro-band" id="guide"><div><p className="eyebrow">In short</p><h2>{intro[0]}</h2></div><p>{intro[1]}</p></section>
    {children}
    <section className="content-section faq-section"><div className="section-title"><p className="eyebrow">Questions</p><h2>Questions people ask.</h2></div><FAQ items={faq} /></section>
    <section className="cta-band"><p className="eyebrow">Next step</p><h2>Ask Us About Your Own Case.</h2><p>Send your city or country and a short outline on WhatsApp. We reply with the steps that apply and our fees in writing.</p><CTA href={whatsappLink(waMessage)} children="Ask on WhatsApp" /></section>
  </main>
  <PageJsonLd breadcrumb={[['Home', '/'], ['Guides', '/blogs/'], [crumb, path]]} faq={faq} />{jsonLd(article)}
  </Layout>
}
