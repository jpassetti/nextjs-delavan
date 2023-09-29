import Paragraph from "./Paragraph";
import Row from "./Row";
import Col from "./Col";
import Strong from "./Strong";

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