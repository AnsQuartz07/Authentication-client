import React from 'react';

function FileDownload({ shortLink }) {
  return (
    <div className="file-download">
      <p>Download Link:</p>
      <a href={shortLink} download>
        Download File
      </a>
    </div>
  );
}

export default FileDownload;
