import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import getTopics from './api/fetch-api-service';

import NavBar from './components/NavBar/NavBar';
import TopicCard from './components/TopicCard/TopicCard';

function App() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics()
  })

  return (
    <div className="App">
      {/* NavBar items should act as filters to filter Cards by topic - Limit items to main categories */}
      <NavBar />
      {/* Cards sorted by most recent, regardless of topic */}
      <TopicCard />
    </div>
  );
}

export default App;
