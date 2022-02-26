import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain); // blockchain state defined in `redux/blockchain`

  console.table(blockchain);

  useEffect(() => {
    dispatch(connect());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Account: {blockchain.account}.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
