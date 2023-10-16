import Paragraph from "../typography/Paragraph";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Strong from "../html/Strong";

interface Props {
  title: string;
  price: string;
}

const CartSummaryLine = (props: Props) => {
  return <Row borderTop={1} paddingTop={1}>
      <Col xs={6} sm={6}>
        <Paragraph><Strong>{props.title}</Strong></Paragraph>
      </Col>
      <Col xs={6} sm={6} textAlign="right">
      <Paragraph><Strong>{props.price}</Strong></Paragraph>
      </Col>
    </Row>
};

export default CartSummaryLine;