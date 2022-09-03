import './App.css';
import React, { useEffect, useState } from 'react';
import { Planets } from './components/Planets';
import { PlanetForm } from './components/PlanetForm';
import { Container } from 'semantic-ui-react';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => { // Make an API call to retrieve planets from the database
    fetch('/planets').then(response =>
      response.json().then(data => {
        setPlanets(data.planets);
      })
    );
  }, []);

  console.log(planets);

  return (
    <div className="App">
      <Container style={{ marginTop: 40 }}>
        <PlanetForm onNewPlanet={planet => setPlanets(currentPlanets => [...currentPlanets, planet])} />
        <Planets planets={planets} />
      </Container>
    </div>
  );
}

export default App;
