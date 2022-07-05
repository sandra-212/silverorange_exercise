import React from 'react';

const List = ({ repos }) => {
  return repos
    .sort((a, b) =>
      new Date(a.created_at).getTime() < new Date(b.created_at).getTime()
        ? 1
        : -1
    )
    .map((repo) => {
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

export default List;
