import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

import styled, { css } from "styled-components/native";
import Typography from "../Typography/Typography";
import colors from "../Colors/Colors";
import { ArrowRight, ArrowLeft } from "../../assets/icons/Icons";

interface Props {
  style?: "rounded" | "pill" | "contained";
  size?: "large" | "small" | "xsmall";
  arrow?: "prev" | "next";
  label?: string;
  color?: any;
  disabled?: boolean;
  onPress: () => void;
}

const Buttons: FC<Props> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
      <Container
        style={{
          ...{ paddingVertical: 12, paddingHorizontal: 24 },
          ...(props.style === "pill"
            ? Pill
            : props.style === "contained"
            ? Contained
            : null),
          ...(props.size === "small" && { width: "35%" }),
          ...(props.size === "xsmall" && {
            alignSelf: "center",
            paddingVertical: 8,
            paddingHorizontal: 18,
          }),
          ...(props.color && { backgroundColor: props.color }),
          ...(props.arrow && { justifyContent: "space-between" }),
          ...(props.disabled && { backgroundColor: "#eee" }),
        }}
      >
        {props.arrow === "prev" && <ArrowLeft />}
        {props.size === "xsmall" ? (
          <Typography scale="overline" bold={true} color="#ffffff">
            {props.label}
          </Typography>
        ) : (
          <Typography scale="body" bold={true} color="#ffffff">
            {props.label}
          </Typography>
        )}

        {props.arrow === "next" && <ArrowRight />}
        {props.children && props.children}
      </Container>
    </TouchableOpacity>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #000;
  border-radius: 8px;
`;

const Pill = {
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
};

const Contained = {
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  height: 52,
};

export default Buttons;
