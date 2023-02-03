
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
      <Showcase 
      location="home"
      backgroundImage="building--blue.jpg"
      homeCardsData={homeCardsData}
      />
  </Layout>
}
