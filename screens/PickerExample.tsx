import React, { useState } from "react";
import { View } from "react-native";

//import components
import BottomSheet from "../components/BottomSheet/BottomSheet";
import Picker from "../components/Picker/Picker";
import Button from "../components/Buttons/Buttons";

//import styles and assets
import styled from "styled-components/native";
import Typography from "../components/Typography/Typography";
import { Nature } from "../assets/illust/Illust";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

const TabExample = () => {
  const [visible, setVisible] = useState(false);
  const [submit, setSubmit] = useState("");

  const handleSubmit = (selected) => {
    console.log(selected);
    setVisible(false);
  };

  return (
    <Container>
      <Button label="Press" color="red" onPress={() => setVisible(true)} />
      {visible && (
        <BottomSheet
          items={categories}
          onPress={() => setVisible(false)}
          button={false}
          onSubmit={handleSubmit}
        >
          {/* <View style={{ alignItems: "center" }}>
            <Nature sizew={100} sizeh={108} />
            <Typography scale="heading3" bold={true}>
              Share this link
            </Typography>
            <Typography scale="body" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              lorem lacus.
            </Typography>
          </View> */}
        </BottomSheet>
      )}
      {/* {visible && <Picker onPress={() => setVisible(false)} />} */}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default TabExample;
