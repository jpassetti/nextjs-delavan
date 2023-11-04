// DelavanForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import FormGroup from '../FormGroup';
import Heading from '../../typography/Heading';
import Input from '../Input';
import Label from '../Label';
import Paragraph from '../../typography/Paragraph';
import TextArea from '../TextArea';
import Select from '../Select';

import styles from './delavanform.module.scss';
import Button from '../../ui/Button';
import Well from '../../custom/Well';

  interface FormField {
    form_field_label: string;
    form_field_name: string;
    form_field_type: string;
    form_field_placeholder: string;
    form_field_required: boolean;
    form_field_options: string[]; // Assuming this is for select options, adjust as needed
  }
  interface FormSettings {
    form_submit_button_text?: string;
    form_success_message?: string;
    form_error_message?: string;
    admin_email?: string;
  }
  interface FormEmails {
    form_user_email_body: string;
    form_admin_email_body: string;
}
  interface FormDataType {
    form_fields: FormField[];
    form_settings: FormSettings;
    form_emails: FormEmails;
    title: string;
    formId: number; // Added formId property
  }
  interface DelavanFormProps {
    formId: number;
  }

const DelavanForm: React.FC<DelavanFormProps> = ({ formId }) => {
    const [formData, setFormData] = useState<FormDataType | null>(null);
    const [formValues, setFormValues] = useState({
      // ... other form field initial values,
      form_id: formId,  // Set the initial value for form_id
    });
    const [formStatus, setFormStatus] = useState(null);
    const [formMessage, setFormMessage] = useState('');
    // State to handle loading status
    const [loading, setLoading] = useState<boolean>(true);
    // State to handle any potential API error
    const [error, setError] = useState<string | null>(null);


    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const handleFormSubmission = async (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent default form submission behavior
        event.preventDefault();
      
        // Use FormData API to retrieve form input values
   
        try {
        //   // Send form data to your API endpoint
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/wp-json/delavan-forms/v1/submit_form`, 
            { form_data: formValues }
          );
        //   // Handle response from server
          if (response.status === 200) {
            // Handle successful form submission
              //console.log('Form submitted successfully!', response.data);
                setFormStatus('success');
                setFormMessage(response.data.message);
          } else {
            // Handle unsuccessful form submission
            //console.error('Error submitting form', response.data);
              setFormStatus('error');
              setFormMessage(response.data.message || 'An unexpected error occurred.');
          }
        } catch (error) {
          // Handle error during API call
          //console.error('Error submitting form', error);
          setFormStatus('error');
          setFormMessage('Failed to connect to the server.');
        }
      };

    useEffect(() => {
        // Function to fetch form data from API
        const fetchFormData = async () => {
          try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_WORDPRESS_REST_API_URL}/wp-json/delavan-forms/v1/get_form/${formId}`);
            setFormData(response.data.data); 
          } catch (err) {
            // Handle error (you might adjust error handling based on your use case)
            setError('An error occurred while fetching form data');
          } finally {
            setLoading(false);
          }
        };
    
        // Invoke the function to fetch form data
        fetchFormData();
      }, [formId]); // Dependency array: re-run effect if formId changes
    

     // Handling the loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!formData) return <p>No form data found.</p>;

  // Rendering form data (customize based on your use case)

  const renderField = (field: FormField, index: number) => {
    const {
      form_field_label,
      form_field_name,
      form_field_type,
      form_field_placeholder,
      form_field_required,
      form_field_options,
    } = field;

    switch (form_field_type) {
      case 'text': return (
        <FormGroup key={index}>
          <Label htmlFor={form_field_name}>{form_field_label}</Label><br />
          <Input
            type={form_field_type}
            id={form_field_name}
            name={form_field_name}
            placeholder={form_field_placeholder}
            required={form_field_required}
            onChange={handleInputChange}  
          />
        </FormGroup>
      );
      case 'email':
        return (
          <FormGroup key={index}>
            <Label htmlFor={form_field_name}>{form_field_label}</Label><br />
            <Input
              type={form_field_type}
              id={form_field_name}
              name={form_field_name}
              placeholder={form_field_placeholder}
              required={form_field_required}
              onChange={handleInputChange}  
            />
          </FormGroup>
        );
      case 'textarea':
        return (
          <FormGroup key={index}>
            <Label htmlFor={form_field_name}>{form_field_label}</Label><br />
            <TextArea
              id={form_field_name}
              name={form_field_name}
              placeholder={form_field_placeholder}
              required={form_field_required}
              onChange={handleInputChange}  
            />
          </FormGroup>
        );
      case 'select':
        // options: { label: string; value: string }[];
        const formattedOptions = form_field_options.map((option) => {
          return {
            label: option,
            value: option.toLowerCase().replace(' ', '_'),
          };
        });
        return (
          <FormGroup key={index}>
            <Label htmlFor={form_field_name}>{form_field_label}</Label><br />
            <Select 
            id={form_field_name} 
            name={form_field_name} 
            required={form_field_required} 
            options={formattedOptions} 
            changeHandler={handleInputChange}  
            />
          </FormGroup>
        );
      // Additional case statements for other field types (checkboxes, radio buttons, etc.)
      default:
        return null;
    }
  };
  return (
    <div className={styles.delavan_form_container}>
      <Heading level={3}>{formData.title}</Heading>
      <form onSubmit={handleFormSubmission}>
      <input type="hidden" name="form_id" value={formId} />
        {formData?.form_fields.map((field, index) => renderField(field, index))}
        <Button 
          backgroundColor="yellow" 
          fontColor="navy" 
          type="submit" 
          label={formData?.form_settings?.form_submit_button_text} />
          {formStatus === 'success' && <Well status="success">{formMessage}</Well>}
          {formStatus === 'error' && <Well status="error">{formMessage}</Well>}
      </form>
    </div>
  );


}
export default DelavanForm;