
import Layout from '../components/Layout'
import Showcase from '../components/Showcase';

import {getHomeCards} from '../lib/api';

export async function getStaticProps() {
  const homeCardsData = await getHomeCards();
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
