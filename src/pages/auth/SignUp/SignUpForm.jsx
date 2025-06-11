import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaPhone } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../root/api";

const SignUpForm = () => {
  const navigate = useNavigate();
 const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [role, setrole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
     try {
       e.preventDefault();
       setLoading(true);
 
       await RegisterUser(name,username, email, password, role)
 
     
       navigate("/");
     } catch (error) {
       console.error("Registration Error:", error);
  alert(error.message || "Invalid username or password.");
     } finally {
       setLoading(false);
     }
   };
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/");
  };


  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Create Account</h1>

        <div className="input-box">
          <input type="text" value={name}   onChange={(e) => setName(e.target.value)} placeholder="Full Name" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="text"
            value={username}
             onChange={(e) => setUsername(e.target.value)}
            placeholder="User Name"
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaEnvelope className="icon" />
        </div>

        <div className="input-box">
          <input
            type="itext"
            value={role}
            onChange={(e) => setrole(e.target.value)}
            placeholder="role"
            required
          />
          <FaPhone className="icon" />
        </div>

        <div className="input-box">
          <input type="password"   onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <FaLock className="icon" />
        </div>

      

        <div className="terms">
          <label>
            <input type="checkbox" required />I agree to the{" "}
            <a href="#">Terms & Conditions</a>
          </label>
        </div>

        <button className="button" type="submit">
          Register
        </button>

        <div className="login-link">
          <p>
            Already have an account?{" "}
            <a href="#" onClick={handleLoginClick}>
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
