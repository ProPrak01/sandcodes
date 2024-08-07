// Signup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
const Signup = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSignup = async () => {
    try {
      const response = await fetch('https://temp-server-sandcode.vercel.app/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (response.ok) {
        navigate('/login');
      } else {
        const error = await response.json();
        console.error('Signup failed:', error);
      }
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className='auth-container'>
      <h2>SIGN UP</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          value={credentials.email}
          onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          placeholder="Password"
          required
        />
        <button className='auth-button' type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default Signup;
