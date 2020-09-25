# Card

Card is a rectangular container that groups related contents and actions about a single subject.

### Usage

Card component is a simple container component that can house other components of your choice.

Start by importing Card component.

```tsx
import Card from "./components/Cards/Cards";
```

The Card container can have no border, `outline` border or `shadow`.

```tsx
<Card>...</Card>
<Card outline={true}>...</Card>
<Card shadow={true}>...</Card>
```

That's it. Use you place components of your choice inside. Please see examples.

### Examples

![Card%20b857625c80694088a51105aceab3bd98/CardLayout12x.png](Card%20b857625c80694088a51105aceab3bd98/CardLayout12x.png)

Make sure to use padding properties wisely to adjust the position.

```tsx
import Card from "../components/Cards/Cards";
import * as List from "../components/Lists/Lists";
import Typography from "../components/Typography/Typography";
import { Like } from "../components/Actions/Actions";

<Card shadow={true}>
  <List.Small
    avatar="http://..."
    primary="Primary"
    secondary={metadata}
    paddingVertical={25}
    paddingHorizontal={20}
  />
  <View style={{ paddingHorizontal: 20 }}>
    <Typography scale="body" color={colors.gray}>
      Lorem ipsum...
    </Typography>
  </View>
  <Like
    totalLikes={totalLikes}
    like={like}
    handleTotalLikes={(likes) => setTotalLikes(likes)}
    handleMyLike={(like) => setLike(like)}
    paddingVertical={25}
    paddingHorizontal={20}
  />
</Card>;
```

![Card%20b857625c80694088a51105aceab3bd98/CardLayout22x.png](Card%20b857625c80694088a51105aceab3bd98/CardLayout22x.png)

```tsx
import Card from "../components/Cards/Cards";
import * as List from "../components/Lists/Lists";
import Slider from "../components/Slider/Slider";
import { Like } from "../components/Actions/Actions";

<View style={{flex: 1, paddingVertical: 24 }}>
	<Card shadow={true}>
		<List.Small
		  avatar="http://..."
		  primary="Primary"
		  secondary={metadata}
		  paddingVertical={25}
		  paddingHorizontal={20}
		/>
		<View style={{ height: 200 }}>
		    <Slider images={imageData} paddingOffset={48} />
		  </View>
		<Like
		  totalLikes={totalLikes}
		  like={like}
		  handleTotalLikes={(likes) => setTotalLikes(likes)}
		  handleMyLike={(like) => setLike(like)}
		  paddingVertical={25}
		  paddingHorizontal={20}
		/>
	</Card>
<View>
```

- paddingOffset in the Slider is equal to padding-left (24) + padding-right (24) of the View.
