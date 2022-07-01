import React, { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import service from "../service/service";
const SearchBar = (props) => {
  const [text, setText] = useState("");

  function _onChangeText(e) {
    setText(e);
    service.Debounce(props.onChangeText(e));
  }

  return (
    <View style={{ display: "flex", marginTop: 5 }}>
      <TextInput
        label={"Search an Artist"}
        value={text}
        onChangeText={_onChangeText}
      />
    </View>
  );
};

export default SearchBar;
