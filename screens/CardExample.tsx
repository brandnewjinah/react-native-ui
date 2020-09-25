import React, { FC, useState } from "react";
import { ScrollView, View, Image } from "react-native";

//import components
import Card from "../components/Cards/Cards";
import * as List from "../components/Lists/Lists";
import { Like } from "../components/Actions/Actions";
import Slider from "../components/Slider/Slider";

//import styles and assets
import styled from "styled-components/native";
import { User } from "../assets/icons/Icons";
import Typography from "../components/Typography/Typography";
import colors from "../components/Colors/Colors";

const imageData = [
  "https://a0.muscache.com/im/pictures/dea004da-ce7c-4b96-8ded-788ef3168349.jpg",
  "https://a0.muscache.com/im/pictures/6a4518bf-30b5-423a-bce9-ca37ef8684f2.jpg",
  "https://a0.muscache.com/im/pictures/4c01023f-0bf0-4be9-9b9a-7fca7f2e0f39.jpg",
  "https://a0.muscache.com/im/pictures/d9cb5d9c-180b-47e4-a4da-a0ef60183e6c.jpg",
  "https://a0.muscache.com/im/pictures/694715b0-d81f-42d8-b7a3-219c13f7e3e9.jpg",
];

interface Props {}

const CardExample: FC<Props> = (props) => {
  const [totalLikes, setTotalLikes] = useState(89);
  const [like, setLike] = useState(false);
  return (
    <Container>
      {/* <Card shadow={true}>
        <List.Small
          avatar={null}
          primary="Jinah Lee"
          secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
          paddingVertical={25}
          paddingHorizontal={20}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <Typography scale="body" color={colors.gray}>
            Lorem ipsum dolor sit amet, consectet adipiscing elit. Suspende sit
            amet temp nisl, a vehicula purus. Etiam scelerisque hendrerit orci.
            Sed ultricies ligula eu mas semper, eget interdum nisl sagittis.
            Etiam vel aliquet enim. Nam eget lobort sapien. Curabitur eget
            tortor eu ligula viverra lacinia.
          </Typography>
        </View>
        <Like
          totalLikes={totalLikes}
          like={like}
          handleTotalLikes={(likes) => setTotalLikes(likes)}
          handleMyLike={(like) => setLike(like)}
          paddingVertical={25}
          paddingHorizontal={20}
        />
      </Card> */}
      <Card shadow={true}>
        <List.Small
          avatar={null}
          primary="Jinah Lee"
          secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
          paddingVertical={25}
          paddingHorizontal={20}
        />
        <View style={{ height: 200 }}>
          <Slider images={imageData} paddingOffset={24 * 2} />
        </View>

        <Like
          totalLikes={totalLikes}
          like={like}
          handleTotalLikes={(likes) => setTotalLikes(likes)}
          handleMyLike={(like) => setLike(like)}
          paddingVertical={25}
          paddingHorizontal={20}
        />
      </Card>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 0 24px;

  /* background-color: #eee; */
`;

export default CardExample;
