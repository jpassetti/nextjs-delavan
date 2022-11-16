import Head from "next/head";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Timeline from '../components/Timeline';

import { getTimelineItems } from "../lib/api";

export async function getStaticProps(context) {
    const timelineData = await getTimelineItems();
    return {
      props: {
        timelineData
      }, // will be passed to the page component as props
    }
  }

const HistoryPage = ({ timelineData }) => {
    
    return <Layout>
        <Head>
            <title>History | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="History" 
            introduction="This is the introduction to the history landing page"
            backgroundImage="https://picsum.photos/600/400"
        />
        <Container> 
            <Timeline>
                {timelineData.map((item, index) => {
                    return <Timeline.Item key={index} item={item} />
                })}

            </Timeline>
        </Container>
    </Layout>
}
export default HistoryPage;