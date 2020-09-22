import React, { FC } from "react";
import { Text, View } from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  scale: "heading1" | "body" | "overline" | "caption";
  bold?: boolean;
  color?: any;
  align?: "center";
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
      {props.scale === "body" && (
        <Text style={props.bold && { fontWeight: "bold" }}>
          <Body style={{ color: props.color, textAlign: props.align }}>
            {props.children}
          </Body>
        </Text>
      )}
      {props.scale === "overline" && (
        <Overline style={{ color: props.color, textAlign: props.align }}>
          {props.children}
        </Overline>
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

const Body = styled.Text`
  font-size: 14px;
  letter-spacing: 0.65px;
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
