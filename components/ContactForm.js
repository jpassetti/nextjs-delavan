import Cf7FormWrapper from "./Cf7FormWrapper"
import { useState } from "react"

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

  return (
    <form onSubmit={handleFormSubmit}>
      <div>isLoading: {isLoading ? "Loading" : "false"}</div>
      <div>isSent: {isSent ? "Sent" : "false"}</div>
      <div>Error: {hasError || "null"}</div>

      <div>Enter your name:</div>
      <input onChange={(e) => handleFieldChange("your-name", e)} type="text" />
      <div>Enter your email:</div>
      <input onChange={(e) => handleFieldChange("your-email", e)} type="text" />
      <div>Enter your phone:</div>
      <input onChange={(e) => handleFieldChange("your-phone", e)} type="text" />
      <input type="submit" value="Send" />
    </form>
  )
}

const ContactForm = () => {
  return <Cf7FormWrapper url="https://delavan-studios-dev.com">
        <Form />
      </Cf7FormWrapper>
}
export default ContactForm;