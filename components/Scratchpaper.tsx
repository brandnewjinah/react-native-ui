import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  View,
  Dimensions,
} from "react-native";

//import styles and assets
import styled from "styled-components/native";

const data = [1, 2];

const TabExample = () => {
  const width = Dimensions.get("window").width;
  const [active, setActive] = useState(0);
  const barX = useState(new Animated.Value(0))[0];
  const contentX = useState(new Animated.Value(width))[0];
  const [newValues, setNewValues] = useState({});

  const handleBar = (index, num) => {
    setActive(index);
    Animated.timing(barX, {
      toValue: num,
      duration: 200,
      useNativeDriver: false,
    }).start();
    if (active === 0) {
      Animated.timing(contentX, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(contentX, {
        toValue: width,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Container>
      <Menu>
        <Animated.View
          style={{
            position: "absolute",
            width: width / data.length,
            height: "100%",
            backgroundColor: "khaki",
            bottom: 0,
            marginLeft: barX,
          }}
        />
        {data.map((data, index) => (
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

      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={{ marginLeft: 0 }}>
            {/* <Text>content1</Text> */}
          </Animated.View>
          <Animated.View style={{ marginLeft: contentX }}>
            <Text>content2</Text>
          </Animated.View>
        </View>
      </ScrollView>
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
export default TabExample;
