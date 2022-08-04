import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
//import randomUser from '../apis/test.js';

const restEndpoint = 'https://randomuser.me/api';
const callRestApi = async () => {
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return React.createElement('h1', null, JSON.stringify(jsonResponse));
};

function RenderResult() {
  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  useEffect(() => {
    callRestApi().then(
      result => setApiResponse(result));
  }, []);

  return(
    <div>
      <h1>React App</h1>
      <p>{apiResponse}</p>
    </div>
  )
}

callRestApi();

const myElement = <h1>Home frontend</h1>
ReactDOM.render(
  <RenderResult />,
  document.querySelector('#root')
)