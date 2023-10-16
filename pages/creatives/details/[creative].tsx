import { getCreativeBySlug, getAllCreativesSlugs } from "../../../lib/api";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'; // Import ParsedUrlQuery


import Button from '../../../components/ui/Button';
import ButtonGroup from '../../../components/ui/Button/ButtonGroup';
import Container from '../../../components/layout/Container';
import Col from '../../../components/layout/Col';
import Group from '../../../components/layout/Group';
import Head from 'next/head';
import Heading from '../../../components/typography/Heading';
import Layout from "../../../components/layout/Layout";
import Row from '../../../components/layout/Row';
import Showcase from "../../../components/custom/Showcase";
import SocialMediaLinks from '../../../components/list/SocialMediaLinks';
import MainContent from '../../../components/layout/MainContent';

import { DEFAULT_TITLE } from '../../../config';

interface CreativeData {
    title?: string;
    featuredImage?: any; // Adjust the type if needed
    excerpt?: string;
    creativeInformation?: any; // Adjust the type if needed
    content?: string;
}
interface Params extends ParsedUrlQuery {
    creative: string;
}
interface SingleCreativePageProps {
    creativeData: CreativeData;
    params: Params;
}
interface StaticPathsResult {
    paths: { params: Params }[];
    fallback: boolean;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
    const creatives = await getAllCreativesSlugs();
    const paths = creatives.map((edge) => ({
        params: {
          creative: edge.node.slug,
        },
      }));
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps<{ creativeData: CreativeData }, Params> = async ({ params }) => {
    if (!params) {
        throw new Error('Params not provided');
      }
    const { creative } = params;
    const creativeData = await getCreativeBySlug(creative);
    return {
        props: {
            creativeData
        }
    }
}

export default function SingleCreativePage({
    creativeData,
  }: SingleCreativePageProps) {
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
                backgroundImage={featuredImage ? featuredImage : null}
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
                                <Heading level={3} marginBottom={2} color="tan" textTransform="uppercase" size="sm" textAlign="left">Follow</Heading>
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