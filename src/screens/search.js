import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as searchActions from "../actions/searchAction";
import Components from "../components";
import styles from "../../styles";

const moment = require("moment");
const convertDate = (props) => {
  try {
    const samp = new Date(props);
    const newDate = moment(samp).format("MMM YYYY");
    // console.log("get new date : ", newDate);
    return newDate;
  } catch (error) {
    console.log("get error : ", error);
  }
};
const renderItem = ({ item }) =>
  item && (
    <View
      style={{
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}
    >
      <Text>{item.artistName}</Text>
      <Text>{item.collectionName}</Text>
      <Text>{convertDate(item.releaseDate)}</Text>
    </View>
  );

const getUserPref = async () => {
  try {
    const value = await AsyncStorage.getItem("userPref")
    if (value !== null) {
      return value
    } else {
      return true
    }
  } catch (error) {
    return true
  }
  

};

const Search = () => {
  const items = useSelector((state) => state.search.songs);
  const dispatch = useDispatch();
  const [sort, setSort] = useState(getUserPref());

  function Search(text) {
    dispatch(searchActions.fetchArtists(text, sort));
  }

  function _handleSortAlbum() {
    dispatch(searchActions.sortByAlbum(items));
  }
  function _handleSortRelease() {
    dispatch(searchActions.sortByRelease(items));
  }

  const setUserPref = async (newValue) => {
    try {
      await AsyncStorage.setItem("userPref", newValue);
      setSort(newValue);
    } catch (error) {
      console.log("error at saving user pref");
    }
  };

  return (
    <View style={styles.container}>
      <Components.SearchBar onChangeText={Search} />
      <Components.Tabs
        setSort={setUserPref}
        sort={sort}
        handleSortAlbum={_handleSortAlbum}
        handleSortRelease={_handleSortRelease}
      />
      <View style={{ display: "flex" }}>
        <FlatList
          data={items ? items : []}
          renderItem={renderItem}
          initialNumToRender={5}
          keyExtractor={(items) => items.trackId}
        />
      </View>
    </View>
  );
};

export default Search;
