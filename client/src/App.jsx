import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);
  const [newUser, setNewUser] = useState('');

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

  //* <-- Gets called when the submit button is pressed and handles POST requests.
  const handleAddUser = () => {
    if(newUser.trim() !== '') {
      fetch('/api/addUser', { //* <-- Gives the server the correct parameters.
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newUser }),
      })
      .then(response => response.json())
      .then( data => {
        if(Array.isArray(data.users)) {
          setBackendData(data.users);
          setNewUser('');
        }
        else {
          console.error("Data is in the wrong format: ", data);
        }
      })
      .catch(error => {
        console.error("Error adding user: ", error);
      })
    }
  }

  return (
    <div>
      <div>
        <input 
        type="text"
        value={newUser}
        onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      {backendData.lenght === 0 ? (
        <p>Loading...</p>
      ) : (
        backendData.map((user, i) => (
          <p key={i}> {user} </p>
        ))
      )}
    </div>
  );
}

export default App;
