
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    name,
    email, 
    password
  }


  const config = {
    headers: {
      'Content-Type' : 'application/json'
    }
  }




  const submitHandler = async (e) => {
    e.preventDefault();

    const user = await axios.post('api/register', data, config)
    
  }
  return (
    <div className="App">
      <h2>Register New User</h2>

      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
        <label>Email: </label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label>Password: </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}  />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
