import React, { MouseEvent, useContext } from 'react';
import { ApplicationContext } from '../context/context';

const Toggle = () => {
  const { dark, toggle } = useContext(ApplicationContext);
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    if (toggle) toggle();
  };

  return (
    <button onClick={(e) => handleClick(e)} className={dark ? 'dark' : ''}>
      Toggle theme
    </button>
  );
};

export default Toggle;
