import Web3 from "web3";
import GearToken from "./GearToken.json";

const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    };
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
        payload: payload, // Payload is taken from the state & action.payload from `blockchainReducer.js`
    };
};

const connectFailed = (payload) => {
    return {
        type: "CONNECTION_FAILED",
        payload: payload,
    };
};

const updateAccountRequest = (payload) => {
    return {
        type: "UPDATE_ACCOUNT",
        payload: payload,
    };
};

export const connect = () => {
    return async (dispatch) => {
        dispatch(connectRequest());
        if (window.ethereum) { // Yes if Metamask is installed (if yes, follow through the condition)
            let web3 = new Web3(window.ethereum); // Turn browser into blockchain-compatible point to interact with this dapp
            try {
                const accounts = await window.ethereum.request({ // async function that is being awaited
                    method: "eth_accounts", // returns array of accounts available/connected to the dapp from Metamask extension
                });
                console.log("Account ", accounts[0]);
                // accounts[0] -> first entry in the above arra
                const networkId = await window.ethereum.request({
                    method: "net_version",
                });
                console.log("NetworkID ", networkId);
                const gearTokenNetworkData = await GearToken.networks[networkId];
                if (gearTokenNetworkData) {
                    const gearToken = new web3.eth.Contract(
                        GearToken.abi,
                        gearTokenNetworkData.address // Address & network id from `GearToken.json`
                    );
                    dispatch(
                        connectSuccess({
                            account: accounts[0],
                            gearToken: gearToken,
                            web3: web3,
                        })
                    );
                    // Add listener for account changes
                    window.ethereum.on("accountsChanged", (accounts) => {
                        dispatch(updateAccount(accounts[0]));
                    });
                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                } else {
                    dispatch(connectFailed("Change network to Polygon."));
                }
            } catch (err) {
                dispatch(connectFailed("Something went wrong."));
            }
        } else { // If the `if` function returns no, as in the browser cannot be connected to the blockchain as it does not have a wallet extension
            dispatch(connectFailed("Install Metamask."));
        }
    };
};

export const updateAccount = (account) => {
    return async (dispatch) => {
        dispatch(updateAccountRequest({ account: account }));
        //dispatch(fetchData(account));
    };
};