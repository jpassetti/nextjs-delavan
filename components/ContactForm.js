import Cf7FormWrapper from "./Cf7FormWrapper"
import { useState } from "react"
import Input from './Input'
import TextArea from "./TextArea"
import Button from "./Button"
import Label from "./Label"
import Group from './Group';
import Paragraph from "./Paragraph"

function Form({ handler, isLoading, isSent, hasError }) {
  const [formState, setFormState] = useState({})

  const handleFieldChange = (field, e) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    })
  }

  const handleFormSubmit = (e) => {
    handler(e, formState)
  }

  return <form onSubmit={handleFormSubmit}>
      <div style={{ "backgroundColor": "#ccc", "marginBottom" : "1rem", "padding" : "1rem", "display" : "none" }}>
        <Paragraph>isLoading: {isLoading ? "Loading" : "false"}</Paragraph>
        <Paragraph>isSent: {isSent ? "Sent" : "false"}</Paragraph>
        <Paragraph>Error: {hasError || "null"}</Paragraph>
      </div>

      <Group>
        <Label>Your name:</Label>
        <Input onChange={(e) => handleFieldChange("your-name", e)} />
      </Group>
      <Group>
        <Label>Your email:</Label>
        <Input onChange={(e) => handleFieldChange("your-email", e)} />
      </Group>
      <Group>
        <Label>Your subject:</Label>
        <Input onChange={(e) => handleFieldChange("your-subject", e)} />
      </Group>
      <Group>
        <Label>Your message:</Label>
        <TextArea onChange={(e) => handleFieldChange("your-message", e)} />
      </Group>
      <Button label="Send" type="submit" />
    </form>
}

const ContactForm = () => {
  return <Cf7FormWrapper siteUrl="https://delavan-studios-dev.com" formId="88" >
        <Form />
      </Cf7FormWrapper>
}
export default ContactForm;