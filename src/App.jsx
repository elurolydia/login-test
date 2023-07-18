import { useState, useEffect } from 'react';

// import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('currentStatus')) || []
  );
  const togglePage = (status) => {
    setIsAuthenticated(status);
  };

  useEffect(() => {
    localStorage.setItem('currentStatus', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
  return (
    <>
      {!isAuthenticated ? (
        // <Route path='/home' element={<Login togglePage={togglePage} />} />
        <Login togglePage={togglePage} />
      ) : (
        <Profile togglePage={togglePage} />
        // <Route path='/profile' element={<Profile togglePage={togglePage} />} />
        // {/* // <Login togglePage={togglePage} /> */}
      )}
    </>
  );
}

export default App;
