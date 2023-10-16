import styled from "styled-components";
import Image from "next/image";
import Col from "../../layout/Col";
import { Product } from "../../../utils/types/wooCommerceTypes";
import { useAppDispatch } from "../../../store/hooks";
import { addLineItem } from "../../../store/slices/cartSlice";
import ProductCardInfo from "./ProductCardInfo";
import Row from "../../layout/Row";

interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const lineItem = {
    name: product.name,
    product_id: product.id,
    quantity: 1,
    price: product.regular_price,
  };

  const handleIncrement = () => {
    //console.log("handleIncrement");
    dispatch(addLineItem(lineItem));
  };
  return <Row>
      <Col xs={12} sm={4} md={2}>
        
        {product.images && product.images[0] &&
            <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
           width={600}
            height={600}
          layout="responsive"
          />
        }
        
        </Col>
        <Col xs={12} sm={8} md={10}>
        <ProductCardInfo
        name={product.name}
        price={product.price}
        description={product.description}
        clickHandler={handleIncrement}
      />
      </Col>
    </Row>
};

export default ProductCard;