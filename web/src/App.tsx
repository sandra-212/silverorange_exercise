import React, { useState, useEffect } from 'react';

import './App.css';

export function App() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(repos);
  return <ul>{repos.map((repo) => repo.id)}</ul>;
}
