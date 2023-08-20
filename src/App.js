import React, { useState } from 'react';
import UploadForm from './uploadForm';
import Output from './Output';

function App() {
  const [uploadComplete, setUploadComplete] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleUploadComplete = () => {
    setUploadComplete(true);
  };

  const handleShowOutput = () => {
    setShowOutput(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Real-Time Analytics Dashboard</h1>
      <UploadForm onUploadComplete={handleUploadComplete} />
      <div className="d-flex align-items-center mt-3">
        <button
          className="btn btn-primary mr-3"
          onClick={handleShowOutput}
        >
          Show Output
        </button>
        {showOutput && <Output />}
      </div>
    </div>
  );
}

export default App;
