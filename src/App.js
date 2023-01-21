import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

import getTopics from './api/fetch-api-service';

import NavBar from './components/NavBar/NavBar';
import TopicCard from './components/TopicCard/TopicCard';

function App() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const topics = await getTopics()
      console.log(topics.data[0])
      setTopics(topics.data)
   }
   fetchData()
  }, [])

  console.log(topics[0], "STATE")
  return (
    <div className="App">
      {/* NavBar items should act as filters to filter Cards by topic - Limit items to main categories */}
      <NavBar />
      {/* Cards sorted by most recent, regardless of topic */}
      <TopicCard topics={topics}/>
    </div>
  );
}

export default App;
