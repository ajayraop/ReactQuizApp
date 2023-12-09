import React, { useState } from 'react';
import axios from 'axios';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Simulating a login request using Axios
    axios
      .post('http://localhost:3001/login', {
        email,
        password,
      },   {withCredentials: true})
      .then((response) => {
        // Handle successful login
        console.log(response.data);
        setError('');
        alert('Login successful!');
        console.log('Login successful!');
      })
      .catch(error => {
        // Handle login error
        console.error(error);
        setError('Invalid username or password');
      });
  };

  return (
    <div className="container mt-5">
      <h2>Login Form</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="username" className="col-sm-1 col-form-label">
            Email:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="password" className="col-sm-1 col-form-label">
            Password:
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
