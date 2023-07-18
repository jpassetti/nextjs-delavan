import { getCreativeBySlug, getAllCreativesSlugs } from "../../../lib/api";


import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import Container from '../../../components/Container';
import Col from '../../../components/Col';
import Group from '../../../components/Group';
import Head from 'next/head';
import Heading from '../../../components/Heading';
import Layout from "../../../components/Layout";
import Row from '../../../components/Row';
import Showcase from "../../../components/Showcase";
import SocialMediaLinks from '../../../components/SocialMediaLinks';
import MainContent from '../../../components/MainContent';

import { DEFAULT_TITLE } from '../../../config';

export async function getStaticPaths() {
    const creatives = await getAllCreativesSlugs();
    const paths = creatives.map(edge => {
        return {
            params: {
                creative: edge.node.slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const creativeData = await getCreativeBySlug(params.creative);
    return {
        props: {
            creativeData
        }
    }
}

const SingleCreativePage = ({ creativeData }) => {
    const { title, featuredImage, excerpt, creativeInformation, content } = creativeData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;

    const linksArr = creativeInformation?.links?.map((link) => {
        return {
            name: link,
            url: creativeInformation[`${link}Url`]
        }
    });

    return (
        <Layout>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses."} />
            </Head>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                introduction={excerpt ? excerpt : null}
                backgroundImage={featuredImage ? featuredImage.node : null}
            />
            <Container>
                <Row justifyContent="space-between">
                    <Col xs={12} sm={12} md={8} marginBottom={0}>
                        {content && <MainContent content={content} />}
                    </Col>
                    <Col xs={12} sm={12} md={1}></Col>
                    <Col xs={12} sm={12} md={3} marginBottom={0} paddingTop={4} textAlign="left">
                        {creativeInformation.websiteUrl &&
                            <ButtonGroup justifyContent="flex-start">
                                <Button backgroundColor="blue" fontColor="white" size="large" label="Visit Site" url={creativeInformation.websiteUrl} />
                            </ButtonGroup>
                        }
                        {linksArr.length > 0 &&
                            <Group>
                                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm" textAlign="left">Follow</Heading>
                                <SocialMediaLinks
                                    color="red"
                                    links={linksArr}
                                    justifyContent="flex-start"
                                />
                            </Group>
                        }
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}
export default SingleCreativePage;