import React from 'react';

interface LoginProps {
 name:string
}

const Login: React.FC<LoginProps> = () => {
  return (
    <div>
      <h1>Login</h1>
      {/* Add your login form and content here */}
    </div>
  );
};

export default Login;