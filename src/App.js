import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

const baseUrl = "https://stranger-things-backend.vercel.app/";

function App() {
  return (
    <div className="App">
      <StrangerThings />
    </div>
  );
}

export default App;
