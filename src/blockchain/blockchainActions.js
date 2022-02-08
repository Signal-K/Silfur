// Constants
import Web3 from "web3";
import GearToken from "../../build/contracts/GearToken.json";
//Log
import { fetchData} from "../data/dataActions";

const connectRequest = () => {
    return {
        type: "CONNECTION_REQUEST",
    };
};

const connectSuccess = (payload) => {
    return {
        type: "CONNECTION_SUCCESS",
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
        if (window.ethereum) {
            let web3 = new Web3(window.ethereum);
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_accounts",
                });
                const networkId = await window.ethereum.request({
                    method: "net_version",
                });
                console.log(networkId);
                if (networkId == 137) {
                    const gearToken = new web3.eth.Contract(
                        GearToken.abi,
                        "0xbDE17f0284769996613652642dCab1db36Fcb54E"
                    );
                    dispatch(
                        connectSuccess({
                            account: accounts[0],
                            gearToken: gearToken,
                            web3: web3
                        })
                    );
                    // Add listeners start
                    window.ethereum.on("accountsChanged", (accounts) => {
                        dispatch(updateAccount(accounts[0]));
                    });
                    window.ethereum.on("chainChanged", () => {
                        window.location.reload();
                    });
                    // Listeners end
                } else {
                    dispatch(connectFailed("Change network to Polygon."));
                }
            } catch (err) {
                dispatch(connectFailed("Error: " + err));
            }
        };
    };
        
    export const updateAccount = (account) => {
        return async (dispatch) => {
            dispatch(updateAccountRequest({ account: account }));
            dispatch(fetchData(account));
        };
    };
};