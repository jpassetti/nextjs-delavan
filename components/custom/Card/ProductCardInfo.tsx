import React, { Fragment, useState } from "react";
import Button from "../../ui/Button";
import ContentParser from '../../../lib/parser';
import Heading from "../../typography/Heading";

interface Props {
    name: string;
    price: string;
    clickHandler: React.MouseEventHandler<HTMLButtonElement>;
    description?: string;
  }

const ProductCardInfo: React.FC<Props> = ({
    clickHandler,
    name,
    price,
    description
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    clickHandler(e);
    setTimeout(() => setIsClicked(false), 300);
  };

 

  return (
    <Fragment>
        <Heading level={3}>{name}</Heading>
        <Heading level={4}>${price}</Heading>
        {description && <ContentParser content={description} /> }
        <Button backgroundColor="blue" fontColor="white" size="small" clickHandler={handleClick} isClicked={isClicked} label="Add to cart" />
    </Fragment>
  );
};

export default ProductCardInfo;