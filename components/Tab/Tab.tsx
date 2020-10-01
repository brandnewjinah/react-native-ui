import React, { useState } from "react";
import { Animated, Dimensions, Text } from "react-native";

//import styles and assets
import styled from "styled-components/native";

interface Props {
  data?: any;
}

const TabMenu: React.FC<Props> = (props) => {
  const width = Dimensions.get("window").width;
  const [active, setActive] = useState(0);
  const barX = useState(new Animated.Value(0))[0];
  const [newValues, setNewValues] = useState({});

  const handleBar = (index: number, num: number) => {
    setActive(index);
    Animated.timing(barX, {
      toValue: num,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <Container>
      <Menu>
        <Animated.View
          style={{
            position: "absolute",
            width: width / props.data.length,
            height: "100%",
            backgroundColor: "khaki",
            bottom: 0,
            marginLeft: barX,
          }}
        />
        {props.data.map((data: string, index: number) => (
          <Tab
            key={index}
            onLayout={(event) => {
              const currentValue = {
                ...newValues,
                ["key" + index]: event.nativeEvent.layout.x,
              };
              setNewValues(currentValue);
            }}
            onPress={() => handleBar(index, newValues["key" + index])}
          >
            <Text style={{ color: active === index ? "red" : "black" }}>
              {data}
            </Text>
          </Tab>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

const Menu = styled.View`
  flex-direction: row;
  position: relative;
  background-color: gainsboro;
`;

const Tab = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export default TabMenu;
