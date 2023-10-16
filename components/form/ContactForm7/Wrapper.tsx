import React, { cloneElement, useState, ReactElement } from "react";
import ErrorMessage from "./ErrorMessage";

interface WrapperProps {
  children?: ReactElement;
  siteUrl?: string;
  formId?: string;
  url?: string;
}

const jsonToFormData = (json: Record<string, any>) => {
  try {
    const data = new FormData();

    for (let k in json) {
      data.append(k, json[k]);
    }

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Wrapper: React.FC<WrapperProps> = ({
  children,
  siteUrl,
  formId,
  url,
}) => {
  const [isSent, setSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState<string | null>(null);

  const apiUrl =
    url ||
    `${siteUrl}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback/`;

  const formSubmitHandler = (event: React.FormEvent, payload: Record<string, any>) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    fetch(apiUrl, {
      method: "POST",
      body: jsonToFormData(payload),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.status !== "mail_sent") throw resp.message;
        setSent(true);
      })
      .catch((error) => {
        setError(error.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const Form = cloneElement(children, {
    handler: formSubmitHandler,
    isLoading,
    isSent,
    hasError,
  });

  return <div>{url || (siteUrl && formId) ? Form : <ErrorMessage />}</div>;
};

export default Wrapper;