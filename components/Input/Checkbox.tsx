import React, { FC, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";

//import syles and assets
import { Checkmark } from "../../assets/icons/Icons";

interface Props {}

const Checkbox: FC<Props> = () => {
  const [checked, setChecked] = useState(true);

  const styles = StyleSheet.create({
    container: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: checked ? "transparent" : "#000",
      backgroundColor: checked ? "#000" : "transparent",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <TouchableWithoutFeedback onPress={() => setChecked((prev) => !prev)}>
      <View style={styles.container}>
        {checked ? <Checkmark size={18} /> : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Checkbox;
