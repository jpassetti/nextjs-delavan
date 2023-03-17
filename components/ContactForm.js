import Cf7FormWrapper from "./Cf7FormWrapper"
import { useState } from "react"
import Input from './Input'
import TextArea from "./TextArea"
import Button from "./Button"
import Label from "./Label"
import Group from './Group';
import Paragraph from "./Paragraph"

function Form({ subject="Delavan Studios Contact Form Submission", handler, isLoading, isSent, hasError }) {
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

  return <form onSubmit={handleFormSubmit} style={{ "marginBottom" : "2rem"}}>
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
        <Label>Subject:</Label>
        <Input value={subject} onChange={(e) => handleFieldChange("your-subject", e)} />
      </Group>
      <Group>
        <Label>Message:</Label>
        <TextArea onChange={(e) => handleFieldChange("your-message", e)} />
      </Group>
      <Button label="Send" type="submit" />
    </form>
}

const ContactForm = ({subject}) => {
  return <Cf7FormWrapper siteUrl="https://delavan-studios-dev.com" formId="88" >
        <Form subject={subject} />
      </Cf7FormWrapper>
}
export default ContactForm;