import { useState, useEffect, use } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CardPayment from "../containers/CardPayment/CardPayment";
import { useAppSelector } from "../store/hooks";
import Layout from "../components/layout/Layout";
import Col from "../components/layout/Col";
import Container from "../components/layout/Container";
import FormGroup from "../components/form/FormGroup";
import Heading from "../components/typography/Heading";
import Input from "../components/form/Input";
import Label from "../components/form/Label";
import Row from "../components/layout/Row";
import Select from "../components/form/Select";
import Section from "../components/layout/Section";
import Showcase from "../components/custom/Showcase";
import { getStatesList, getCountriesList, findStateByAbbreviation, findCountryByAbbreviation } from "../lib/utilities";
import Form from "../components/form/Form";
import { lookup } from "dns";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function Checkout() {
  const lineItems = useAppSelector((state) => state.cart.lineItems);
  const shippingMethod = useAppSelector((state) => state.shippingMethod);
  
  const [sameAsShipping, setSameAsShipping] = useState(false);
  //console.log({sameAsShipping});
  const [shippingInfo, setShippingInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    company: '',
    country: 'US',
    phone: '',
  });
  const [billingInfo, setBillingInfo] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    postcode: '',
    company: '',
    country: 'US',
    phone: '',
  });
  const handleShippingInfoChange = (e) => {
    //console.log("handleShippingInfoChange");
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };
  const handleBillingInfoChange = (e) => {
    //console.log("handleBillingInfoChange");
    const { name, value } = e.target;
    setBillingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: sameAsShipping ? shippingInfo[name] : value,
    }));
  };
  const handleSameAsShippingChange = () => {
   // console.log({sameAsShipping});
    setSameAsShipping(!sameAsShipping);
  };
  useEffect(() => {
    if (sameAsShipping === true) {
      //console.log({shippingInfo});
      // Set `billingInfo` to be the same as `shippingInfo`
      setBillingInfo({ ...shippingInfo });
    } else {
      //console.log({shippingInfo});
      // Clear `billingInfo`
      setBillingInfo({
        first_name: '',
        last_name: '',
        email: '',
        address_1: '',
        address_2: '',
        city: '',
        state: '',
        postcode: '',
        company: '',
        country: '',
        phone: '',
      });
    }
  }, [sameAsShipping]);

  //console.log({shippingInfo, billingInfo});

  const statesList = getStatesList();
  const countriesList = getCountriesList();

  return (
    <Layout>
       <Showcase 
            title="Cart"
        />
        <Container> 
            <Section>
                <Row justifyContent="center">
                <Col xs={12} sm={10} md={8}>
                <Heading level={2} marginBottom={2}>1. Mailing Information</Heading>
                <form>
                  <FormGroup>
                    <Label htmlFor="shipping_first_name">First Name</Label>
                  <Input
                    name="first_name"
                    id="shipping_first_name"
                    type="text"
                    value={shippingInfo.first_name}
                    onChange={handleShippingInfoChange}
                  />
                </FormGroup>
                <FormGroup>
                 <Label htmlFor="shipping_last_name">Last Name</Label>
                <Input
                  name="last_name"
                  id="shipping_last_name"
                  type="text"
                  value={shippingInfo.last_name}
                  onChange={handleShippingInfoChange}
                />
                 </FormGroup>
                <FormGroup>
                <Label htmlFor="shipping_email">Email</Label>
                <Input
                  id="shipping_email"
                  name="email"
                  type="email"
                  value={shippingInfo.email}
                  onChange={handleShippingInfoChange}
                />
                 </FormGroup>
                <FormGroup>
                 <Label htmlFor="shipping_address_1">Street address 1</Label>
              <Input
                id="shipping_address_1"
                name="address_1"
                type="text"
                value={shippingInfo.address_1}
                onChange={handleShippingInfoChange}
              />
                </FormGroup>
                <FormGroup>
               <Label htmlFor="shipping_address_2">Street address 2 (optional)</Label>
              <Input
                id="shipping_address_2"
                name="address_2"
                type="text"
                value={shippingInfo.address_2}
                onChange={handleShippingInfoChange}
              />
              </FormGroup>
               
  <Row>
    <Col xs={12} sm={4}>
    <FormGroup>
    <Label htmlFor="shipping_city">City</Label>
  <Input
    id="shipping_city"
    name="city"
    type="text"
    value={shippingInfo.city}
    onChange={handleShippingInfoChange}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
  <FormGroup>
  <Label htmlFor="shipping_state">State</Label>
  <Select
    id="shipping_state"
    name="state"
    selectedValue={findStateByAbbreviation(shippingInfo.state)}
    changeHandler={handleShippingInfoChange}
    options={statesList.map((state) => ({
      value: state.value,
      label: state.label,
    }))}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="shipping_postcode">Zip code</Label>
  <Input
    id="shipping_postcode"
    name="postcode"
    type="number"
    value={shippingInfo.postcode}
    onChange={handleShippingInfoChange}
  />
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col xs={12} sm={4}>
      <FormGroup>
    <Label htmlFor="shipping_company">Company (optional)</Label>
  <Input
    id="shipping_company"
    name="company"
    type="text"
    value={shippingInfo.company}
    onChange={handleShippingInfoChange}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="shipping_country">Country</Label>
  <Select
    name="country"
    selectedValue={findCountryByAbbreviation(shippingInfo.country)}
    changeHandler={handleShippingInfoChange}
    options={countriesList.map((country) => ({
      value: country.value,
      label: country.label,
    }))}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="shipping_phone">Phone</Label>
  <Input
    id="shipping_phone"
    name="phone"
    type="text"
    value={shippingInfo.phone}
    onChange={handleShippingInfoChange}
  />
  </FormGroup>
  </Col>
  </Row>
</form>
                  <Heading level={2} marginBottom={2} marginTop={4}>2. Billing Information</Heading>

                  <form>
    <div>
     
    <input
      id="sameAsShipping"
      type="checkbox"
      defaultChecked={sameAsShipping}
      onChange={handleSameAsShippingChange}
      style={{marginRight: "1rem"}}
    />
     <Label htmlFor="sameAsShipping">Same as Shipping</Label>
  </div>
  <FormGroup>
  <Label htmlFor="billing_first_name">First Name</Label>
  <Input
    id="billing_first_name"
    name="first_name"
    type="text"
    value={billingInfo.first_name}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  <FormGroup>
  <Label htmlFor="billing_last_name">Last Name</Label>
  <Input
    id="billing_last_name"
    name="last_name"
    type="text"
    value={billingInfo.last_name}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  <FormGroup>
   <Label htmlFor="billing_email">Email</Label>
   <Input
    id="billing_email"
    name="email"
    type="email"
    value={billingInfo.email}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  <FormGroup>
  <Label htmlFor="billing_address_1">Street address 1</Label>
  <Input
    id="billing_address_1"
    name="address_1"
    type="text"
    value={billingInfo.address_1}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  <FormGroup>
  <Label htmlFor="billing_address_2">Street address 2 (optional)</Label>
   <Input
    id="billing_address_2"
    name="address_2"
    type="text"
    value={billingInfo.address_2}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  <Row>
    <Col xs={12} sm={4}>
      <FormGroup>
    <Label htmlFor="billing_city">City</Label>
  <Input
    id="billing_city"
    name="city"
    type="text"
    value={billingInfo.city}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="billing_state">State</Label>
  <Select
    id="billing_state"
    name="state"
    selectedValue={findStateByAbbreviation(billingInfo.state)}
    changeHandler={handleBillingInfoChange}
    options={statesList.map((state) => ({
      value: state.value,
      label: state.label,
    }))}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="billing_postcode">Zip code</Label>
  <Input
    name="postcode"
    type="number"
    value={billingInfo.postcode}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  </Col>
  </Row>
  <Row>
    <Col xs={12} sm={4}>
      <FormGroup>
    <Label htmlFor="billing_company">Company (optional)</Label>
  <Input
    id="billing_company"
    name="company"
    type="text"
    value={billingInfo.company}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="billing_country">Country</Label>
  <Select
    id="billing_country"
    name="country"
    selectedValue={findCountryByAbbreviation(billingInfo.country)}
    changeHandler={handleBillingInfoChange}
    options={countriesList.map((country) => ({
      value: country.value,
      label: country.label,
    }))}
  />
  </FormGroup>
  </Col>
  <Col xs={12} sm={4}>
    <FormGroup>
  <Label htmlFor="billing_phone">Phone</Label>
  <Input
    id="billing_phone"
    name="phone"
    type="text"
    value={billingInfo.phone}
    onChange={handleBillingInfoChange}
  />
  </FormGroup>
  </Col>
  </Row>
</form>
                      <Elements stripe={stripePromise}>
                        <CardPayment 
                          lineItems={lineItems} 
                          shippingMethod={shippingMethod} 
                          shippingInfo={shippingInfo}
                          billingInfo={billingInfo}
                        />
                      </Elements>
              </Col>
              </Row>
            </Section>
        </Container>
    </Layout>
  );
}