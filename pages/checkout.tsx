import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardPayment from "../containers/CardPayment/CardPayment";
import { useAppSelector } from "../store/hooks";
import Layout from "../components/Layout";
import Col from "../components/Col";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Row from "../components/Row";
import Section from "../components/Section";
import Showcase from "../components/Showcase";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const lineItems = useAppSelector((state) => state.cart.lineItems);

  return (
    <Layout>
       <Showcase 
            title="Cart"
        />
        <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                  <Heading level={2} marginBottom={2}>Billing Information</Heading>
    <Elements stripe={stripePromise}>
      <CardPayment lineItems={lineItems} />
    </Elements>
    </Col>
    </Row>
            </Section>
        </Container>
    </Layout>
  );
}