import React from 'react';
import './App.css';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar /> {/* NavBar items should act as filters to filter Cards by topic - Limit items to main categories */}

      {/* Cards sorted by most recent, regardless of topic */}
    </div>
  );
}

export default App;
