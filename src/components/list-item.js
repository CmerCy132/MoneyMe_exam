import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { triggerModal } from "../actions/modalAction";
import { getSongDetails } from "../actions/searchAction";

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

const _goToDetails = (props, dispatch) => {
  console.log("get props : ", props);
  dispatch(triggerModal(true));
  dispatch(getSongDetails(props.trackId));
  // navigation.navigate("Details", props);
};

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={() => _goToDetails(props.item, props.dispatch)}>
      <View style={styles.container}>
        <Text variant="TitleLarge">Song: {props.item.trackName}</Text>
        <Text variant="LabelLarge">Artist: {props.item.artistName}</Text>
        <Text variant="BodyLarge">Album: {props.item.collectionName}</Text>
        <Text variant="BodyLarge">
          Release Date: {convertDate(props.item.releaseDate)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default ListItem;
