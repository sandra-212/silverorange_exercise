import React, { useState, useEffect } from 'react';
import List from './List';
import ButtonList from './ButtonList';

const RepoList = ({ repos }) => {
  const [filteredRepos, setFilteredRepos] = useState(repos);
  const [options, setOptions] = useState([]);

  const handleClick = (lg) => {
    const filtered = repos.filter((repo) => repo.language === lg);
    setFilteredRepos(filtered);
  };

  useEffect(() => {
    setFilteredRepos(repos);
  }, [repos]);

  useEffect(() => {
    const languageTypes = [];
    repos.forEach((repo) => languageTypes.push(repo.language));
    const languages = new Set(languageTypes);
    const buttonOptions = Array.from(languages);
    setOptions(buttonOptions);
  }, [repos]);

  return (
    <>
      <ButtonList options={options} handleClick={handleClick} />
      <List repos={filteredRepos} />
    </>
  );
};

export default RepoList;
