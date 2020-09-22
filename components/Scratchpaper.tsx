import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";

import styled from "styled-components";
import Typography from "./Typography/Typography";
import colors from "./Colors/Colors";
import { ArrowRight } from "../assets/icons/Icons";

interface Props {
  style?: "rounded" | "pill" | "txt";
  size: "large" | "small";
  label: string;
  color?: any;
  disabled?: boolean;
  onPress: () => void;
}

const Buttons: FC<Props> = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} disabled={props.disabled}>
        <View
          style={{
            ...(props.style === "pill"
              ? Pill
              : props.style === "txt"
              ? Txt
              : Rounded),
            ...(props.color && { backgroundColor: props.color }),
            ...(props.disabled && Disabled),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              scale="body"
              bold={true}
              color={props.disabled && "#c4c4c4"}
            >
              {props.label}
            </Typography>
            <View>
              <ArrowRight />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Txt = {
  width: "100%",
};

const Rounded = {
  width: "100%",
  backgroundColor: "#eee",
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  marginVertical: 8,
};

const Pill = {
  width: "100%",
  backgroundColor: "#eee",
  paddingVertical: 14,
  paddingHorizontal: 20,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  marginVertical: 8,
};

const Disabled = {
  borderWidth: 2,
  borderColor: "#eee",
  backgroundColor: "transparent",
};

export default Buttons;
