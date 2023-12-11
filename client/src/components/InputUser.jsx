import React, {useState} from 'react';

const InputUser = ({onAddUser}) => {
    const [newUser, setNewUser] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddUser(newUser);
        setNewUser('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                New User:
                <input type="text" 
                        value={newUser} 
                        onChange={(e) => setNewUser(e.target.value)} 
                />
            </label>
            <button type='submit'>Add new user</button>
        </form>
    );
};

export default InputUser;