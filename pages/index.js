import Head from 'next/head';
import Layout from '../components/Layout'
import Showcase from '../components/Showcase';
import { DEFAULT_TITLE } from '../config';

import { getPageBySlug } from '../lib/api';

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
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content="Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." />
    </Head>
    <Showcase
      location="home"
      backgroundImage={{
        sourceUrl: "/building--blue.jpg",
        altText: "Delavan Studios building",
        mediaDetails: {
          width: 1920,
          height: 1280
        }
      }}
      homeCardsData={homeCardsData}
    />
  </Layout>
}
