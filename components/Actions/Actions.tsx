import React, { FC } from "react";
import { TouchableOpacity, View } from "react-native";

//import styles and assets
import styled from "styled-components/native";
import { Heart } from "../../assets/icons/Icons";
import Typography from "../Typography/Typography";
import color from "../Colors/Colors";

interface LikeProps {
  paddingVertical?: number;
  paddingHorizontal?: number;
  like: boolean;
  totalLikes: number;
  handleTotalLikes: (num: number) => void;
  handleMyLike: (like: boolean) => void;
}

export const Like: FC<LikeProps> = ({
  paddingVertical,
  paddingHorizontal,
  totalLikes,
  like,
  handleTotalLikes,
  handleMyLike,
}) => {
  const Padding = {
    ...(paddingHorizontal && {
      paddingHorizontal,
    }),
    ...(paddingVertical && {
      paddingVertical,
    }),
  };

  const handleHeart = () => {
    if (like) {
      handleMyLike(false);
      handleTotalLikes(totalLikes - 1);
    } else {
      handleMyLike(true);
      handleTotalLikes(totalLikes + 1);
    }
  };

  return (
    <Container style={Padding}>
      <TouchableOpacity onPress={handleHeart}>
        <Heart
          size={20}
          color={like ? color.red : "none"}
          stroke={like ? 0 : 1}
        />
      </TouchableOpacity>
      <View style={{ marginLeft: 6 }}>
        <Typography scale="overline" color={color.black}>
          {totalLikes} Likes
        </Typography>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;
