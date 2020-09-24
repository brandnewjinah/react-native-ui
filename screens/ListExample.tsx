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
        // avatar="https://images.pexels.com/photos/1520903/pexels-photo-1520903.jpeg"
        // avatar={null}
        initial={true}
        color="#EFD1BE"
        // overline="HELLO"
        primary="Jinah Lee"
        // secondary="non augue ultrices dignissim. Mauris justo sem, dapibus ac accumsan at"
        // sub="hello"
        meta="08:00"
        // option="hello"
        icon={true}
        // unread={19}
      >
        <User />
      </List>
    </Container>
  );
};

const Container = styled.View`
  padding: 24px;
  background-color: olive;
`;

export default ListExample;
