import React from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import styles from "../../styles";

const Details = ({ route, navigation }) => {
  const songDetails = route.params;
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
};

export default Details;
