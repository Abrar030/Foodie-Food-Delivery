import React, { useState } from 'react';
import { icons } from '../../assets/assets';
import './Login.css';

const LoginPage = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  const handleCross = () => {
    setShowLogin(false);
  };

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={handleCross} src={icons.cross} alt="Close" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}

      </form>
    </div>
  );
};

export default LoginPage;
