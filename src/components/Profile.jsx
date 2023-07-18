// import React from 'react'
// import { Link } from 'react-router-dom';/

const Profile = ({ togglePage }) => {
  return (
    <div>
      <h1>You are Logged In</h1>
      <p>Click the button below to logout</p>
      {/* <Link to='/home'> */}
      <button onClick={() => togglePage(false)}>Logout</button>
      {/* </Link> */}
      {/* <button onClick={() => togglePage(false)}>Logout</button> */}
    </div>
  );
};

export default Profile;
