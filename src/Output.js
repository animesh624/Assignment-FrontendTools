import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Output() {
  const [output, setOutput] = useState(null);

  const fetchOutput = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/metrics');
      setOutput(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOutput();
  }, []);

  return (
    <div>
      <pre>{JSON.stringify(output, null, 2)}</pre>
    </div>
  );
}

export default Output;
