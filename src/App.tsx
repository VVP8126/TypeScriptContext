import React from 'react';
import './styles/App.css';
import ContextProvider from './provider/ContextProvider';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <h1>React Context with TypeScript settings</h1>
      <ContextProvider>
        <Toggle />
      </ContextProvider>
    </div>
  );
}

export default App;
