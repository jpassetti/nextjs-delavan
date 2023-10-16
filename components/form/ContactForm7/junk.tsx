import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = process.env.WORDPRESS_REST_API_URL

interface FormProps {
   formID?: number;
    domNode?: any;
}
const ContactForm7: React.FC<FormProps> = ({
    formID,
    domNode
}) => {
    console.log({domNode});
    const {attribs, children } = domNode;
    const [formData, setFormData] = useState({});

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };
      // Function to parse and render input elements with onChange prop
  const renderInputFields = (children) => {
    return children.map((child, index) => {
        console.log({child});
       if (child.type === 'tag' && child.name === 'input') {
        return <p>Input</p>
       } else {
        return <p>Something else</p>
       }
    //     // Clone the child and add the onChange prop
    //     return React.cloneElement(child, {
    //       key: index,
    //       //onChange: (e) => handleFieldChange(child.name, e.target.value),
    //       value: formData[child.name] || '',
    //     });
    //   } else {
    //     return child;
    //   }
    
    });
  };
    
      return <form>
          {renderInputFields(children)}
        </form>
}
export default ContactForm7;
