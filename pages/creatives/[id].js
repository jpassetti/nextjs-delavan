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
import { getSingleCreativeBySlug, getCreatives, getCategoryNameById } from "../../lib/api";
import Paragraph from '../../components/Paragraph';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import Tags from '../../components/Tags';

export async function getStaticPaths() {
    const creatives = await getCreatives();
    const paths = creatives.map(creative => {
        return {
            params: {
                id: creative.slug.toString()
            }
        }
    });
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps( {params}) {
    const creative = await getSingleCreativeBySlug(params.id);
    return {
        props: {
            creative
        }
    }
}

const SingleCreativePage = ({ creative }) => {
    const { title, content, categories, links, featuredImage, tags } = creative;
    return (
        <Layout>
            <Head>
                <title>{title}</title>
            </Head>
            <Showcase
                category={{
                    title: "Creatives",
                    slug: "creatives"
                }}
                title={title}
                backgroundImage={featuredImage?.node?.sourceUrl} 
            />
           <Container>
                <Row justifyContent="space-between">
                    <Col xs="12" sm="8" marginBottom="0">
                        <Section>
                            <Paragraph marginBottom="0">{content}</Paragraph>
                        </Section>
                    </Col>
                    <Col xs="12" sm="3" marginBottom="0">
                        <Aside>
                            <ButtonGroup>
                                <Button label="Visit Site" url={links.website} />
                            </ButtonGroup>
                            <Group>
                                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Follow</Heading>
                                <SocialMediaLinks color="red" links={links.socialLinks} />
                            </Group>
                            <Group>
                                <Heading level="3" marginBottom="2" color="tan" textTransform="uppercase" size="sm">Tags</Heading>
                                <Tags tags={tags} />
                            </Group>
                        </Aside>
                    </Col>
                </Row>
           </Container>
        </Layout>
    );
}
export default SingleCreativePage;