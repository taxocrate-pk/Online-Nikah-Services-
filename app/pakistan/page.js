import { CountryPage, makeMetadata, PageJsonLd, pakistanFaq } from '../layout'

export const metadata = makeMetadata(
  'Online Nikah in Pakistan | Online Nikah Services',
  'Online Nikah in Pakistan for local and overseas couples: remote ceremony coordination, witnesses, documents, Mahr and registration assistance.',
  '/pakistan/'
)

export default function Page(){
  return <>
    <CountryPage isPakistan data={{name:'Pakistan'}}/>
    <PageJsonLd
      breadcrumb={[['Home','/'],['Pakistan','/pakistan/']]}
      service="Online Nikah in Pakistan"
      faq={pakistanFaq}
      path="/pakistan/"
      title="Online Nikah in Pakistan for Local and Overseas Couples"
      description="Pakistan-based Online Nikah service with ceremony coordination, witnesses, documents and marriage registration assistance."
      areaServed="Pakistan"
    />
  </>
}
