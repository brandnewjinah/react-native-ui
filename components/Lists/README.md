# Lists

A component to render continuous lists.

![Lists%2024bad33fd49947d0b22bd1684405033e/ListText2x.png](Lists%2024bad33fd49947d0b22bd1684405033e/ListText2x.png)

![Lists%2024bad33fd49947d0b22bd1684405033e/ListAvatar2x.png](Lists%2024bad33fd49947d0b22bd1684405033e/ListAvatar2x.png)

### Usage

Start by importing List component.

```tsx
import List from "./components/List/List";
```

Give it a label with `primary` property. It's required.

```tsx
<List primary="Priamary Text" />
```

`Secondary` property will place a line of text under primary

```tsx
<List primary="Priamary Text" secondary="Secondary text here" />
```

You can add text to the right of the primary with `sub` or `meta` property

```tsx
<List primary="Priamary Text" sub="Option" meta="date" />
```

`Overline` places text above primary

```tsx
<List primary="Priamary Text" overline="Overline" />
```

To add an icon to the left of the primary, pass icon as a child and set `icon` property to true

```tsx
<List primary="Priamary Text" icon={true}>
  <Icon />
</List>
```

Assign link to user photo in `avatar` property to show avatar

```tsx
<List primary="Priamary Text" avatar="http://..." />
```

If data contains no link to the user photo, it will display default icon. To change the background color of avatar, set `color` property. If you want to display the initial of the primary text instead, set `initial` to true.

```tsx
<List primary="Priamary Text" avatar="" color="#efd1be" initial={true}>
```

To display unread count, use `unread` property

```tsx
<List primary="Priamary Text" unread={10}>
```
