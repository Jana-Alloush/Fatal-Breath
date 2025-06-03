import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      navigate("/admin");
    } else if (username === "manager" && password === "manager") {
      navigate("/manager")
    } else {
      alert("Invalid username or password.");
    }
  };

  const goToSignUp = (e) => {
    e.preventDefault();
    navigate("/register");
    // console.log('Navigating to signup...');
  };

  /* const goToForgetPassword = (e) => {
    e.preventDefault();
    navigate('/ForgetPassword');
   // console.log('Navigating to signup...');
  };
*/
  return (
    <div className="login-page-container">
      {/* Branding Section */}
      <div className="branding-section">
        <div className="branding-content">
          <h1 className="branding-title">FATAL BREATH</h1>
        
          <h2 className="branding-subtitle">
            Your Guardian Angel Against Toxic Gases!
          </h2>
          <p className="branding-text">
            Protect your family from the silent killer with FatalBreath.
          </p>
        </div>
      </div>

      {/* Login Form Section */}
      <div className="form-section">
        <div className="login-form-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <div className="input-box">
              <input
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <FaUser className="icon" />
            </div>

            <div className="input-box">
              <input
                id="password"
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
                Don't have an account?{" "}
                <a href="#" onClick={goToSignUp}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
