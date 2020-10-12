import React, { FC, useState, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Animated, {
  add,
  Clock,
  cond,
  eq,
  Extrapolate,
  interpolate,
  not,
  set,
  startClock,
  useCode,
  Value,
} from "react-native-reanimated";

import Button from "../Buttons/Buttons";
import * as List from "../Lists/Lists";


interface Props {

}

const BottomSheet: FC<Props> = (props) => {
  const startAnimation = new Value(0);
  const clock = new Clock();
  const startTime = new Value(0);
  const duration = 300;
  const endTime = add(startTime, duration);
  const from = new Value(1);
  const to = new Value(0);
  const opacity = interpolate(clock, {
    inputRange: [startTime, endTime],
    outputRange: [from, to],
    extrapolate: Extrapolate.CLAMP,
  });

  useCode(
    () => [
      cond(eq(startAnimation, 1), [
        startClock(clock),
        set(startTime, clock),
        set(from, not(from)),
        set(to, not(to)),
        set(startAnimation, 0),
      ]),
    ],
    [clock, from, startAnimation, startTime, to]
  );

  useEffect(() => {
    startAnimation.setValue(1);
  }, []);

  const handleClose = () => {
    startAnimation.setValue(1);
  }

  return (
    <TouchableWithoutFeedback onPress={handleClose}>
      {/* <TouchableWithoutFeedback onPress={() => startAnimation.setValue(1)}> */}
      <Animated.View style={[styles.container, { opacity }]}></Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000aa",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});

export default BottomSheet;
