import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertBanner = ({ message, variant }) => {
  const alertMessage =
    message || 'An unexpected error occured. Please try again later.';
  const alertVariant = variant || 'danger';
  return (
    <Alert key={variant} variant={alertVariant}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
