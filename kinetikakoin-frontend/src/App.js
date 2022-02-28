import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import * as s from "./styles/globalStyles.js";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain); // blockchain state defined in `redux/blockchain`

  console.table(blockchain);

  useEffect(() => {
    dispatch(connect());
  }, [dispatch]);

  return (
    <div>
      <p>
        Our game
      </p>
      <button>Connect
      </button>
    </div>
  );
}

export default App;
