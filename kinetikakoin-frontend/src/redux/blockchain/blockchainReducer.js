// Initial state (of the dapp)
const initialState = {
    loading: false,
    account: null,
    gearToken: null,
    web3: null,
    errorMsg: "",
};

// State after connection attempts through Reducer
const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONNECTION_REQUEST":
            return {
                ...initialState,
                loading: true,
            }
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false,
                account: action.payload.account,
                gearToken: action.payload.gearToken,
                web3: action.payload.web3,
            };
        case "CONNECTION_FAILED":
            return {
                ...initialState, // Set everythiung to initial (default) state
                loading: false,
                errorMsg: action.payload,
            };
        case "UPDATE_ACCOUNT":
            return {
                ...state,
                account: action.payload.account,
            };
        default:
            return state;
    }
}

export default blockchainReducer;