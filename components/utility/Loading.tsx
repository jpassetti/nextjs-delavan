import React from 'react';
import cx from 'classnames';

interface LoadingProps {
  message: string;
  showSpinner: boolean;
  showMessage: boolean;
  visible: boolean;
  hasVisibilityToggle: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  message,
  showSpinner,
  showMessage,
  visible,
  hasVisibilityToggle,
}) => {
  let loadingClasses = cx({
    invisible: !visible && hasVisibilityToggle,
  });

  return (
    <div className={loadingClasses}>
      {showSpinner ? <p>Spinner icon goes here.</p> : null}
      {showMessage ? message : null}
    </div>
  );
};

export default Loading;