import React, { FC } from "react";
import { View } from "react-native";

//import components
import Input from "../components/Input";

//import styles and assets
import styled from "styled-components/native";

interface Props {}

const InputExample: FC<Props> = (props) => {
  return (
    <Container>
      <Input
        style="pill"
        type="emailAddress"
        label="Email"
        placeholder="Email"
        keyboard="email-address"
        prefix="$"
        disabled={true}
        // error="Error message here"
        onChangeText={(text) => console.log(text)}
      />
      <Input
        style="underline"
        type="password"
        label="Password"
        placeholder="Password"
        error="Error message here"
        onChangeText={(text) => console.log(text)}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
`;

export default InputExample;
