
import React, {useState} from 'react';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext();

function App() {

  const [theme, setTheme] = useState('green');

  return (
  <ThemeContext.Provider value={ { backgroundColor: theme } }>
  counter
    <Counter initialCount = {4} />
    counterhooks
    <CounterHooks initialCount = {0} secondaryCount = {2} />
    <button onClick={() => setTheme(theme === 'green' ? 'red' : 'green')}>SetColor</button>
  </ThemeContext.Provider>
  );
}

export default App;
