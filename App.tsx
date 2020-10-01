import React, { FC } from "react";
import { SafeAreaView, Platform, StatusBar, View } from "react-native";

//import screens
import Input from "./screens/InputExample";
import Buttons from "./screens/ButtonExample";
import Lists from "./screens/ListExample";
import Cards from "./screens/CardExample";
import Tab from "./screens/TabExample";
import Picker from "./screens/PickerExample";
import CheckboxExample from "./screens/CheckboxExample";
import ScrollMenuExample from "./screens/ScrollMenuExample";

//import styles and assets
import styled from "styled-components/native";

const App: FC = () => {
  return (
    <Wrapper>
      {/* <Input /> */}
      {/* <Buttons /> */}
      {/* <Lists /> */}
      {/* <Cards /> */}
      {/* <Tab /> */}
      {/* <Picker /> */}

      {/* <CheckboxExample /> */}
      <ScrollMenuExample />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  flex: 1;
  ${Platform.select({
    ios: {
      fontFamily: "Avenir",
    },
    android: {
      fontFamily: "Roboto",
      paddingTop: StatusBar.currentHeight,
    },
  })}
`;

// const Wrapper = styled(SafeAreaView)`
//   flex: 1;
//   ${Platform.select({
//     ios: {
//       fontFamily: "Avenir",
//     },
//     android: {
//       fontFamily: "Roboto",
//       paddingTop: StatusBar.currentHeight,
//     },
//   })}
// `;

export default App;
