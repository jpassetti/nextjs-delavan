import React, { ReactNode } from 'react'; // Import React and ReactNode type
import Button from './Button'; // Import Button component
import Row from './Row'; // Import Row component
import Paragraph from './Paragraph';

interface Props {
  decrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
  quantity: number;
  incrementFunction?: React.MouseEventHandler<HTMLButtonElement>;
}

const CartQty: React.FC<Props> = ({ decrementFunction, quantity, incrementFunction }) => {
  return (
    <Row>
      <Button size="small" backgroundColor="yellow" fontColor='navy' clickHandler={decrementFunction} label="-" />
      <Paragraph paddingLeft={2} paddingRight={2}>{quantity}</Paragraph>
      <Button size="small" backgroundColor="yellow" fontColor='navy' clickHandler={incrementFunction} label="+" />
    </Row>
  );
};

export default CartQty;
