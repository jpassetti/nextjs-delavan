import {isEmpty} from 'lodash';

const ErrorMessage = ( { text } ) => {
  if ( isEmpty( text ) ) {
    return null;
  }

  return (
    <div role="alert">
      <p>{ text }</p>
    </div>
  );
};

export default ErrorMessage;