import './App.css';
import React, { useEffect, useState } from 'react';
import { Planets } from './components/Planets';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => { // Make an API call to retrieve planets from the database
    fetch('/planets').then(response =>
      response.json().then(data => {
        setPlanets(data);
      })
    );
  }, [])

  return (
    <div className="App">
      <Planets planets={planets} />
    </div>
  );
}

export default App;
