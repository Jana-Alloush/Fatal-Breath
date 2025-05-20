import React from 'react';
import './SignUpForm.css';
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";

const SignUpForm = ({ onSwitch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign up logic here
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    onSwitch(); // Switch to login form
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        
        <div className="input-box">
          <input type="text" placeholder='Full Name' required />
          <FaUser className='icon' />
        </div>
        
        <div className="input-box">
          <input type="email" placeholder='Email' required />
          <FaEnvelope className='icon' />
        </div>
        
        <div className="input-box">
          <input type="tel" placeholder='Phone Number' required />
          <FaPhone className='icon' />
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        
        <div className="input-box">
          <input type="password" placeholder='Confirm Password' required />
          <FaLock className='icon' />
        </div>

        <div className="terms">
          <label>
            <input type="checkbox" required /> 
            I agree to the <a href="#">Terms & Conditions</a>
          </label>
        </div>
        
        <button type="submit">Register</button>
        
        <div className="login-link">
          <p>Already have an account? {' '}
            <a href="#" onClick={handleLoginClick}>Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;