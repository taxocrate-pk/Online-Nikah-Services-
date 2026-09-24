import { notFound } from 'next/navigation'
import { CountryPage, countryData, makeMetadata, PageJsonLd, countryFaq } from '../layout'
export function generateStaticParams(){return Object.keys(countryData).map(country=>({country}))}
export async function generateMetadata({params}){const resolved=await params;const data=countryData[resolved.country];if(!data)return {};return makeMetadata(`Online Nikah in ${data.name}`,data.intro,`/${resolved.country}/`)}
export default async function Page({params}){const resolved=await params;const data=countryData[resolved.country];if(!data)notFound();return <><CountryPage data={data}/><PageJsonLd breadcrumb={[["Home","/"],[data.name,`/${resolved.country}/`]]} service={`Online Nikah guidance for ${data.name}`} faq={countryFaq(data.name)}/></>}
