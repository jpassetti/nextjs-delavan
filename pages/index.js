
import Layout from '../components/Layout'
import Showcase from '../components/Showcase';

import {getFeaturedImageByPageSlug} from '../lib/api';

export async function getStaticProps() {
  const creativeCardData = await getFeaturedImageByPageSlug("creatives-page");
  const rentCardData = await getFeaturedImageByPageSlug("rent");
  const newsCardData = await getFeaturedImageByPageSlug("news");
  return {
    props: {
      creativeCardData,
      rentCardData,
      newsCardData
    }, // will be passed to the page component as props
  }
}

export default function Home({
  creativeCardData,
      rentCardData,
      newsCardData
}) {
  return <Layout>
      <Showcase 
      location="home"
      backgroundImage="building--blue.jpg"
      creativeCardData={creativeCardData}
      rentCardData={rentCardData}
      newsCardData={newsCardData}
      />
  </Layout>
}
