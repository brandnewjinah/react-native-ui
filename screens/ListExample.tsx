import React, { FC } from "react";

//import components
import * as List from "../components/Lists/Lists";
import Buttons from "../components/Buttons/Buttons";

//import styles and assets
import styled from "styled-components/native";
import { User, ChevronRight } from "../assets/icons/Icons";
import colors from "../components/Colors/Colors";

interface Props {}

const ListExample: FC<Props> = (props) => {
  return (
    <Container>
      <List.Default
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        primary="Jinah Lee"
        secondary="non augue ultrices"
        option={
          <Buttons
            style="rounded"
            size="xsmall"
            label="Button"
            onPress={() => console.log("pressed")}
          />
        }
      />
      <List.Default
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        primary="Jinah Lee"
        secondary="non augue ultrices"
        option={<ChevronRight color={colors.gray} size={18} />}
      />
      <List.Default
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
        meta="08:00"
        unread={19}
      />
      <List.Small
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
        meta="08:00"
        unread={19}
      />
      <List.Small
        avatar={null}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List.Small
        avatar={null}
        initial={true}
        color="#EFD1BE"
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List.Small
        avatar={null}
        color="#D8E3ED"
        overline="HELLO"
        primary="Jinah Lee"
      />
      <List.Small avatar={null} primary="Jinah Lee" />
      <List.Small primary="Jinah Lee" />
      <List.Small
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List.Small primary="Jinah Lee" overline="HELLO" />
      <List.Small primary="Jinah Lee" sub="Subtext" />
      <List.Small primary="Jinah Lee" meta="meta" />
      <List.Default primary="Jinah Lee" icon={<User color="#000" />} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 24px;
`;

export default ListExample;
