import Layout from "../components/layout/Layout";
import { useRouter } from 'next/router'
import { useAppSelector } from "../store/hooks";
import Cart from "../features/Cart";
import Col from "../components/layout/Col";
import Container from "../components/layout/Container";
import Row from "../components/layout/Row";
import Section from "../components/layout/Section";
import Showcase from "../components/custom/Showcase";

export default function CartPage() {
  const router = useRouter();
  const cartState = useAppSelector((state) => state.cart);
  //console.log({cartState});
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