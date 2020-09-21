import React, { FC } from "react";
import { View, Text } from "react-native";

//import components
import Buttons from "../components/Buttons";

//import styles and assets
import styled from "styled-components/native";
import { Apple } from "../assets/icons/Icons";
import Typography from "../components/Typography";

interface Props {}

const ButtonExample: FC<Props> = (props) => {
  return (
    <Container>
      <Buttons
        style="rounded"
        arrow="next"
        label="Button"
        color="#F76654"
        onPress={() => console.log("pressed")}
      />
      <Buttons
        arrow="prev"
        label="Button"
        color="#F76654"
        onPress={() => console.log("pressed")}
      />
      <Buttons
        style="pill"
        label="Button"
        color="#F76654"
        onPress={() => console.log("pressed")}
      />
      <Buttons
        style="rounded"
        size="small"
        label="Button"
        disabled={true}
        onPress={() => console.log("pressed")}
      />
      <Buttons
        style="contained"
        color="black"
        onPress={() => console.log("pressed")}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Apple />
          <Typography scale="body" bold={true} color="#ffffff">
            Sign Up With Apple
          </Typography>
        </View>
      </Buttons>
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
`;

export default ButtonExample;
