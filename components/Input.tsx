import React, { FC, useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";

import Typography from "../components/Typography";
import colors from "./Colors";

interface Props {
  style?: "rounded" | "underline" | "pill";
  type?: "password" | "emailAddress";
  label: string;
  placeholder?: string;
  keyboard?: "email-address";
  disabled?: boolean;
  prefix?: any;
  error?: string;
  onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
  const [hide, setHide] = useState(true);
  const [focused, setFocused] = useState(false);

  const handleToggle = () => {
    setHide(!hide);
  };

  const handleOutline = () => {
    setFocused(!focused);
  };

  return (
    <View>
      <Typography scale="capton" color={props.disabled && "#c4c4c4"}>
        {props.label}
      </Typography>
      <View
        style={{
          ...{ position: "relative", flexDirection: "row" },
          ...(props.style === "pill"
            ? Pill
            : props.style === "underline"
            ? Underline
            : Rounded),
          ...(focused && FocusStyle),
          ...(props.error && ErrorStyle),
        }}
      >
        {props.prefix && (
          <View style={{ marginRight: 10 }}>
            <Typography scale="body">{props.prefix}</Typography>
          </View>
        )}
        <TextInput
          style={{ flex: 1 }}
          textContentType={props.type}
          keyboardType={props.keyboard}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode={props.type === "password" ? "never" : "always"}
          secureTextEntry={props.type === "password" && hide}
          placeholderTextColor="#ddd"
          placeholder={props.placeholder}
          editable={!props.disabled}
          onChangeText={props.onChangeText}
          onFocus={handleOutline}
          onBlur={handleOutline}
        />

        {props.type === "password" && (
          <View style={props.style === "underline" ? Align : Padding}>
            <TouchableOpacity onPress={handleToggle}>
              <Typography scale="capton">{hide ? "Show" : "Hide"}</Typography>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {props.error && (
        <Typography scale="capton" color={colors.warning}>
          {props.error}
        </Typography>
      )}
    </View>
  );
};

const Padding = {
  position: "absolute",
  top: 25,
  right: 15,
};

const Align = {
  position: "absolute",
  bottom: 15,
  right: 0,
};

const ErrorStyle = {
  borderColor: "#F75010",
};

const FocusStyle = {
  borderColor: "#00a699",
};

const Rounded = {
  borderWidth: 1,
  borderColor: "#eee",
  padding: 14,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  marginVertical: 8,
};

const Pill = {
  borderWidth: 1,
  borderColor: "#eee",
  padding: 14,
  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  marginVertical: 8,
};

const Underline = {
  borderBottomWidth: 1,
  borderColor: "#C4C4C4",
  paddingVertical: 14,
  marginVertical: 8,
};

export default Input;
