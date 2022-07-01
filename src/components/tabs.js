import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

const Tabs = (props) => {
  function _albumNameClick() {
    props.setSort(true);
    props.handleSortAlbum();
  }

  function _releaseDateClick() {
    props.setSort(false);
    props.handleSortRelease();
  }

  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Sort by :</Text>
      <View style={styles.tabContainer}>
        <Button
          mode={props.sort ? "contained" : "outlined"}
          onPress={() => _albumNameClick()}
        >
          Album Name
        </Button>
        <Button
          mode={!props.sort ? "contained" : "outlined"}
          onPress={() => _releaseDateClick()}
        >
          Release Date
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 10,
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default Tabs;
