import React, { useState } from 'react';
import { ApplicationContext, defaultSettings } from '../context/context';

interface Props {
  children: React.ReactNode;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useState(defaultSettings.dark);
  const toggle = () => setDark(!dark);

  return (
    <ApplicationContext.Provider value={{ dark, toggle }}>{children}</ApplicationContext.Provider>
  );
};

export default ContextProvider;
