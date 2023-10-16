import Heading from "../typography/Heading";
import Col from "../layout/Col";
import Row from "../layout/Row";

const CartHeader = () => {
  return (
    <Row>
      <Col xs={3} sm={6}>
      <Heading level={4}>Name</Heading>
      </Col>
      <Col xs={3} sm={2}>
      <Heading level={4}>Qty</Heading>
      </Col>
      <Col xs={3} sm={2}></Col>
      <Col xs={3} sm={2} textAlign="right">
      <Heading level={4}>Total</Heading>
      </Col>
    </Row>
  );
};

export default CartHeader;