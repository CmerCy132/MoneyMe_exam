import React, { useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as searchActions from "../actions/searchAction";
import styles from "../../styles";

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
    </View>
  );

const Search = () => {
  const items = useSelector((state) => state.search.songs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchActions.fetchArtists("test"));
    console.log("get items : ", items);
  }, []);

  return (
    <View style={styles.container}>
        <Text>Testing</Text>
      <FlatList
        data={items ? items : []}
        renderItem={renderItem}
        initialNumToRender={5}
      />
    </View>
  );
};

export default Search;
