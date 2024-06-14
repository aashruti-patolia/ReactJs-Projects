// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import UserCard from './components/UserCard';

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (err) {
      setError('Failed to fetch user data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="app">
      <h1>Random User Fetching Application</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserCard user={user} />} <br />
      <button onClick={fetchUser}>Fetch New User</button>
    </div>
  );
};

export default App;
