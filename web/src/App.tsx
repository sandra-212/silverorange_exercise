import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';
import './App.css';

export function App() {
  const [repos, setRepos] = useState<any[]>([]);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => setError(true));
  }, []);

  return (
    <>{error ? <>{'error, please reload'}</> : <RepoList repos={repos} />}</>
  );
}
