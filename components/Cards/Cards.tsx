import React, { FC, useState } from "react";

//import styles and assets
import styled from "styled-components/native";
import colors from "../Colors/Colors";

interface ContainerProps {
  shadow?: boolean;
  outline?: boolean;
}

const Card: FC<ContainerProps> = (props) => {
  const shadow = {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 5,
  };

  return (
    <Container
      style={{
        ...(props.shadow && shadow),
        ...(props.outline && { borderWidth: 1, borderColor: colors.faintgray }),
      }}
    >
      {props.children}
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  background-color: #fff;
  border-radius: 10px; ;
`;

export default Card;
