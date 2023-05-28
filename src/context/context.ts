import React from 'react';

export interface ContextInterface {
  dark: boolean;
  toggle?: () => void;
}

export const defaultSettings = {
  dark: false,
};

export const ApplicationContext = React.createContext<ContextInterface>(defaultSettings);
