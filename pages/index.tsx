import Head from 'next/head';
import Layout from '../components/layout/Layout'
import Showcase from '../components/custom/Showcase';
import { DEFAULT_TITLE } from '../config';

import { getPageBySlug } from '../lib/api';

interface PageData {
  /* Define the structure of your API response data */
}

interface HomeProps {
  homeCardsData: PageData[];
}

export async function getStaticProps(): Promise<{ props: HomeProps }> {
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

export default function Home({ homeCardsData }: HomeProps): JSX.Element {
  return <Layout>
    <Head>
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content="Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." />
    </Head>
    <Showcase
      location="home"
      backgroundImage={{
        node: {
          sourceUrl: "/building--blue.jpg",
          altText: "Delavan Studios building",
          mediaDetails: {
            width: 1920,
            height: 1280
          }
        }
       
      }}
      homeCardsData={homeCardsData}
    />
  </Layout>
}
