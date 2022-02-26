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
  //const [loading, setLoading] = useState(false);

  console.log(data);
  //console.table(blockchain);

  // Minting NFT function
  const mintNFT = (_account, _name) => {
    blockchain.gearToken.methods
      .createRandomGear(_name)
      .send({from: _account, value: 1000000000000000000})
      .once("error", (err) => {
        console.log(err); // Log the error if (`once`) is used
      })
        .then((receipt) => {
        console.log(receipt);
        dispatch(fetchData());
      });
  };

  useEffect(() => {
    if(blockchain.account !== "") {
      dispatch(fetchData(blockchain.account));
    }
  },[blockchain.account]); // Run this useEffect whenever the blockchain's account is updated

return <s.Screen>
  {blockchain.account === "" || blockchain.gearToken === null ? (
    <s.Container flex={1} ai={"center"} jc={"center"}>
    <s.TextTitle>Connect to our game</s.TextTitle>
    <s.SpacerSmall />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(connect());
        }}
      >
        CONNECT
      </button>
      <s.SpacerSmall />
      <s.TextTitle>Welcome to our game</s.TextTitle>
      <s.SpacerSmall />
        <button
          onClick={(e) => {
            e.preventDefault();
            mintNFT(blockchain.account, "Gear");
          }}
        >
          CREATE GEAR NFT
        </button>
      <s.SpacerMedium />
    </s.Container>    
  ) : (
    <s.Container ai={"center"} style={{ padding: "24px" }}>
      <s.TextTitle>Welcome to our game</s.TextTitle>
        <s.SpacerSmall />
          <button
            onClick={(e) => {
              e.preventDefault();
              mintNFT(blockchain.account, "Gear");
            }}
          >
            CREATE GEAR NFT
          </button>
        <s.SpacerMedium />
      </s.Container>
  )}
  </s.Screen>
}

/*
  return <s.Screen>
    {blockchain.account === "" || blockchain.gearToken === null ? (
      <s.Container flex={1} ai={"center"} jc={"center"}>
        <s.TextTitle>Connect to our game</s.TextTitle>
        <s.SpacerSmall />
        <button
          onClick={(e) => {
            e.preventDefault(); // prevent default form submit
            dispatch(connect());
          }}
        >
          CONNECT
        </button>
        <s.SpacerSmall />
      </s.Container>
    ) : (
      <s.Container ai={"center"} style={{ padding: "24px" }}>
        <s.TextTitle>Welcome to our game</s.TextTitle>
        <s.SpacerSmall />
        <button
          onClick={(e) => {
            e.preventDefault(); 
            mintNFT(blockchain.account, "Gear"); // `"Gear"` is the name of the NFT being minted -> create function to generate random name (variable) later TO-DO TODO To Do
          }}
        >
          CREATE/MINT GEAR NFT
        </button>
        <s.SpacerMedium />
      </s.Container>
    )}
  </s.Screen>
}
*/
export default App;