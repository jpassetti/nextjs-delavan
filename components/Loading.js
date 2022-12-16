import cx from 'classnames';

const Loading = ( { message, showSpinner, showMessage, visible, hasVisibilityToggle } ) => {
    let loadingClasses = cx({
        invisible: ! visible && hasVisibilityToggle
    });
    return (
    <div className={loadingClasses}>
      
          { showSpinner ? (
            <p>Spinner icon goes here.</p>
          ) : null }
          { showMessage ? message : null }
      
    </div>
  );
};

export default Loading;