# Lists

A component to render continuous lists.

<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ListText%402x.png" alt="button" width="375"/>
<img src="https://raw.githubusercontent.com/brandnewjinah/react-native-ui/master/assets/readme/ListAvatar%402x.png" alt="button" width="375"/>

### Usage

<br>

Start by importing all from List component.

```tsx
import * as List from "./components/List/List";
```

<br>

List comes in two scales. Default and Small.

```tsx
<List.Default />
<List.Small />
```

<br>

Give it a label with `primary` property. It's required.

```tsx
<List.Default primary="Priamary Text" />
```

<br>

`Secondary` property will place a line of text under primary

```tsx
<List.Default primary="Priamary Text" secondary="Secondary text here" />
```

<br>

You can add text to the right of the primary with `sub` or `meta` property

```tsx
<List.Default primary="Priamary Text" sub="Option" meta="date" />
```

<br>

`Overline` places text above primary

```tsx
<List.Default primary="Priamary Text" overline="Overline" />
```

<br>

To add an icon to the left of the primary, pass icon as a child and set `icon` property to true

```tsx
<List.Default primary="Priamary Text" icon={true}>
  <Icon />
</List.Default>
```

<br>

Assign link to user photo in `avatar` property to show avatar

```tsx
<List.Default primary="Priamary Text" avatar="http://..." />
```

<br>

If data contains no link to the user photo, it will display default icon. To change the background color of avatar, set `color` property. If you want to display the initial of the primary text instead, set `initial` to true.

```tsx
<List.Default primary="Priamary Text" avatar="" color="#efd1be" initial={true}>
```

<br>

To display unread count, use `unread` property

```tsx
<List.Default primary="Priamary Text" unread={10}>
```
