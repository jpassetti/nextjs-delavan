import Head from "next/head";
import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from "../../components/Grid";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Showcase from "../../components/Showcase";
import { getAllCreatives, getAllCreativeTypes, getPageBySlug } from "../../lib/api";

export async function getStaticProps() {
	// Fetch necessary data for the blog post using params.id
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
    const [displayFormat, setDisplayFormat] = useState('grid');
    const filteredCreatives = creativesData;
    const {title, content, excerpt, featuredImage} = pageData;
  
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title={title}
            introduction={excerpt}
            backgroundImage={featuredImage?.node?.sourceUrl} 
        />
        <Container>
          <Filters 
               categories={creativeTypesData}
                //changeCategory={setActiveCategory}
                displayFormat={displayFormat} 
                displayFormatClickHandler={setDisplayFormat} 
            />
            {displayFormat === 'grid' ? 
                <Grid data={filteredCreatives} parentSlug="creatives" />
            : displayFormat === 'list' ?
                <List data={filteredCreatives} parentSlug="creatives" />
            : 'No format'
            }
        </Container>
    </Layout>
}
export default CreativesLandingPage;