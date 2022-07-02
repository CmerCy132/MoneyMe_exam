import React, { useEffect, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as searchActions from "../actions/searchAction";
import Components from "../components";
import screens from "../screens";
import styles from "../../styles";

const getUserPref = async () => {
  try {
    const value = await AsyncStorage.getItem("userPref");
    if (value !== null) {
      return value;
    } else {
      return true;
    }
  } catch (error) {
    return true;
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
      <View style={{ display: "flex", maxHeight: 600 }}>
        <FlatList
          data={items ? items : []}
          renderItem={(item) => {
            return <Components.ListItem item={item.item} dispatch={dispatch} />;
          }}
          initialNumToRender={5}
          keyExtractor={(items) => items.trackId}
        />
      </View>
      <screens.Details />
    </View>
  );
};

export default Search;
