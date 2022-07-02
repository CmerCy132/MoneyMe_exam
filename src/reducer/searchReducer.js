import * as types from "../actions/types";

const initialState = {
  songs: [],
  song: {},
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ARTISTS:
      return {
        ...state,
        songs: action.data,
      };

    case types.SORT_BY_ALBUM:
      return {
        ...state,
        songs: action.data,
      };

    case types.SORT_BY_RELEASE:
      return {
        ...state,
        songs: action.data,
      };

    case types.GET_SONG_DETAILS:
      // console.log("get id :", action.data);
      const songData = state.songs.find((item) => item.trackId == action.data);
      // console.log("get song : ", song);
      return {
        ...state,
        song: songData,
      };

    default:
      return state;
  }
}
