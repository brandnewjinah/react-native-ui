import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { View } from "react-native";

//import components
import BottomSheet from "../components/BottomSheet/BottomSheet";
import Button from "../components/Buttons/Buttons";

//import styles and assets
import styled from "styled-components/native";
import Typography from "../components/Typography/Typography";
import { Nature } from "../assets/illust/Illust";

const BottomSheetExample = () => {
  const [visible, setVisible] = useState(false);
  const childRef = useRef() as MutableRefObject<T>;

  // useEffect(() => {
  //   setVisible(true);
  // }, []);

  return (
    <Container>
      <Button label="Press" color="red" onPress={() => setVisible(true)} />
      {visible && (
        <BottomSheet onPress={() => setVisible(false)} ref={childRef}>
          <View style={{ alignItems: "center" }}>
            <View style={{ marginVertical: 20 }}>
              <Nature sizew={100} sizeh={108} />
            </View>
            <Typography scale="body" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              lorem lacus.
            </Typography>
            <View style={{ marginVertical: 20 }}>
              <Button
                label="Got It"
                color="black"
                onPress={() => {
                  childRef.current.close();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default BottomSheetExample;
