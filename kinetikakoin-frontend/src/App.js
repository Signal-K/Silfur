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

  return (
    <s.Screen /*style={{ backgroundColor: "pink" }}*/>
      <s.Container flex={1} ai={"center"} jc={"center"} /*style={{ backgroundColor: "green", /*minHeight: "100vh" *//*}}*/>
        <s.TextTitle>
          Connect to the game!
        </s.TextTitle>
        <s.SpacerSmall />
        <button onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
        }}
        >CONNECT</button>
      </s.Container>
    </s.Screen >
  );
}

export default App;