import React, { useState } from 'react';
import LoginForm from './Components/auth/LoginForm';
import SignUpForm from './Components/auth/SignUpForm';
import './App.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="app-container">
      {showSignUp ? (
        <SignUpForm onSwitch={() => setShowSignUp(false)} />
      ) : (
        <LoginForm onSwitch={() => setShowSignUp(true)} />
      )}
    </div>
  );
}

export default App;