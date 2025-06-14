import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  return loggedIn ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={() => setLoggedIn(true)} />;
}

export default App;
//ini adalah komentar