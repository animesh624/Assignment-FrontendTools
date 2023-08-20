import React, { useState } from 'react';
import axios from 'axios';

function UploadForm({ onUploadComplete }) {
  const [fileContent, setFileContent] = useState('');

  const handleFileChange = e => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = () => {
        setFileContent(reader.result);
      };

      reader.readAsText(selectedFile);
    }
  };

  const handleSubmit = async () => {
    if (!fileContent) {
      alert('Please select a file');
      return;
    }

    try {
      const jsonData = JSON.parse(fileContent);
      const response = await axios.post('https://animesh624-assignment-backendtools2.onrender.com/api/v1/events', jsonData);
      console.log(response.data); // Assuming the server sends back some response
      onUploadComplete();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default UploadForm;
