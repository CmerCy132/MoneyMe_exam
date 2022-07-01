import axios from "axios";

const APPLE_API = "https://itunes.apple.com/search?term=";

export const fetchArtists =
  (artistName = "", sort = true) =>
  (dispatch) => {
    axios
      .get(`${APPLE_API}${artistName.trim()}`)
      .then((response) => {
        let tempRes = response.data.results.filter(
          (item) => item.kind == "song"
        );

        sort
          ? tempRes.sort((a, b) =>
              a.collectionName > b.collectionName
                ? 1
                : b.collectionName > a.collectionName
                ? -1
                : 0
            )
          : tempRes.sort(
              (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
            );
        dispatch({
          type: "FETCH_ARTISTS",
          data: tempRes,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_ARTISTS",
          data: [],
        });
      });
  };
export const sortByAlbum =
  (list = []) =>
  (dispatch) => {
    const tempList = list
      .slice()
      .sort((a, b) =>
        a.collectionName > b.collectionName
          ? 1
          : b.collectionName > a.collectionName
          ? -1
          : 0
      );
    dispatch({
      type: "SORT_BY_ALBUM",
      data: tempList,
    });
  };
export const sortByRelease =
  (list = []) =>
  (dispatch) => {
    const tempList = list
      .slice()
      .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    dispatch({
      type: "SORT_BY_RELEASE",
      data: tempList,
    });
  };
