import React, { FC } from "react";
import { Animated, FlatList, Dimensions, View, Text } from "react-native";

//import components
import SliderItem from "./SliderItem";

//import styles and assets
import styled from "styled-components/native";

const { width } = Dimensions.get("window");

interface ImageData {
  [index: number]: string;
}

interface Props {
  images?: ImageData[];
  paddingOffset?: number;
}

const Slider: FC<Props> = (props) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <Container>
      <FlatList
        data={props.images}
        keyExtractor={(item, index) => "key" + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return <SliderItem item={item} padding={props.paddingOffset} />;
        }}
      />
      <Dots>
        {props.images &&
          props.images.map((image, index) => (
            <View
              key={index}
              // style={{
              //   width: 5,
              //   height: 5,
              //   backgroundColor: "black",
              //   margin: 5,
              // }}
            >
              <Text>{index + 1}</Text>
            </View>
          ))}
      </Dots>
    </Container>
  );
};

const Container = styled.View``;
const Dots = styled.View`
  flex-direction: row;
  /* width: 10px;
  height: 10px;
  background-color: black; */
`;
export default Slider;
