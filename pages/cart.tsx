import Layout from "../components/Layout";
import { useRouter } from 'next/router'
import { useAppSelector } from "../store/hooks";
import Cart from "../features/Cart";
import Col from "../components/Col";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Row from "../components/Row";
import Section from "../components/Section";
import Showcase from "../components/Showcase";
import Button from "../components/Button";
import Link from "next/link";

export default function CartPage() {
  const router = useRouter();
  const cartState = useAppSelector((state) => state.cart);
  console.log({cartState});
  return (
    <Layout>
       <Showcase 
            title="Cart"
        />
        <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                  <Cart lineItems={cartState.lineItems} />
                 </Col>
                </Row>
            </Section>
        </Container>
      
    </Layout>
  );
}