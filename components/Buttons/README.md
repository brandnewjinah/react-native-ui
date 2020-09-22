# Button

A component to allow user to press to take actions.

![Button](https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Buttons.png)
<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Buttons.png)" alt="button" width="375"/>

### Usage

Start by importing Button component.

```tsx
import Button from "./components/Buttons/Buttons";
```

Set `style` and give it a `label`. By default, the button comes with rounded corners. To insert icons, set style to contained and pass your icon and label as children elements.

```tsx
<Button style="pill" label="Pill" />
<Button style="contained">
	<AppleIcon />
	<Text>Sign up with Apple</Text>
</Button>
```

By default, size is set to large. Resize to small with `size` property.

```tsx
<Button style="pill" size="small" />
```

Disable button with `disable` property.

```tsx
<Button style="pill" disabled={true} />
```

Use `arrow` property to have left and right arrows.

```tsx
<Button style="rounded" arrow="prev" label="Prev" />
<Button style="rounded" arrow="next" label="Next" />
```

Use `color` property to change background color. Currently the label color fixed to white, so do not set light colors as background.

```tsx
<Buttons style="rounded" label="Button" color="#F76654" />
```
