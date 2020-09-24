import React, { FC } from "react";

//import components
import List from "../components/Lists/Lists";

//import styles and assets
import styled from "styled-components/native";
import { User } from "../assets/icons/Icons";

interface Props {}

const ListExample: FC<Props> = (props) => {
  return (
    <Container>
      <List
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        avatarSmall={true}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List
        avatar={null}
        avatarSmall={true}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List
        avatar={null}
        initial={true}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
      <List
        avatar={null}
        avatarSmall={true}
        initial={true}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />

      <List
        avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        // avatar={null}
        // initial={true}
        // color="#EFD1BE"
        // overline="HELLO"
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
        // sub="hello"
        // meta="08:00"
        // option="hello"
        // icon={true}
        // unread={19}
      >
        <User />
      </List>
      <List
        avatar={null}
        primary="Jinah Lee"
        secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
`;

export default ListExample;
