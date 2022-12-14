import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import Space from "../../components/Space";
import Slider from "../../components/Slider";
import Container from "../../components/Container";

import { getSpaces, getPageBySlug } from "../../lib/api";

export async function getStaticProps() {
    const spacesData = await getSpaces();
    const pageData = await getPageBySlug("rent");
    return {
      props: {
        spacesData,
        pageData
      }, // will be passed to the page component as props
    }
  }

const RentLandingPage = ({spacesData, pageData}) => {
    const [activeSpace, setActiveSpace] = useState(0);
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
        <Space space={spacesData[activeSpace]} />
        <Slider small items={spacesData} clickHandler={setActiveSpace} activeSpace={activeSpace} />
        </Container>
    </Layout>
}
export default RentLandingPage;