import React from 'react';

const ButtonList = ({ options, handleClick }) => {
  return options.map((option, i) => (
    <React.Fragment key={i}>
      <button onClick={() => handleClick(option)}>{option} </button>
    </React.Fragment>
  ));
};

export default ButtonList;
