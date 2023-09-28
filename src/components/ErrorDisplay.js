import React from 'react';

function ErrorDisplay({ error }) {
  return (
    <div className="error-display">
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default ErrorDisplay;
