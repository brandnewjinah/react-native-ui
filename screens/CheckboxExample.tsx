import React, { FC } from "react";

//import components
import Checkbox from "../components/Input/Checkbox";

//import styles and assets
import styled from "styled-components/native";

interface Props {}

const CheckboxExample: FC<Props> = () => {
  return (
    <Container>
      <Checkbox></Checkbox>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default CheckboxExample;
