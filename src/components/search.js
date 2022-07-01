import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import service from "../service/service";
const SearchBar = (props) => {
  const [text, setText] = useState("");

  function _onChangeText(e) {
    setText(e);
    service.Debounce(props.onChangeText(e));
  }

  return (
    <TextInput
      label={"Search an Artist"}
      value={text}
      onChangeText={_onChangeText}
    />
  );
};

export default SearchBar;
