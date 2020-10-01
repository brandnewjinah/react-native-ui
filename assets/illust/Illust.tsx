import React, { FC } from "react";
import Svg, { Path, Circle, G, Ellipse } from "react-native-svg";

import color from "../../components/Colors/Colors";

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

interface NatureProps {
  sizew: number;
  sizeh: number;
}

export const Nature: FC<NatureProps> = (props) => {
  return (
    <Svg
      data-name="Layer 1"
      width={props.sizew}
      height={props.sizeh}
      viewBox="0 0 692.605 748.733"
      {...props}
    >
      <Circle cx={485.389} cy={252.49} r={75.365} fill="#ff6584" />
      <Path
        d="M692.12 308.681c.167-.03.291-.146.485-.116a6.426 6.426 0 00-.33-.955l-.7.953z"
        fill="#fff"
      />
      <Path
        d="M186.633 430.865a175.145 175.145 0 008.181 48.416c.114.363.234.722.353 1.086H225.7c-.033-.326-.065-.69-.098-1.086-2.036-23.405-13.773-165.85.26-190.21-1.226 1.975-41.596 67.427-39.23 141.794z"
        fill="#e6e6e6"
      />
      <Path
        d="M188.924 479.28c.255.364.52.728.792 1.087h22.905c-.174-.31-.374-.674-.608-1.086-3.784-6.83-14.984-27.248-25.38-48.416-11.173-22.748-21.423-46.358-20.56-54.904-.266 1.928-7.997 60.68 22.85 103.32zM426.938 483.196a152.694 152.694 0 01-7.132 42.21c-.1.317-.204.63-.308.946h-26.619c.028-.284.057-.6.085-.946 1.775-20.405 12.008-144.591-.227-165.829 1.07 1.723 36.265 58.785 34.201 123.619z"
        fill="#e6e6e6"
      />
      <Path
        d="M424.941 525.406c-.222.317-.454.634-.691.946h-19.969c.152-.27.327-.587.53-.946 3.3-5.955 13.064-23.756 22.127-42.21 9.741-19.832 18.677-40.416 17.925-47.866.231 1.68 6.971 52.902-19.922 90.076z"
        fill="#e6e6e6"
      />
      <Path
        d="M122.584 61.173l12.413-9.929c-9.643-1.064-13.606 4.196-15.227 8.359-7.534-3.129-15.736.971-15.736.971l24.837 9.017a18.795 18.795 0 00-6.287-8.418zM496.468 10.067L508.88.14c-9.643-1.064-13.606 4.195-15.227 8.358-7.534-3.128-15.736.972-15.736.972l24.837 9.017a18.795 18.795 0 00-6.287-8.419zM679.11 402.69q0 12.34-.86 24.477a344.112 344.112 0 01-63.923 177.14q-7.324 10.223-15.38 19.872a347.514 347.514 0 01-46.154 45.845l-73.571-43.17-43.988-102.667S500.865 391.3 678.993 393.709q.111 4.474.117 8.98z"
        fill="#3f3d56"
      />
      <Path
        d="M678.25 427.167A346.077 346.077 0 01548.96 673.134l-68.349-40.103-39.01-91.054s63.212-127.983 236.648-114.81z"
        fill="#6c63ff"
      />
      <Path
        d="M614.327 604.308q-7.324 10.222-15.38 19.87a346.17 346.17 0 01-133.981 98.527q-15.795 6.513-32.333 11.486a378.838 378.838 0 01-240.245-15.254A347.292 347.292 0 0120.417 551.191q-7.165-15.062-12.887-30.89c66.523-48.732 197.606-118.514 340.471-50.706q59.279 28.134 105.862 51.29c78.804 39.063 131.252 67.224 160.464 83.423z"
        fill="#3f3d56"
      />
      <Path
        d="M598.946 624.179a346.28 346.28 0 01-578.53-72.988c55.559-43.935 183.701-122.888 324.326-56.153q54.247 25.747 96.86 46.94c82.818 41.047 133.833 68.943 157.344 82.2z"
        fill="#6c63ff"
      />
      <Path
        d="M500.887 705.393a349.545 349.545 0 01-35.921 17.312 345.065 345.065 0 01-131.9 26.028 346.365 346.365 0 01-276.22-137.568c82.648-8.715 311.1-20.466 444.04 94.228z"
        fill="#3f3d56"
      />
      <Path
        d="M464.966 722.705a346.418 346.418 0 01-383.96-82.923c30.061-4.415 266.072-34.742 383.96 82.923z"
        fill="#6c63ff"
      />
      <Path
        d="M621.068 210.794v.011C373.976 28.113 90.878 156.701 88.69 157.69v-.011A344.996 344.996 0 01333.066 56.646c120.128 0 225.958 61.216 288.002 154.148z"
        fill="#e6e6e6"
      />
      <Ellipse
        cx={334.364}
        cy={330.602}
        rx={76.906}
        ry={156.919}
        transform="rotate(-10.22 -215.36 1711.234)"
        fill="#3f3d56"
      />
      <Path
        d="M119.252 509.004c-2.478-187.336-65.158-363.14-65.79-364.893l-5.717 2.062c.63 1.744 62.966 176.627 65.43 362.914z"
        fill="#6c63ff"
      />
      <Path
        fill="#6c63ff"
        d="M6.175 239.558l1.87-5.783 75.04 24.268-1.87 5.783zM87.374 276.227l61.829-48.966 3.773 4.764-61.828 48.967z"
      />
      <Ellipse
        cx={309.499}
        cy={212.589}
        rx={83.219}
        ry={169.801}
        fill="#3f3d56"
      />
      <Path
        d="M301.815 490.526c33.33-199.975.335-399.227-.002-401.215l-6.483 1.098c.335 1.978 33.14 200.184-.002 399.038z"
        fill="#6c63ff"
      />
      <Path
        fill="#6c63ff"
        d="M233.13 181.876l3.103-5.8 75.252 40.252-3.102 5.8zM312.561 236.514l75.244-40.274 3.103 5.799-75.243 40.274z"
      />
      <Path
        d="M670.979 327.77a634.407 634.407 0 00-95.375-43.606c-182.14-65.907-362.751-40.506-433.446 53.817 55.017-115.553 251.328-151.887 449.432-80.205a646.926 646.926 0 0167.585 28.872 343.542 343.542 0 0111.804 41.122z"
        fill="#e6e6e6"
      />
      <Path
        d="M424.987 141.823l12.413-9.929c-9.643-1.064-13.606 4.196-15.227 8.358-7.534-3.128-15.736.972-15.736.972l24.837 9.017a18.795 18.795 0 00-6.287-8.418z"
        fill="#3f3d56"
      />
    </Svg>
  );
};
