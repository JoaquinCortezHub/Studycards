import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from './components/InputForm';

function App() {
  const [backendData, setBackendData] = useState([]);

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


  const handleSubmit = async (userInput) => {
    console.log("User Input: ", userInput);
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
        console.log(data.confirmation);
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
      <h1 className='text-align'>
        StudyCards
      </h1>
      <br />
      <InputForm onSubmit={handleSubmit} />
      </div>
    </div>
        
  );
}

export default App;
