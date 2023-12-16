import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';
import DataRenderer from './components/DataRenderer';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [receivedData, setReceivedData] = useState('');
  const [summarizedData, setSummarizedData] = useState('');


  //* <-- GET Request.
  useEffect(() => {
    fetch("/api")
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.users)) {
          setBackendData(data.users);
        } else {
          console.error("Data is not in the expected format:", data);
        }
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

//* <== Sends POST requests to the server, then retrieves the response.
  const handleSubmit = async (userInput) => { 
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({paragraph: userInput}),
      });

      if (response.ok) {
        const data = await response.json();
        setReceivedData(data.confirmation);
        setSummarizedData(data.summarizedText); 
      }
      else {
        console.error('Failed to submit data');
      }
    }
    catch (error) {
      console.error('Error: ', error);
    }
  };


  return (
    <div>
      <div className='container'>
      <h1 className='text-center mt-4'>
        StudyCards
      </h1>
      <br />
      <DataRenderer receivedData={receivedData} />
      <hr />
      <InputForm onSubmit={handleSubmit} />
      </div>
    </div>
        
  );
}

export default App;
