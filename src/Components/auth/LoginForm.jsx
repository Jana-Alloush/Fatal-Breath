import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    onSwitch();
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <div className="input-box">
          <input id="username" type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input id="password" type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>

        <div className="remember-forget">
          <label htmlFor="remember">
            <input type="checkbox" id="remember" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="register-link">
          <p>
            Don't have an account?{' '}
            <a href="#" onClick={handleRegisterClick}>
              Register
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
