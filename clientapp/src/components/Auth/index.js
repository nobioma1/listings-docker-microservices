import React, { useState } from 'react';
import Signup from './SignUp';
import Login from './Login';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div>
      {isSignUp ? (
        <Signup setIsSignUp={setIsSignUp} />
      ) : (
        <Login setIsSignUp={setIsSignUp} />
      )}
    </div>
  );
};

export default Auth;
