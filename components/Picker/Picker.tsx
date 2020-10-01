import React, { FC, useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  onPress: () => void;
}

const Picker: FC<Props> = (props) => {
  const { width, height } = Dimensions.get("window");
  const overlay = useState(new Animated.Value(0))[0];
  const slide = useState(new Animated.Value(0))[0];

  const backdrop = {
    opacity: overlay.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.5],
    }),
  };

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
    Animated.parallel([
      Animated.timing(overlay, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(overlay, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      props.onPress();
    });
  };

  return (
    <Container style={{ width, height }}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <Modal as={Animated.View} style={backdrop} />
      </TouchableWithoutFeedback>
      <View style={{ justifyContent: "flex-end" }}>
        <SheetContainer as={Animated.View} style={sheetStyle}>
          <View>
            <Text>
              testfewkjfjelkwjf
              ejkwfljewofjoeiwjfoiejwoijfekwjfoeiwjfekwflkejwlfkjelwkjfkewjf
            </Text>
          </View>
        </SheetContainer>
      </View>
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
`;

const Modal = styled.View`
  background-color: #000000aa;
  flex: 1;
`;

const SheetContainer = styled.View`
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  padding: 20px;
  min-height: 20px;
`;

export default Picker;
