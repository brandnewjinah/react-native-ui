import React, { FC } from "react";
import { SafeAreaView, Platform, StatusBar, View } from "react-native";

//import screens
import Input from "./screens/InputExample";
import Buttons from "./screens/ButtonExample";
import Lists from "./screens/ListExample";
import Cards from "./screens/CardExample";

//import styles and assets
import styled from "styled-components";

const App: FC = () => {
  return (
    <Wrapper>
      {/* <Input /> */}
      {/* <Buttons /> */}
      {/* <Lists /> */}
      <Cards />
    </Wrapper>
  );
};

const Wrapper = styled(SafeAreaView)`
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

export default App;
