import Head from "next/head";
import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from "../../components/Grid";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Showcase from "../../components/Showcase";
import { getAllCreatives, getAllCreativeTypes } from "../../lib/api";

export async function getStaticProps() {
	// Fetch necessary data for the blog post using params.id
	const creativesData = await getAllCreatives();
    const creativeTypesData = await getAllCreativeTypes();
	return {
		props: {
			creativesData,
            creativeTypesData
		},
		revalidate: 86400, // In seconds
	}
}

const CreativesLandingPage = ({creativesData, creativeTypesData}) => {
    const [displayFormat, setDisplayFormat] = useState('grid');
   // const [activeCategory, setActiveCategory] = useState(1);
    //const [searchTerm, setSearchTerm] = useState('');

    const filteredCreatives = creativesData;
   /*const filteredCreatives = creativesData.filter(creative => {
        if (creative.categories.includes(activeCategory)) {
            return true;
        } else {
            return false;
        }
    });*/
    return <Layout>
        <Head>
            <title>Creatives | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="Creatives" 
            introduction="This is the introduction to the creatives landing page"
            backgroundImage="https://picsum.photos/id/100/600/400"
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