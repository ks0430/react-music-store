import { FETCH_TODOS } from "../actions/types"

export default (state = {}, action) => {
    console.log("In reducer before ");
    console.log(state);
    switch (action.type) {
        case FETCH_TODOS:
            return action.payload;
        default:
            return state;
    }
}