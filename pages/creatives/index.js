import Head from "next/head";
import Items from "../../components/Items";
import Layout from "../../components/Layout";
import Showcase from '../../components/Showcase';
import { getAllCreatives, getAllCreativeTypes, getPageBySlug } from "../../lib/api";

export async function getStaticProps() {
	const creativesData = await getAllCreatives();
    const creativeTypesData = await getAllCreativeTypes();
    const pageData = await getPageBySlug("creatives-page");
	return {
		props: {
            creativesData,
            creativeTypesData,
            pageData
		},
		revalidate: 86400, // In seconds
	}
}

const CreativesLandingPage = ({creativesData, creativeTypesData, pageData}) => {
    const {title, excerpt, featuredImage} = pageData;
    
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            introduction={excerpt}
            backgroundImage={featuredImage?.node?.sourceUrl} 
        />
        <Items 
          items={creativesData}
          categories={creativeTypesData}  
          includeFilters={true}
          includeSearch={true}
          displayFormats={['grid', 'list']}
        />
    </Layout>
}
export default CreativesLandingPage;