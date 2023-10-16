import React from 'react';
import { isEmpty } from 'lodash';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  if (isEmpty(text)) {
    return null;
  }

  return (
    <div role="alert">
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;