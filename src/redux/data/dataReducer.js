const initialState = {
    loading: false,
    allGears: [],
    error: false,
    errorMsg: "",
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_DATA_REQUEST":
            return {
                ...state,
                loading: true,
            };
        case "CHECK_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                allGears: action.payload.allGears,
            };
        case "CHECK_DATA_FAILED":
            return {
                ...initialState,
                loading: false,
                error: true,
                errorMsg: action.payload,
            };
        default:
            return state;
    }
};

export default dataReducer;