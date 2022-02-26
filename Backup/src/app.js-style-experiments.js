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
    dispatch(connect());
  }, [dispatch]);

  return (
    <div 
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "pink",
        height: "100vh"
      }}
    >
      <p>Our Game</p>
      <div>
        <button>Connect</button>
      </div>
    </div>
  );
}

export default App;

// Green & pink divs in return
return <s.Screen style={{backgroundColor: "pink" }}>
    <s.Container flex={1} ai={"center"} jc={"center"} style={{backgroundColor: "green" }}>
      <s.TextTitle>
        Our game
      </s.TextTitle>
      <button>CONNECT</button>
    </s.Container>
  </s.Screen>