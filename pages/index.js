import Head from 'next/head';
import Layout from '../components/Layout'
import Showcase from '../components/Showcase';

import {getHomeCards, getPageBySlug} from '../lib/api';

export async function getStaticProps() {
  const creativeCardData = await getPageBySlug("creatives");
  const rentCardData = await getPageBySlug("rent");
  const newsCardData = await getPageBySlug("news");
  const homeCardsData = [creativeCardData, rentCardData, newsCardData];
  return {
    props: {
      homeCardsData
    }, // will be passed to the page component as props
  }
}

export default function Home({
  homeCardsData
}) {
  return <Layout>
    <Head>
        <title>Delavan Studios | Syracuse, NY</title>
            <meta name="description" content="Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." />
    </Head>
      <Showcase 
      location="home"
      backgroundImage="building--blue.jpg"
      homeCardsData={homeCardsData}
      />
  </Layout>
}
