import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { RootState } from '../store/store'; // Adjust path accordingly
import { setShippingMethod } from '../store/slices/shippingMethodSlice';
import { useAppDispatch } from '../store/hooks';

import { Fragment } from "react";
import styled from "styled-components";
import Button from "../components/ui/Button";
import ButtonGroup from "../components/ui/Button/ButtonGroup";
import CartHeader from "../components/cart/CartHeader";
import CartItem from "../containers/CartItem/CartItem";
import CartSummary from "../containers/CartSummary/CartSummary";
import CartShipping from "../containers/CartShipping/CartShipping";
import Paragraph from "../components/typography/Paragraph";
import { LineItem } from "../utils/types/wooCommerceTypes";
import { useRouter } from "next/router";
import Well from "../components/custom/Well";

interface CartPageProps {
  lineItems: LineItem[];
}
type ShippingZone = {
  id: number;
  name: string;
};

type ShippingMethod = {
  id: number;
  title: string;
  enabled: boolean;
  method_id: string;
  method_title: string;
};

const CartPage: React.FC<CartPageProps> = ({ lineItems }) => {
  const shippingMethod = useSelector((state: RootState) => state.shippingMethod);

  const dispatch = useAppDispatch();

  const handleShippingMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value); // Assuming the value in the select dropdown is the ID of the shipping method

    // Find the selected method from available methods
    const selectedMethod = availableShippingMethods.find(method => method.id === selectedValue);

    if (selectedMethod) {
        dispatch(setShippingMethod(selectedMethod));
    }
  };

  const [shippingZones, setShippingZones] = useState([]);
  const [availableShippingMethods, setAvailableShippingMethods] = useState<ShippingMethod[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchShippingZones = async () => {
      try {
        const responseZones = await axios.get<ShippingZone[]>('/api/shippingZones');
        setShippingZones(responseZones.data);

        if (responseZones.data.length > 0) {
          // skip 0
          const zoneId = responseZones.data[1].id;
          fetchShippingMethodsForZone(zoneId);
        }
      } catch (error) {
        //console.error("Error fetching shipping zones:", error);
      }
    };

    const fetchShippingMethodsForZone = async (zoneId: number) => {
      try {
        const responseMethods = await axios.get<ShippingMethod[]>(`/api/shippingMethods/${zoneId}`);
        //console.log({responseMethods});

        // filter out methods that aren't enabled.
        const filteredResponseMethods = responseMethods.data.filter(method => method.enabled);
        //console.log({filteredResponseMethods});

        //console.log({formattedShippingMethods});
        setAvailableShippingMethods(filteredResponseMethods);
      
      } catch (error) {
        //console.error(`Error fetching shipping methods for zone ${zoneId}:`, error);
      }
    };
  
    fetchShippingZones();
  }, []);

  const createCart = (lineItems: LineItem[]) => {
    return (
      <Fragment>
        <CartHeader />
        {lineItems.map((lineItem) => {
          return <CartItem lineItem={lineItem} key={lineItem.product_id} />;
        })}
        <CartSummary lineItems={lineItems} />
        {availableShippingMethods.length > 0 && 
          <CartShipping 
            shippingMethods={availableShippingMethods} 
            setSelectedShippingMethod={handleShippingMethodChange} 
            selectedShippingMethod={shippingMethod} 
            />
        }
        
        <ButtonGroup>
          <Button label="Checkout" backgroundColor="blue" fontColor="white" clickHandler={() => router.push("/checkout")} />
          <Button label="Continue shopping" backgroundColor="white" fontColor="blue" clickHandler={() => router.push("/shop")} />
        </ButtonGroup>
      </Fragment>
    );
  };

  return (
    <Wrapper>
      {!lineItems.length ? (
        <Well>
          <Paragraph>Sorry, your cart is empty!</Paragraph>
          <Button label="Go to shop" backgroundColor="blue" fontColor="white" clickHandler={() => router.push("/shop")} />
        </Well>
      ) : (
        createCart(lineItems)
      )}
    </Wrapper>
  );
};

export default CartPage;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;