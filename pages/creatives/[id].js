import Aside from '../../components/Aside';
import Button from '../../components/Button';
import ButtonGroup from '../../components/ButtonGroup';
import Container from '../../components/Container';
import Col from '../../components/Col';
import Group from '../../components/Group';
import Head from 'next/head';
import Heading from '../../components/Heading';
import Layout from "../../components/Layout";
import Row from '../../components/Row';
import Section from '../../components/Section';
import Showcase from "../../components/Showcase";
import { getCreativeBySlug, getCreatives, getCategoryNameById, getAllCreativesSlugs } from "../../lib/api";
import Paragraph from '../../components/Paragraph';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import Tags from '../../components/Tags';
import MainContent from '../../components/MainContent';

export async function getStaticPaths() {
    const creatives = await getAllCreativesSlugs();
    const paths = creatives.map(edge => {
        return {
            params: {
                id: edge.node.slug
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps( {params}) {
    const creative = await getCreativeBySlug(params.id);
    return {
        props: {
            creative
        }
    }
}

const SingleCreativePage = ({ creative }) => {
    const { title, featuredImage, excerpt, creativeInformation, content } = creative;
    
    const linksArr = creativeInformation?.links?.map((link) => {
        return {
            name: link,
            url: creativeInformation[`${link}Url`]
        }
    });

    return (
        <Layout>
            <Head>
                <title>{title} | Delavan Studios | Syracuse, NY</title>
            </Head>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                introduction={excerpt}
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
           <Container>
                <Row justifyContent="space-between">
                    <Col xs="12" sm="8" marginBottom="0">
                        <Section>
                           {content && <MainContent content={content} />}
                        </Section>
                    </Col>
                    <Col xs="12" sm="3" marginBottom="0">
                        <Aside>
                            {creativeInformation.websiteUrl && 
                                 <ButtonGroup>
                                 <Button size="large" label="Visit Site" url={creativeInformation.websiteUrl} />
                                </ButtonGroup>
                            }
                           
                           {linksArr.length > 0 && <Group>
                               <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Follow</Heading>
                                <SocialMediaLinks 
                                    color="red" 
                                    links={linksArr} 
                                />
                            </Group>
                            }
                        </Aside>
                    </Col>
                </Row>
                        </Container>
        </Layout>
    );
}
export default SingleCreativePage;