import React, { FC } from "react";
import { Dimensions, Image, View } from "react-native";

const { width, height } = Dimensions.get("window");

interface Props {
  item?: any;
  padding?: any;
}

const SliderItem: FC<Props> = (props) => {
  return (
    <View>
      <Image
        style={{
          ...(props.padding
            ? { width: width - props.padding }
            : { width: width }),
          height: "100%",
        }}
        resizeMode="cover"
        source={{
          uri: props.item,
        }}
      />
    </View>
  );
};

export default SliderItem;
