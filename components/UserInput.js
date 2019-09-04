import React, { useState } from "react";
import { Modal, StyleSheet, View, FlatList } from "react-native";
import {
  DefaultTheme,
  Provider as PaperProvider,
  Appbar,
  TextInput,
  Button,
  List,
  Portal,
  Dialog,
  Paragraph
} from "react-native-paper";

const UserInput = props => {
  const [enteredWord, setEnteredWord] = useState("");
  const [isVisible, setVisible] = useState(false);

  const taskInputHandler = word => {
    setEnteredWord(word);
  };

  const buttonPressHandler = () => {
    props.onWordSubmit(enteredWord);
    setEnteredWord("");
  };

  const cancelButtonPressHandler = () => {
    props.onCancel();
    setEnteredWord("");
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.modalview}>
        <TextInput
          label="Word you want to spell"
          value={enteredWord}
          onChangeText={taskInputHandler}
        />
        <View style={styles.buttonView}>
          <Button color={"#d50000"} onPress={cancelButtonPressHandler}>
            CANCEL
          </Button>
          <Button onPress={buttonPressHandler}>SPELL</Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalview: {
    flex: 1,
    justifyContent: "center",
    margin: 10
  },
  buttonView: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default UserInput;
