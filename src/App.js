import React, { useEffect } from "react";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "./redux/blockchain/blockchainActions";
import { fetchData } from './redux/data/dataActions';
import * as s from "./styles/globalStyles";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);
  const data = useSelector(state => state.data);

  console.log(data);
  //console.table(blockchain);

  useEffect(() => {
    if(blockchain.account != "") {
      dispatch(fetchData());
    }
  },[blockchain.account]); // Run this useEffect whenever the blockchain's account is updated

  return <s.Screen>
    {blockchain.account !== "" || blockchain.gearToken !== null ? (
      <s.Container flex={1} ai={"center"} jc={"center"}>
        <s.TextTitle>
          Connect to our game
        </s.TextTitle>
        <s.SpacerSmall />
        <button onClick={(e) => {
          e.preventDefault(); // prevent default form submit
          dispatch(connect());
        }}>CONNECT</button>
      </s.Container>
    ) : (
      <s.Container ai={"center"} style={{ padding: "24px" }}>
        <s.TextTitle>
          Welcome to our game
        </s.TextTitle>
        <s.SpacerSmall />
      </s.Container>
    )}
  </s.Screen>
}

export default App;