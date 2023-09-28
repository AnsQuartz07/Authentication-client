import React, { useState } from 'react';

function ShortLinkDisplay({ shortLink }) {
  const [isCopied, setIsCopied] = useState(false);

  // Function to copy the short link to the clipboard
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = shortLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopied(true);
  };

  return (
    <div className="short-link-display">
      <p>Short Link:</p>
      <div className="short-link">
        <input type="text" value={shortLink} readOnly />
        <button onClick={copyToClipboard}>
          {isCopied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </div>
    </div>
  );
}

export default ShortLinkDisplay;
