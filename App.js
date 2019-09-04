import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import {
  TouchableRipple,
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

import WordItem from "./components/WordItem";
import UserInput from "./components/UserInput";

export default function App() {
  const [codes, setCodes] = useState([]);
  const [isHelpVisible, setHelpVisible] = useState(false);
  const [isAddMode, setAddMode] = useState(false);

  const addWordHandler = word => {
    if (word.length > 0) {
      newWord = word.split("").map(char => {
        return ICAO.has(char.toUpperCase())
          ? ICAO.get(char.toUpperCase())
          : char;
      });
      setCodes(newWord);
      setAddMode(false);
    }
  };

  const showDialog = () => {
    setHelpVisible(true);
    console.log(isHelpVisible);
  };

  const hideDialog = () => setHelpVisible(false);

  const ICAO = new Map(
    Object.entries({
      A: "Alfa",
      B: "Bravo",
      C: "Charlie",
      D: "Delta",
      E: "Echo",
      F: "Foxtrot",
      G: "Golf",
      H: "Hotel",
      I: "India",
      J: "Juliett",
      K: "Kilo",
      L: "Lima",
      M: "Mike",
      N: "November",
      O: "Oscar",
      P: "Papa",
      Q: "Quebec",
      R: "Romeo",
      S: "Sierra",
      T: "Tango",
      U: "Uniform",
      V: "Victor",
      W: "Whiskey",
      X: "X-ray",
      Y: "Yankee",
      Z: "Zulu"
    })
  );

  const cancelAddWordHandler = () => setAddMode(false);

  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.Content title="Clear Spell" color="white" />
        <Appbar.Action icon="help-outline" color="white" onPress={showDialog} />
        <Portal>
          <Dialog
            dismissable={true}
            visible={isHelpVisible}
            onDismiss={hideDialog}
          >
            <Dialog.Title>What's This?</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                When you need to spell information like your name, email or home
                address over the phone – use the NATO Phonetic Alphabet. This
                phonetic alphabets – also called spelling alphabets –– replace
                the 26 letters of the English alphabet with 26 code words.
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Appbar.Header>
      <View style={styles.screen}>
        <Button onPress={() => setAddMode(true)}>SPELL NOW</Button>

        <UserInput
          visible={isAddMode}
          onWordSubmit={addWordHandler}
          onCancel={cancelAddWordHandler}
        />

        <View style={styles.flatListContainer}>
          <FlatList
            keyExtractor={() => Math.random().toString()}
            data={codes}
            renderItem={itemData => <WordItem title={itemData.item} />}
          />
        </View>
      </View>
    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff4081",
    accent: "#f1c40h"
  }
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1
  },
  flatListContainer: {
    flex: 1
  }
});
