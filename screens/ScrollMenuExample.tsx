import React, { FC, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//import components
import ScrollMenu from "../components/ScrollMenu/ScrollMenu";
//import styles and assets
//import data
const data = [
  { category: "Healthy" },
  { category: "Chicken" },
  { category: "Burgers" },
  { category: "Desserts" },
  { category: "Breakfast" },
];

interface Props {}

const ScrollMenuScreen: FC<Props> = () => {
  const [current, setCurrent] = useState(data[0].category);

  return (
    <View style={styles.container}>
      <View style={styles.scroll}>
        <ScrollMenu
          data={data}
          onSelect={(item) => setCurrent(item)}
          selected={current}
        />
      </View>
      <View style={styles.screen}>
        <Text>{current}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  pill: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  textBtn: {
    marginHorizontal: 30,
  },
  screen: {
    backgroundColor: "#FFFAF0",
    flexGrow: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScrollMenuScreen;
