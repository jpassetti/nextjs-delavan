import { useState } from "react";
import ContactForm from "../../components/ContactForm";
import Head from "next/head";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Link from 'next/link';
import Showcase from "../../components/Showcase";
import Space from "../../components/Space";
import Slider from "../../components/Slider";
import Container from "../../components/Container";

import { getAllSpaces, getPageBySlug } from "../../lib/api";
import { DEFAULT_TITLE } from '../../config';
import Paragraph from "../../components/Paragraph";

export async function getStaticProps() {
    const spacesData = await getAllSpaces();
    const pageData = await getPageBySlug("rent");
    return {
      props: {
        spacesData,
        pageData
      }, // will be passed to the page component as props
    }
  }

const RentLandingPage = ({spacesData, pageData}) => {
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
            backgroundImage={featuredImage ? featuredImage.node : null}
        />
        <Container>
          
          {spacesData.length > 0 ? <>
            <Heading level="2" color="black" marginBottom={2} marginTop={6}>Available spaces</Heading>
            <Space space={spacesData[activeSpace]} setShowContactForm={setShowContactForm} />
          </> : <>
            <Heading level="2" color="black" marginBottom={2} marginTop={6}>No spaces available</Heading>
            <Paragraph marginBottom={4}>Check back soon or join our waiting list by contact us.</Paragraph>
            <ContactForm subject={`[Inquiry] I'd like to join the waiting list`} />
          </>}
          {spacesData.length > 1 &&
            <Slider small items={spacesData} clickHandler={setActiveSpace} activeSpace={activeSpace} />
          }
          <div id="rentContactForm">
          {(showContactForm && spacesData.length > 0) && 
            <div style={{ "backgroundColor": "gold", "padding" : "2rem", "marginBottom" : "2rem"}}>
              <Heading level="2" color="black" marginBottom={2} marginTop={6}>Contact us</Heading>
              <ContactForm subject={`[Space Inquiry] ${spacesData[activeSpace].node.title} - ${spacesData[activeSpace].node.spaceInformation.squareFt} ft.`} />
            </div>
          }
          </div>
        </Container>
    </Layout>
}
export default RentLandingPage;