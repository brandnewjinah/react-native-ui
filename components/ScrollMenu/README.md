# Scroll Menu

Scroll Menu acts as a naviation component for a set of tabs that cannot fit on screen

<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ScrollMenu.gif" alt="scrollmenu" width="350"/>

### Usage

Start by importing ScrollMenu component.

```tsx
import Card from "./components/ScrollMenu/ScrollMenu";
```

<br>

Pass data in an array form, set item received from onSelect to the state, and pass that item back as selected.

```tsx
<ScrollMenu
  data={data}
  onSelect={(item) => setCurrent(item)}
  selected={current}
/>
```

<br>

### Example

```tsx
import React, { FC, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

//import components
import ScrollMenu from "../components/ScrollMenu/ScrollMenu";

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
```
