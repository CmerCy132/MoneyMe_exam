import axios from "axios";

const APPLE_API = "https://itunes.apple.com/search?term=";

export const fetchArtists = (artistName) => (dispatch) => {
  axios.get(`${APPLE_API}${artistName}`).then((response) => {
    let tempRes = response.data.results.filter(item => item.wrapperType == 'track');
    console.log(tempRes)
    dispatch({
        type : "FETCH_ARTISTS",
        data : tempRes
    })
  });
};
