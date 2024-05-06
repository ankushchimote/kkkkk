// App.js

import React from 'react';
import './App.css';
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';

function App() {
  return (
    <div style={{ display:'flex' }}>
      <Left />
      <Middle />
      <Right />
    </div>
  );
}

export default App;
