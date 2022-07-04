import React, { useState, useEffect } from 'react';
import RepoList from './components/RepoList';
import './App.css';

export function App() {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:4000/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }, []);

  const sortedRepos = repos.sort((a: any, b: any) =>
    new Date(a.created_at).getTime() < new Date(b.created_at).getTime() ? -1 : 1
  );

  return <RepoList repos={sortedRepos} />;
}
