import React, {useEffect, useState} from 'react'
import InputUser from './components/InputUser'

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api")
    .then(response => response.json())
    .then(data => setBackendData(data))
  }, []);

  const handleAddUser = (newUser) => {
    fetch("/api/addUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({newUser}),
    })
    .then(response => response.json())
    .then(data => setBackendData(data.users));
  }

  return (
    <div>
      {(typeof backendData.users === "undefined") ? (
        <p>Loading...</p>
      ) : (
        <div>
          <InputUser onAddUser={handleAddUser} />
          {backendData.map((user, i) => (
            <p key={i}>{user}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default App