import React, { useState, useEffect } from 'react';
import List from './List';
import ButtonList from './ButtonList';

const RepoList = ({ repos }) => {
  const [filteredRepos, setFilteredRepos] = useState(repos);

  const languageTypes = [];
  repos.forEach((repo) => languageTypes.push(repo.language));

  const languages = new Set(languageTypes);
  const options = Array.from(languages);

    const filtered = repos.filter((repo) => repo.language === lg);
    setFilteredRepos(filtered);
  };

  useEffect(() => {
    setFilteredRepos(repos);
  }, [repos]);
  return (
    <>
      <ButtonList options={options} handleClick={handleClick} />
      <List repos={filteredRepos} />;
    </>
  );
};

export default RepoList;
