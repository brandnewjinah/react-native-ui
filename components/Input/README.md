# Input

A component to allow user to input text

<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/Input.png" alt="input" width="780"/>

### Usage

Start by importing Input component.

```tsx
import Input from "./components/Input/Input";
```


Set `style` and give it a `label`. By default, the input field has rounded corners.

```tsx
<Input label="Name" />
<Input style="pill" label="Email" />
<Input style="underline" label="Zipcode" />
```


You can add a prefix to the input field with `prefix` property.

```tsx
<Input style="pill" prefix="$" />
```


Set `type` to password for password field

```tsx
<Input type="password" placeholder="Enter Password" />
```


Disable input field with `disable` property.

```tsx
<Input style="pill" disabled={true} />
```


Active field is highlighted. You can customize the highlight color with `color` property.

```tsx
<Input style="pill" color="#00a699" />
```


You can pass error message with `error` property.

```tsx
<Input style="underline" error="Error message here" />
```


You can set keyboard type with `keyboard` property. Refer to React Native doc for values.

```tsx
<Input style="pill" keyboard="number-pad" />
```


