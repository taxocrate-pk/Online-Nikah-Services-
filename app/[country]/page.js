import { notFound } from 'next/navigation'
import {
  CountryPage,
  CityPage,
  GuidePage,
  countryData,
  cityData,
  cityRouteMap,
  guideData,
  makeMetadata,
  PageJsonLd,
  countryFaq,
  cityFaq,
  guideFaq
} from '../layout'

export function generateStaticParams() {
  return [
    ...Object.keys(countryData),
    ...Object.keys(cityRouteMap),
    ...Object.keys(guideData)
  ].map(country => ({ country }))
}

export async function generateMetadata({ params }) {
  const { country: slug } = await params

  if (countryData[slug]) {
    const data = countryData[slug]
    return makeMetadata(
      `Online Nikah ${data.seoName || data.name} | Online Nikah Services`,
      data.intro,
      `/${slug}/`
    )
  }

  if (cityRouteMap[slug]) {
    const data = cityData[cityRouteMap[slug]]
    return makeMetadata(
      `Online Nikah in ${data.name} | Online Nikah Services`,
      `Online Nikah in ${data.name} with remote ceremony coordination, document review, witnesses, Mahr guidance and Pakistan registration assistance.`,
      `/${slug}/`
    )
  }

  if (guideData[slug]) {
    const data = guideData[slug]
    return makeMetadata(data.metaTitle, data.description, `/${slug}/`)
  }

  return {}
}

export default async function Page({ params }) {
  const { country: slug } = await params

  if (countryData[slug]) {
    const data = countryData[slug]
    const path = `/${slug}/`
    const faq = countryFaq(data.name)
    return <>
      <CountryPage data={data} />
      <PageJsonLd
        breadcrumb={[['Home','/'],[data.name,path]]}
        service={`Online Nikah in ${data.name}`}
        faq={faq}
        path={path}
        title={`Online Nikah in ${data.name}`}
        description={data.intro}
        areaServed={data.name}
      />
    </>
  }

  if (cityRouteMap[slug]) {
    const data = cityData[cityRouteMap[slug]]
    const path = `/${slug}/`
    const faq = cityFaq(data.name)
    return <>
      <CityPage data={data} slug={slug} />
      <PageJsonLd
        breadcrumb={[['Home','/'],['Pakistan','/pakistan/'],[data.name,path]]}
        service={`Online Nikah in ${data.name}`}
        faq={faq}
        path={path}
        title={`Online Nikah in ${data.name}`}
        description={data.intro}
        areaServed={`${data.name}, Pakistan`}
      />
    </>
  }

  if (guideData[slug]) {
    const data = guideData[slug]
    const path = `/${slug}/`
    const faq = guideFaq(data.title)
    return <>
      <GuidePage data={data} slug={slug} />
      <PageJsonLd
        breadcrumb={[['Home','/'],['Guides','/blogs/'],[data.title,path]]}
        faq={faq}
        path={path}
        title={data.title}
        description={data.description}
        article
      />
    </>
  }

  notFound()
}
