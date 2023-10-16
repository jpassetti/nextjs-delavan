import { useState, Fragment } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring'; // Import ParsedUrlQuery

import ContactForm from "../../components/form/ContactForm";
import Head from "next/head";
import Heading from "../../components/typography/Heading";
import Layout from "../../components/layout/Layout";
import Showcase from "../../components/custom/Showcase";
import Space from "../../components/custom/Space";
import Slider from "../../components/custom/Slider";
import Container from "../../components/layout/Container";

import { getAllSpaces, getPageBySlug } from "../../lib/api";
import { DEFAULT_TITLE } from '../../config';
import Paragraph from "../../components/typography/Paragraph";

type RentLandingPageProps = {
  spacesData: any[];
  pageData?: {
      title?: string;
      content?: string;
      excerpt?:string;
      featuredImage?: {
        node: {
          sourceUrl?: string;
          altText?: string;
          mediaDetails?: {
              width?: number;
              height?: number;
          };
        }
      }
  }
}
type GetStaticPropsType = GetStaticProps<RentLandingPageProps>;


export const getStaticProps: GetStaticPropsType = async ({ params }) => {
  const spacesData = await getAllSpaces();
    const pageData = await getPageBySlug("rent");
    return {
      props: {
        spacesData,
        pageData
      }, // will be passed to the page component as props
    }
  }
export default function RentLandingPage({ 
  spacesData, pageData
}: RentLandingPageProps) {
    const [activeSpace, setActiveSpace] = useState(0);
    const [showContactForm, setShowContactForm] = useState(false);
    const {title, content, excerpt, featuredImage} = pageData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
    
    return <Layout>
         <Head>
            <title>{pageTitle}</title>
            <meta name="description" content={ excerpt ? excerpt : "Delavan Studios is a historic multi-use, multi-story, multi-building complex on Syracuse's Near West Side. The studios are flexible for many uses." } />
        </Head>
        <Showcase 
            title={title}
            slug="rent"
            introduction={excerpt}
            backgroundImage={featuredImage ? featuredImage : null}
        />
        <Container>
          
          {spacesData.length > 0 ? <Fragment>
            <Heading level={2} color="black" marginBottom={2} marginTop={6}>Available spaces</Heading>
            <Space space={spacesData[activeSpace]} setShowContactForm={setShowContactForm} />
          </Fragment> : <Fragment>
            <Heading level={2} color="black" marginBottom={2} marginTop={6}>No spaces available</Heading>
            <Paragraph marginBottom={4}>Check back soon or join our waiting list by contact us.</Paragraph>
            <ContactForm subject={`[Inquiry] I'd like to join the waiting list`} />
          </Fragment>}
          {spacesData.length > 1 &&
            <Slider small items={spacesData} clickHandler={setActiveSpace} activeSpace={activeSpace} />
          }
          <div id="rentContactForm">
          {(showContactForm && spacesData.length > 0) && 
            <div style={{ "backgroundColor": "gold", "padding" : "2rem", "marginBottom" : "2rem"}}>
              <Heading level={2} color="black" marginBottom={2} marginTop={6}>Contact us</Heading>
              <ContactForm subject={`[Space Inquiry] ${spacesData[activeSpace].node.title} - ${spacesData[activeSpace].node.spaceInformation.squareFt} ft.`} />
            </div>
          }
          </div>
        </Container>
    </Layout>
}