import React, { FC } from "react";
import { FlatList } from "react-native";

//import components
import SliderItem from "./SliderItem";

//import styles and assets
import styled from "styled-components/native";

interface ImageData {
  [index: number]: string;
}

interface Props {
  images?: ImageData[];
  paddingOffset?: number;
}

const Slider: FC<Props> = (props) => {
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
    </Container>
  );
};

const Container = styled.View``;
export default Slider;
