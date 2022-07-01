import * as types from "../actions/types";

const initialState = {
  songs: [],
};

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case types.FETCH_ARTISTS:
            
        return {
            ...state,
            songs : action.data
        }
    
        default:
            return state
    }
}
