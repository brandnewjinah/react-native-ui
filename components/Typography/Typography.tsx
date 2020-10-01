import React, { FC } from "react";
import { Text, View } from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  scale:
    | "heading1"
    | "heading2"
    | "heading3"
    | "heading4"
    | "subtitle"
    | "body"
    | "overline"
    | "caption";
  bold?: boolean;
  color?: any;
  align?: "center";
  numberOfLines?: number;
}

const Typography: FC<Props> = (props) => {
  return (
    <View>
      {props.scale === "heading1" && (
        <Text style={props.bold && { fontWeight: "700" }}>
          <Heading1 style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Heading1>
        </Text>
      )}
      {props.scale === "heading2" && (
        <Text style={props.bold && { fontWeight: "700" }}>
          <Heading2 style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Heading2>
        </Text>
      )}
      {props.scale === "heading3" && (
        <Text style={props.bold && { fontWeight: "700" }}>
          <Heading3 style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Heading3>
        </Text>
      )}
      {props.scale === "heading4" && (
        <Text style={props.bold && { fontWeight: "700" }}>
          <Heading4 style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Heading4>
        </Text>
      )}
      {props.scale === "subtitle" && (
        <Text
          style={props.bold && { fontWeight: "bold" }}
          numberOfLines={props.numberOfLines}
        >
          <Subtitle style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Subtitle>
        </Text>
      )}
      {props.scale === "body" && (
        <Text
          style={props.bold && { fontWeight: "bold" }}
          numberOfLines={props.numberOfLines}
        >
          <Body style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Body>
        </Text>
      )}
      {props.scale === "overline" && (
        <Text
          style={props.bold && { fontWeight: "bold" }}
          numberOfLines={props.numberOfLines}
        >
          <Overline style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Overline>
        </Text>
      )}
      {props.scale === "caption" && (
        <Caption style={{ color: props.color, textAlign: props.align }}>
          {props.children}
        </Caption>
      )}
    </View>
  );
};

const Heading1 = styled.Text`
  font-size: 24px;
  letter-spacing: 0.65px;
`;

const Heading2 = styled.Text`
  font-size: 22px;
  letter-spacing: 0.65px;
`;

const Heading3 = styled.Text`
  font-size: 20px;
  letter-spacing: 0.65px;
`;

const Heading4 = styled.Text`
  font-size: 18px;
  letter-spacing: 0.65px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  letter-spacing: 0.65px;
`;

const Body = styled.Text`
  font-size: 14px;
  letter-spacing: 0.65px;
  line-height: 20px;
`;

const Overline = styled.Text`
  font-size: 12px;
  letter-spacing: 0.65px;
`;

const Caption = styled.Text`
  font-size: 10px;
  letter-spacing: 0.65px;
`;

export default Typography;
