import CartQty from "../../components/CartQty";
import Col from "../../components/Col";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Row from "../../components/Row";
import { useAppDispatch } from "../../store/hooks";
import {
  decrementLineItemQuantity,
  addLineItem,
  removeLineItem,
} from "../../store/slices/cartSlice";
import { LineItem } from "../../utils/types/wooCommerceTypes";

interface Props {
  lineItem: LineItem;
}

// TODO refactor to separate file
const calculatePrice = (quantity: number, price: string) => {
  const formattedPrice = parseFloat(price) * 100;
  const result = (formattedPrice * quantity) / 100;
  return result.toFixed(2);
};

const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();

  // copy lineItem object and set the quantity to 1 so only incrementing/decrementing by 1
  const data = { ...props.lineItem };
  data.quantity = 1;

  const increment = () => {
    dispatch(addLineItem(data));
  };

  const decrement = () => {
    dispatch(decrementLineItemQuantity(data));
  };

  const remove = () => {
    dispatch(removeLineItem(data));
  };

  return (
    <Row>
  
      <Col xs={3} sm={6}>
      <Paragraph>{props.lineItem.name}</Paragraph>
      </Col>
      <Col xs={3} sm={2}>
      <CartQty
        quantity={props.lineItem.quantity}
        decrementFunction={decrement}
        incrementFunction={increment}
      />
      </Col>
     
      <Col xs={3} sm={2}>
      <Button clickHandler={remove} label="Remove" backgroundColor="blue" fontColor="white" size="small" />
      </Col>
      <Col xs={3} sm={2} textAlign="right">
        <Paragraph>${calculatePrice(props.lineItem.quantity, props.lineItem.price!)}</Paragraph>
      </Col>
      </Row>
  );
};

export default CartItem;