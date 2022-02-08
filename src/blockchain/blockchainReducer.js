const initialState = {
    loading: false,
    account: null,
    gearToken: null,
    web3: null,
    errorMsg: "",
};

const blockchainReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONNECTION_REQUEST":
            return {
                ...initialState,
                loading: true,
            };
        case "CONNECTION_SUCCESS":
            return {
                ...state,
                loading: false
            }
    }
}