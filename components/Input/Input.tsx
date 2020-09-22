import React, { FC, useState } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";

import Typography from "../Typography/Typography";
import colors from "../Colors/Colors";

interface Props {
  style?: "rounded" | "underline" | "pill";
  type?: "password";
  label: string;
  placeholder?: string;
  color?: any;
  keyboard?: any;
  disabled?: boolean;
  prefix?: any;
  error?: any;
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
      <Typography scale="overline" color={props.disabled && "#c4c4c4"}>
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
          ...(focused &&
            (props.color
              ? { borderColor: props.color }
              : { borderColor: "#a8a8a8" })),
          ...(props.error && { borderColor: "#F75010" }),
        }}
      >
        {props.prefix && (
          <View style={{ marginRight: 10 }}>
            <Typography scale="body" color={props.disabled && "#c4c4c4"}>
              {props.prefix}
            </Typography>
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
          <View>
            <TouchableOpacity onPress={handleToggle}>
              <Typography scale="overline">{hide ? "Show" : "Hide"}</Typography>
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
