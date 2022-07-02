import * as types from "../actions/types";

const initialState = {
  isVisible: false,
};

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.TRIGGER_MODAL:
      return {
        ...state,
        isVisible: action.data,
      };

    default:
      return state;
  }
}
