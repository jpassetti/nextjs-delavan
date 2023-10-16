import React, { useState } from 'react';
import Row from '../../components/layout/Row';
import Col from '../../components/layout/Col';
import Paragraph from '../../components/typography/Paragraph';
import Strong from '../../components/html/Strong';
import Select from '../../components/form/Select';

type ShippingMethod = {
  id: number;
  title: string;
  enabled: boolean;
  method_id: string;
  method_title: string;
};

interface CartShippingProps {
    shippingMethods: ShippingMethod[];
    setSelectedShippingMethod: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    selectedShippingMethod: ShippingMethod;
}

const CartShipping: React.FC<CartShippingProps> = ({ 
    shippingMethods, 
    setSelectedShippingMethod, 
    selectedShippingMethod
  }) => {
  
    //console.log({shippingMethods});

    // prepare shippingMethods as objects with value and label properties
    const shippingOptions = shippingMethods.map(method => ({ value: method.id, label: method.title }));
    //console.log({shippingOptions});
    // find the currently selected shipping method
    const currentSelectedMethod = shippingMethods.find(method => method.id === selectedShippingMethod.id);

    const formattedSelectedMethod = currentSelectedMethod 
        ? { label: currentSelectedMethod.title, value: currentSelectedMethod.id.toString() } 
        : { label: '', value: '' };

    return <Row paddingTop={1} paddingBottom={1}>
         <Col xs={6} sm={6}>
            <Paragraph><Strong>Preferred method of delivery</Strong></Paragraph>
        </Col>
        <Col xs={6} sm={6} textAlign="right">
        <Select
            name="shipping_method"
            selectedValue={formattedSelectedMethod}
            changeHandler={setSelectedShippingMethod}
            options={shippingOptions}
        />
        </Col>
      
    </Row>
  }
  export default CartShipping;
  
  
  
  
  