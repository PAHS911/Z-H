import Login from "../login/Login";
import Signup from "../login/Signup";

import React, { useState } from "react";

const Logsign = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false); // Make sure signup form is hidden
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false); // Make sure login form is hidden
  };

  const handleFormClose = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  return (
    <div className="flex items-center relative">
      <div className="text-white mr-4">
        <button onClick={handleLoginClick}>Login</button>
        <span className="mx-1">/</span>
        <button onClick={handleSignupClick}>Signup</button>
      </div>

      {/* Conditional rendering of forms */}
      {showLogin && (
        <Login onClose={handleFormClose} onSignupClick={handleSignupClick} />
      )}
      {showSignup && <Signup onClose={handleFormClose} />}
    </div>
  );
};

export default Logsign;
