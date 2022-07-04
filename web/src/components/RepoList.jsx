import React from 'react';

const RepoList = ({ repos }) => {
  return repos.map((repo) => {
    return (
      <ul key={repo.id}>
        Name: {repo.full_name}
        Desc: {repo.description}
        Lang: {repo.language}
        Forks: {repo.forks_count}
        Date: {repo.created_at}
      </ul>
    );
  });
};

export default RepoList;
