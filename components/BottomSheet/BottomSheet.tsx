import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Animated, Modal, TouchableWithoutFeedback, View } from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  onPress: () => void;
  children: any;
}

const BottomSheet = forwardRef((props: Props, ref) => {
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

  useImperativeHandle(ref, () => ({
    close: () => {
      handleClose();
    },
  }));

  const handleClose = () => {
    Animated.timing(slide, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      props.onPress();
    });
  };

  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={true}
      onRequestClose={handleClose}
    >
      <TouchableWithoutFeedback onPress={handleClose}>
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
          <View>{props.children}</View>
        </SheetContainer>
      </View>
    </Modal>
  );
});

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
