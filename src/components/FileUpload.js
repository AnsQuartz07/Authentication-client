import React, { useState } from 'react';
import BackAction from '../Utils/BackAction';
import ShortLinkDisplay from './ShortLinkDisplay';
import ErrorDisplay from './ErrorDisplay';
import FileDownload from './FileDownload';
// import { uploadFile } from '../Utils/BackAction';
// import '../css/FileUpload';

function FileUpload() {
  // State for file input and error handling
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [shortLink, setShortLink] = useState('');

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a file.');
    }
  };

  const handleDownloadClick = () => {
    BackAction.downloadUrl(shortLink);
  };
  // Function to handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      setError('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await BackAction.uploadFile(formData); // Use Axios for POST request
      console.log(response)
      if (response) {
        // File successfully uploaded
        setShortLink(response);
        // Display the short link or perform other actions
      } else {
        // Handle server errors
        setError('File upload failed. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      setError('Network error. Please try again later.');
    }
  };

  return (
    <div className="file-upload-container">
      <input type="file" onChange={handleFileSelect} />
      <button onClick={handleFileUpload}>Upload</button>
      {error && <ErrorDisplay error={error} />}
      {shortLink && <ShortLinkDisplay shortLink={ shortLink } />}
      <button onClick={handleDownloadClick}>Download File</button>
      {shortLink && <FileDownload shortLink={ shortLink } />}
    </div>
  );
}

export default FileUpload;
