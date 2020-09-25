import React, { FC } from "react";
import Svg, { Path, Circle, G } from "react-native-svg";

import color from "../../components/Colors/Colors";

export const Search = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ff4500"
      strokeWidth={2}
    >
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35" />
    </Svg>
  );
};

export const ArrowRight = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    >
      <Path d="M5 12h14M12 5l7 7-7 7" />
    </Svg>
  );
};

export const ArrowLeft = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#fff"
      strokeWidth={2}
    >
      <Path d="M19 12H5M12 19l-7-7 7-7" />
    </Svg>
  );
};

export const Apple = () => {
  return (
    <Svg width={31} height={44} viewBox="0 0 31 44">
      <G fill="none" fillRule="evenodd">
        <Path fill="#000" d="M0 0h31v44H0z" />
        <Path
          d="M15.71 14.885c.858 0 1.933-.58 2.573-1.353.58-.7 1.002-1.68 1.002-2.658a1.79 1.79 0 00-.036-.374c-.954.036-2.102.64-2.79 1.45-.544.615-1.039 1.582-1.039 2.572 0 .145.024.29.036.338.06.013.157.025.254.025zM12.69 29.5c1.172 0 1.691-.785 3.153-.785 1.486 0 1.812.76 3.116.76 1.28 0 2.138-1.183 2.947-2.342.906-1.33 1.28-2.634 1.305-2.694-.085-.024-2.537-1.027-2.537-3.841 0-2.44 1.933-3.54 2.042-3.624-1.28-1.836-3.225-1.884-3.757-1.884-1.437 0-2.609.87-3.346.87-.797 0-1.848-.822-3.092-.822-2.367 0-4.771 1.957-4.771 5.653 0 2.295.894 4.723 1.993 6.293.942 1.329 1.764 2.416 2.947 2.416z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </G>
    </Svg>
  );
};

interface UserProps {
  size?: number;
  color?: string;
}

export const User: FC<UserProps> = (props) => {
  return (
    <Svg
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color ? props.color : "#fff"}
      strokeWidth={2}
    >
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <Circle cx={12} cy={7} r={4} />
    </Svg>
  );
};

interface HeartProps {
  size?: number;
  color?: string;
  stroke?: number;
}

export const Heart: FC<HeartProps> = (props) => {
  return (
    <Svg
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill={props.color}
      stroke={color.darkgray}
      strokeWidth={props.stroke}
    >
      <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </Svg>
  );
};
