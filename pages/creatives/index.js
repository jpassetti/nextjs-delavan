import Head from "next/head";
import { useState } from "react";

import Container from "../../components/Container";
import Filters from "../../components/Filters";
import Grid from "../../components/Grid";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Showcase from "../../components/Showcase";
import { getCreatives, getCategories } from "../../lib/api";

export async function getStaticProps(context) {
    const creativesData = await getCreatives();
    const categoriesData = await getCategories();
    return {
      props: {
        creativesData,
        categoriesData
      }, // will be passed to the page component as props
    }
  }

const CreativesLandingPage = ({creativesData, categoriesData}) => {
    const [displayFormat, setDisplayFormat] = useState('grid');
    const [activeCategory, setActiveCategory] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCreatives = creativesData.filter(creative => {
        if (creative.categories.includes(activeCategory)) {
            return true;
        } else {
            return false;
        }
    });
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
                categories={categoriesData}
                changeCategory={setActiveCategory}
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