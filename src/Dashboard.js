import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ onLogout }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/mahasiswa`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setData(res.data))
    .catch(err => alert('Token expired atau tidak valid'));
  }, []);

  return (
    <div>
      <h1>Data Mahasiswa</h1>
      <ul>
        {data.map((m, i) => <li key={i}>{m.nama} - {m.nim}</li>)}
      </ul>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
