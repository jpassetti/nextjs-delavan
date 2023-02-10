import Head from "next/head";
import Col from "../components/Col";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Timeline from '../components/Timeline';

import { getTimelineItems } from "../lib/api";
import MainContent from "../components/MainContent";
import Paragraph from "../components/Paragraph";
import Row from "../components/Row";
import Section from "../components/Section";

import { getPageBySlug } from "../lib/api";

export async function getStaticProps(context) {
    const timelineData = await getTimelineItems();
    const pageData = await getPageBySlug("about");
    return {
      props: {
        timelineData,
        pageData
      }, // will be passed to the page component as props
    }
  }

const AboutPage = ({ timelineData, pageData }) => {

    const {title, slug, content, excerpt, featuredImage} = pageData;
    
    return <Layout>
        <Head>
            <title>{title} | Delavan Studios | Syracuse, NY</title>
            <meta name="description" content={ excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." } />
        </Head>
        <Showcase 
            title={title} 
            introduction={excerpt}
            backgroundImage={featuredImage?.node.sourceUrl}
        />
        <Container> 
        <Section>
            <Row justifyContent="center">
                <Col xs="12" sm="10" md="8">
                {content && 
                    <MainContent content={content} />
                }
                </Col>
                </Row>
                </Section>
            {/*<Timeline>
                {timelineData.map((item, index) => {
                    return <Timeline.Item key={index} item={item} />
                })}

            </Timeline>*/}
        </Container>
    </Layout>
}
export default AboutPage;