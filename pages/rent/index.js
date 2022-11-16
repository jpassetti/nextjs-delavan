import { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Showcase from "../../components/Showcase";
import Space from "../../components/Space";
import Slider from "../../components/Slider";
import Container from "../../components/Container";

import { getSpaces } from "../../lib/api";

export async function getStaticProps(context) {
    const spacesData = await getSpaces();
    return {
      props: {
        spacesData,
      }, // will be passed to the page component as props
    }
  }

const RentLandingPage = ({spacesData}) => {
    const [activeSpace, setActiveSpace] = useState(0);
    return <Layout>
         <Head>
            <title>Rent | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="Rent" 
            introduction="This is the introduction to the rent landing page"
            backgroundImage="https://picsum.photos/id/101/600/400"
        />
        <Container>
        <Space space={spacesData[activeSpace]} />
        <Slider small items={spacesData} clickHandler={setActiveSpace} activeSpace={activeSpace} />
        </Container>
    </Layout>
}
export default RentLandingPage;