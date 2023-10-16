import React from 'react';
import { useRouter } from 'next/router'
import { useAppSelector } from "../store/hooks";
import Button from "../components/ui/Button";
import Col from "../components/layout/Col";
import Container from "../components/layout/Container";
import Heading from "../components/typography/Heading";
import Layout from "../components/layout/Layout"
import Paragraph from "../components/typography/Paragraph";
import ProductCard from "../components/custom/Card/ProductCard";
import Row from "../components/layout/Row";
import Section from "../components/layout/Section";
import Showcase from "../components/custom/Showcase";
import Well from "../components/custom/Well";
import { Product } from "../utils/types/wooCommerceTypes";
import { GetStaticProps } from 'next';

import { fetchWooCommerceProducts } from "../utils/wooCommerceApi";

import { DEFAULT_TITLE } from '../config';

import { getPageBySlug } from "../lib/api";

// declare types for the functional component props 
interface Props {
  products: Product[];
  pageData: {
    title?: string;
    content?: string;
    excerpt?: string;
    featuredImage?: {
      node: {
        sourceUrl?: string;
      }
    }
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getPageBySlug("shop");
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
      products: wooCommerceProducts.data,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};

const StorePage: React.FC = ({ products, pageData }: Props) => {
  const router = useRouter();
  const cartState = useAppSelector((state) => state.cart);
  const {title, content, excerpt, featuredImage} = pageData;
    const pageTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  return (
    <Layout>
      <Showcase 
        title={title}
        introduction={excerpt}
        backgroundImage={featuredImage ? featuredImage : null}
        />
       <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                  {products && <Heading level={2} marginBottom={3}>Products</Heading>}
                    {products?.map((product) => {
                      return <ProductCard key={product.id} product={product} />
                    })}
                </Col>
                </Row>
                {cartState.lineItems.length > 0 && <Row justifyContent="center">
                  <Col xs={12} sm={10} md={8}>
                    <Well>
                    <Heading level={2} marginBottom={3}>Cart</Heading>
                    <Paragraph>{cartState.lineItems.length} items in cart</Paragraph>
                    <Button backgroundColor="blue" fontColor="white" size="small" clickHandler={() => {
                       router.push('/cart')
                    }} label="Proceed to checkout" />
                    </Well>
                  </Col>
                </Row>}
    
            </Section>
        </Container>
     </Layout>
  );
}

export default StorePage;