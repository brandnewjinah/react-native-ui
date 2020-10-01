import React, { FC, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//import components

//import styles and assets
import Typography from "../Typography/Typography";

interface Data {
  category: string;
}

interface Props {
  data: Data[];
  onSelect: (item: string) => void;
  selected?: string;
}

const ScrollMenu: FC<Props> = (props) => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.category}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.onSelect(item.category)}
        >
          <View
            style={[
              styles.pill,
              {
                marginLeft: index === 0 ? 12 : 6,
                backgroundColor:
                  props.selected === item.category ? "black" : "#eee",
              },
            ]}
          >
            <Typography
              scale="overline"
              color={props.selected === item.category ? "white" : "black"}
            >
              {item.category}
            </Typography>
          </View>
        </TouchableOpacity>
      )}
    />
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
    backgroundColor: "#FF7F50",
  },
  pill: {
    backgroundColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 6,
    borderRadius: 20,
  },
  screen: {
    backgroundColor: "#F0FFFF",
    flexGrow: 3,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ScrollMenu;
