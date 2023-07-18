// import React from 'react';
// import { Link } from 'react-router-dom';

const Login = ({ togglePage }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Click the button below to login</p>
      {/* <Link to='/profile'> */}
      <button onClick={() => togglePage(true)}>Login</button>
      {/* </Link> */}
      {/* <button onClick={() => togglePage(true)}>Login</button> */}
    </div>
  );
};

export default Login;
