import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {connect} from "./redux/blockchain/blockchainActions";
import * as s from "./styles/globalStyles";

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector(state => state.blockchain);

  console.table(blockchain);

  useEffect(() => {
  }, [dispatch]);

  return <s.Screen>
    {blockchain.account !== "" || blockchain.gearToken !== null ? (
    <s.Container flex={1} ai={"center"} jc={"center"}>
      <s.SpacerSmall />
      <button onClick={(e) => {
        e.preventDefault(); // prevent default form submit
        dispatch(connect());
      }}>CONNECT</button>
    </s.Container>
    ) : (
      <s.Container>
        <s.TextTitle>
          Connect to our Game
        </s.TextTitle>
      </s.Container>
    )}
  </s.Screen>
}

export default App;
