import Head from "next/head";
import Items from "../../components/Items";
import ItemsByType from '../../components/ItemsByType'
import Layout from "../../components/Layout";
import Showcase from '../../components/Showcase';
import { getAllCreatives, getAllCreativeTypes, getAllCreativesByType, getPageBySlug } from "../../lib/api";

export async function getStaticProps() {
    const pageData = await getPageBySlug("creatives-page");
	const creativesData = await getAllCreatives();
    const creativeTypes = await getAllCreativeTypes();
   // const creativesByTypeData = await getAllCreativesByType();
   // const creativeTypesData = await getAllCreativeTypes();
    
	return {
		props: {
            pageData,
           creativesData,
           creativeTypes
           // creativeTypesData,
          // creativesByTypeData,
		},
		revalidate: 86400, // In seconds
	}
}

const CreativesLandingPage = ({
    pageData,
    creativesData, 
    creativeTypes,
    //creativeTypesData, 
    //creativesByTypeData, 
   
}) => {
   const {title, excerpt, featuredImage} = pageData;
    
  

    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            slug="creatives"
            //title={title}
            introduction={excerpt}
            //introduction={"This is a test of the creatives page."}
            backgroundImage={featuredImage?.node?.sourceUrl} 
        />
       
       <ItemsByType 
            items={creativesData}
            categories={creativeTypes}  
            includeFilters={true}
            includeSearch={true}
            displayFormats={['grid', 'list']}
        />
    </Layout>
}
export default CreativesLandingPage;