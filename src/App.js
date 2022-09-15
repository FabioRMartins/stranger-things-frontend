import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const { NODE_ENV } = process.env;

function App() {
  return (
    <div className="App">
      { NODE_ENV === 'true' && <h1>Em desenvolvimento</h1>}
      <StrangerThings />
    </div>
  );
}

export default App;
