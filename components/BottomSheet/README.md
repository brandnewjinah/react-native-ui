# Sheet

Bottom Sheet is a botoom-anchored container that holds contents or actions. It slides up on top of fade in modal.

<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/BottomSheet.gif" alt="scrollmenu" width="350"/>

### Usage

Start by importing BottomSheet component.

```tsx
import BottomSheet from "./components/BottomSheet/BottomSheet";
```

If you want to show by initiating an action

```tsx
// create a state and set default to false
const [visible, setVisible] = useState(false);

// set visible to true onPress
<Button onPress={() => setVisible(true)} />;

// show BottomSheet if visible is set to true
{
  visible && <BottomSheet />;
}
```

If you want to show on page load

```tsx
// setVisible to true using useEffect
useEffect(() => {
	setVisible(true);
}, []]
```

Place your comtent inside the BottomSheet component

```tsx
<BottomSheet>{Your Contents}</BottomSheet>
```

Give onPress property and setVisible to false. This will make BottomSheet slide down when tapping on the modal area.

```tsx
<BottomSheet onPress={() => setVisible(false)} />
```

If you want to trigger close action from your own component, like the image example above, create a ref and assign it to the BottomSheet component.

```tsx
const childRef = useRef();

<BottomSheet onPress={() => setVisible(false)} ref={childRef} />;
```

In this case, Button onPress, call the close() function in the BottomSheet component.

```tsx
<BottomSheet onPress={() => setVisible(false)} ref={childRef}>
	<Button onPress={() => {
	  childRef.current.close();
  }}
</BottomSheet>
```

### Example

```tsx
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { View } from "react-native";

//import components
import BottomSheet from "../components/BottomSheet/BottomSheet";
import Button from "../components/Buttons/Buttons";

//import styles and assets
import styled from "styled-components/native";
import Typography from "../components/Typography/Typography";
import { Nature } from "../assets/illust/Illust";

const BottomSheetExample = () => {
  const [visible, setVisible] = useState(false);
  const childRef = useRef() as MutableRefObject<T>;

  // useEffect(() => {
  //   setVisible(true);
  // }, []);

  return (
    <Container>
      <Button label="Press" color="red" onPress={() => setVisible(true)} />
      {visible && (
        <BottomSheet onPress={() => setVisible(false)} ref={childRef}>
          <View style={{ alignItems: "center" }}>
            <View style={{ marginVertical: 20 }}>
              <Nature sizew={100} sizeh={108} />
            </View>
            <Typography scale="body" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
              lorem lacus.
            </Typography>
            <View style={{ marginVertical: 20 }}>
              <Button
                label="Got It"
                color="black"
                onPress={() => {
                  childRef.current.close();
                }}
              />
            </View>
          </View>
        </BottomSheet>
      )}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default BottomSheetExample;
```
