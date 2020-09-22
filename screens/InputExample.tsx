import React, { FC } from "react";
import { View } from "react-native";

//import components
import Input from "../components/Input/Input";
import Button from "../components/Buttons/Buttons";

//import styles and assets
import styled from "styled-components/native";
import Typography from "../components/Typography/Typography";

interface Props {}

const InputExample: FC<Props> = (props) => {
  return (
    <Container>
      <View style={{ marginTop: 30, marginBottom: 10 }}>
        <Typography scale="heading1" bold={true} align="center">
          Get Started
        </Typography>
      </View>
      <Typography scale="body" color="#6A6A6A" align="center">
        Create an account to continue
      </Typography>
      <Input
        style="rounded"
        label="Name"
        placeholder="Enter your full name"
        color="#00a699"
        error={null}
        onChangeText={(text) => console.log(text)}
      />
      <Input
        style="rounded"
        label="Email"
        placeholder="Enter your email address"
        keyboard="email-address"
        color="#00a699"
        error={null}
        onChangeText={(text) => console.log(text)}
      />
      <Input
        style="rounded"
        type="password"
        label="Password"
        placeholder="Must be at least 6 characters"
        color="#00a699"
        error={null}
        onChangeText={(text) => console.log(text)}
      />
      <View style={{ paddingHorizontal: 60 }}>
        <Typography scale="caption" color="#666666" align="center">
          By signing up, you agree to our Privacy Policy and Terms of Service.
        </Typography>
      </View>
      <Button
        label="Sign up"
        color="#F27768"
        onPress={() => console.log("pressed")}
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
`;

export default InputExample;
