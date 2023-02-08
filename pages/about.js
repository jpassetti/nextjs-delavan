import Head from "next/head";
import Col from "../components/Col";
import Layout from "../components/Layout";
import Showcase from "../components/Showcase";
import Container from "../components/Container";
import Timeline from '../components/Timeline';

import { getTimelineItems } from "../lib/api";
import Paragraph from "../components/Paragraph";
import Row from "../components/Row";
import Section from "../components/Section";

export async function getStaticProps(context) {
    const timelineData = await getTimelineItems();
    return {
      props: {
        timelineData
      }, // will be passed to the page component as props
    }
  }

const AboutPage = ({ timelineData }) => {
    
    return <Layout>
        <Head>
            <title>About | Delavan Studios | Syracuse, NY</title>
        </Head>
        <Showcase 
            title="About" 
            introduction="This is the introduction to the about landing page"
            backgroundImage="/images/building.jpg"
        />
        <Container> 
        <Section>
            <Row justifyContent="center">
                <Col xs="12" sm="10" md="8">
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus est nisl, ac suscipit diam blandit vitae. Mauris sodales tellus ut purus posuere, ac auctor ex interdum. In viverra maximus sollicitudin. Cras a accumsan diam. Phasellus posuere ex purus, rutrum molestie sem ultricies et. Duis sit amet elit laoreet, molestie quam laoreet, imperdiet justo.</Paragraph>
            <Paragraph> Aenean sodales, enim sed eleifend mattis, ligula ex ultricies justo, ut hendrerit purus dui a ligula. Donec suscipit semper quam, sed tincidunt orci consectetur quis. Morbi mollis, risus a consequat maximus, quam tortor scelerisque purus, et congue augue sapien luctus orci. 
                </Paragraph>
                <Paragraph>Vivamus ipsum arcu, aliquam quis risus sed, lobortis mollis libero. Sed libero massa, malesuada sed ipsum id, tincidunt tempor tellus. Vestibulum eu mauris accumsan turpis volutpat consectetur eget non dui. Maecenas sit amet augue sed turpis congue sollicitudin eu sit amet metus. Fusce ornare dolor a nisl dictum, vitae feugiat erat varius.</Paragraph>
                </Col>
                </Row>
                </Section>
            <Timeline>
                {timelineData.map((item, index) => {
                    return <Timeline.Item key={index} item={item} />
                })}

            </Timeline>
        </Container>
    </Layout>
}
export default AboutPage;