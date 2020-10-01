import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  View,
  Dimensions,
} from "react-native";

//import components
import TabMenu from "../components/Tab/Tab";

//import styles and assets
import styled from "styled-components/native";

const data = [1, 2, 3, 4];

const TabExample = () => {
  return (
    <Container>
      <TabMenu data={data} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default TabExample;
