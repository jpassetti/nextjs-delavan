import React, { useState, ChangeEvent, FormEvent } from "react";

import Wrapper from "./ContactForm7/Wrapper";
import Input from './Input';
import TextArea from "./TextArea";
import Button from "../ui/Button";
import Label from "./Label";
import Group from '../layout/Group';
import Paragraph from "../typography/Paragraph";

interface FormProps {
  subject?: string;
  handler: (e: FormEvent, data: Record<string, string>) => void;
  isLoading: boolean;
  isSent: boolean;
  hasError: string | null;
}
interface ContactFormProps {
  subject?: string;
}

function Form({ subject = "Delavan Studios Contact Form Submission", handler, isLoading, isSent, hasError }: FormProps) {
  const [formState, setFormState] = useState<Record<string, string>>({});

  const handleFieldChange = (field: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [field]: e.target.value,
    });
  };

  const handleFormSubmit = (e: FormEvent) => {
    handler(e, formState);
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ marginBottom: "2rem" }}>
      <div style={{ backgroundColor: "#ccc", marginBottom: "1rem", padding: "1rem", display: "none" }}>
        <Paragraph>isLoading: {isLoading ? "Loading" : "false"}</Paragraph>
        <Paragraph>isSent: {isSent ? "Sent" : "false"}</Paragraph>
        <Paragraph>Error: {hasError || "null"}</Paragraph>
      </div>

      <Group>
        <Label htmlFor="your-name">Your name</Label>
        <Input id="your-name" onChange={(e) => handleFieldChange("your-name", e)} />
      </Group>
      <Group>
        <Label htmlFor="your-email">Your email</Label>
        <Input id="your-email" onChange={(e) => handleFieldChange("your-email", e)} />
      </Group>
      <Group>
        <Label htmlFor="your-subject">Subject</Label>
        <Input id="your-subject" value={subject} onChange={(e) => handleFieldChange("your-subject", e)} />
      </Group>
      <Group>
      <Label htmlFor="your-message">Message</Label>
        <TextArea id="your-message" onChange={(e) => handleFieldChange("your-message", e)} />
      </Group>
      <Button label="Send" type="submit" />
    </form>
  );
}

const ContactForm = ({ subject }: ContactFormProps) => {
  let handler, hasError;
  return <Wrapper siteUrl="https://delavan-studios-dev.com" formId="88">  
   <Form 
        handler={handler}
        subject={subject}  
        isLoading
        isSent
        hasError={hasError}
        />
  </Wrapper>
};

export default ContactForm;