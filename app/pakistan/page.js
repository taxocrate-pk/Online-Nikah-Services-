import { CountryPage, makeMetadata, PageJsonLd, pakistanFaq } from '../layout'
export const metadata=makeMetadata('Online Nikah in Pakistan','Online Nikah guidance for couples arranging a remote ceremony, document review, witnesses, Mehr and registration assistance in Pakistan.','/pakistan/')
export default function Page(){return <><CountryPage isPakistan data={{name:'Pakistan'}}/><PageJsonLd breadcrumb={[["Home","/"],["Pakistan","/pakistan/"]]} service="Online Nikah in Pakistan" faq={pakistanFaq}/></>}
