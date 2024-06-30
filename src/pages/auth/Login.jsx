// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const { dispatch } = useAuth();
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form submission reload
  
    try {
      console.log('Logging in...');
      const response = await fetch('https://temp-server-sandcode.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        // Handle non-successful response (like 400 or 500 errors)
        console.error('Login failed:', response.statusText);
        return;
      }
      console.log('Login successful');

      const data = await response.json();
      console.log(data);

      const { email, token } = data;
      const user = { email: email };
      dispatch({ type: 'LOGIN', payload: { user, token } });
      navigate('/');
  
      console.log('Login successful');
    } catch (error) {
      // Handle network errors or exceptions
      console.error('Login error:', error);
    }
  };
  return (
    <div className='auth-container'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button className="auth-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
