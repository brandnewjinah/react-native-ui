import React, { FC, useState, useEffect } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Button from "../Buttons/Buttons";
import * as List from "../Lists/Lists";

//import styles and assets
import styled from "styled-components/native";

interface List {
  label: string;
  value: number;
}

interface Props {
  onPress: () => void;
  button?: boolean;
  onSubmit: () => void;
  items?: List[];
}

const BottomSheet: FC<Props> = (props) => {
  const slide = useState(new Animated.Value(0))[0];
  const [height, setHeight] = useState(0);

  const sheetStyle = {
    transform: [
      {
        translateY: slide.interpolate({
          inputRange: [0, 1],
          outputRange: [height, 0],
        }),
      },
    ],
  };

  useEffect(() => {
    Animated.timing(slide, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleClose = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      props.onPress();
    });
  };

  const handleSubmit = (selected: string) => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      props.onSubmit(selected);
    });
  };

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={() => handleClose()}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#00000040",
          }}
        ></View>
      </TouchableWithoutFeedback>
      <View style={{ justifyContent: "flex-end" }}>
        <SheetContainer
          as={Animated.View}
          style={sheetStyle}
          onLayout={(event: any) => {
            const currentValue = event.nativeEvent.layout.height;
            setHeight(currentValue);
          }}
        >
          <FlatList
            data={props.items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <List.Default
                onPress={() => handleSubmit(item.label)}
                primary={item.label}
              />
            )}
          />
          <View>{props.children}</View>
          {props.button && (
            <Button label="Submit" onPress={() => handleSubmit()}></Button>
          )}
        </SheetContainer>
      </View>
    </Modal>
  );
};

const SheetContainer = styled.View`
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
  min-height: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default BottomSheet;
