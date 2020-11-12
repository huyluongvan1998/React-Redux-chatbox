const { state } = require("../data/static-data")

const action = (state, action) => {
    return {
        ...state,
        payload: action.payload
    }
}