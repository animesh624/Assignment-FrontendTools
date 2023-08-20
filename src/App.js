import React, { useState } from 'react';
import UploadForm from './uploadForm';
import Output from './Output';

function App() {
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleUploadComplete = () => {
    setUploadComplete(true);
  };

  return (
    <div>
      <h1>Real-Time Analytics Dashboard</h1>
      <UploadForm onUploadComplete={handleUploadComplete} />
      {uploadComplete && <Output />}
    </div>
  );
}

export default App;
