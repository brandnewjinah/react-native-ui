import React, { FC } from "react";
import { Text, View } from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  scale: "capton" | "body";
  bold?: boolean;
  color?: any;
}

const Typography: FC<Props> = (props) => {
  return (
    <View>
      {props.scale === "capton" && (
        <Caption style={{ color: props.color }}>{props.children}</Caption>
      )}
      {props.scale === "body" && (
        <Text style={props.bold && { fontWeight: "bold" }}>
          <Body style={{ color: props.color }}>{props.children}</Body>
        </Text>
      )}
    </View>
  );
};

const Caption = styled.Text`
  font-size: 12px;
  letter-spacing: 0.65px;
`;

const Body = styled.Text`
  font-size: 14px;
  letter-spacing: 0.65px;
`;

export default Typography;
