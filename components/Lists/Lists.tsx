import React, { FC } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

import Typography from "../Typography/Typography";

//import styles and assets
import styled from "styled-components/native";
import color from "../Colors/Colors";
import { User } from "../../assets/icons/Icons";

interface Props {
  primary?: string;
  primary2?: string;
  secondary?: string;
  secondary2?: string;
  color?: string;
  overline?: string;
  sub?: string;
  sub2?: string;
  meta?: string;
  avatar?: any;
  avatarSmall?: boolean;
  option?: any;
  icon?: any;
  unread?: number;
  initial?: boolean;
  paddingVertical?: number;
  paddingHorizontal?: number;
  onPress: () => void;
}

export const Default: FC<Props> = (props) => {
  const ContainerPadding = {
    ...(props.paddingHorizontal && {
      paddingHorizontal: props.paddingHorizontal,
    }),
    ...(props.paddingVertical && {
      paddingVertical: props.paddingVertical,
    }),
  };
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <Container style={ContainerPadding}>
        {props.avatar ? (
          <Avatar source={{ uri: props.avatar }} />
        ) : props.avatar === null && props.initial === true ? (
          <AvatarEmpty
            style={{ ...(props.color && { backgroundColor: props.color }) }}
          >
            <Typography scale="subtitle" color={color.black}>
              {props.primary && props.primary.charAt(0)}
            </Typography>
          </AvatarEmpty>
        ) : props.avatar === null ? (
          <AvatarEmpty
            style={{ ...(props.color && { backgroundColor: props.color }) }}
          >
            <User />
          </AvatarEmpty>
        ) : null}
        {props.icon && <Icon>{props.icon}</Icon>}
        <Main>
          {props.overline && (
            <Overline>
              <Typography scale="overline" color={color.gray}>
                {props.overline}
              </Typography>
            </Overline>
          )}
          <Primary>
            {props.primary && (
              <Typography
                scale="subtitle"
                color={color.black}
                numberOfLines={1}
              >
                {props.primary}
              </Typography>
            )}
            {props.meta && (
              <Typography scale="overline" color={color.gray}>
                {props.meta}
              </Typography>
            )}
            {props.sub && (
              <Typography scale="subtitle" color={color.gray}>
                {props.sub}
              </Typography>
            )}
          </Primary>
          <Secondary>
            {props.secondary && props.unread ? (
              <View style={{ width: "80%" }}>
                <Typography scale="body" color={color.gray} numberOfLines={1}>
                  {props.secondary}
                </Typography>
              </View>
            ) : props.secondary ? (
              <Typography scale="body" color={color.gray} numberOfLines={1}>
                {props.secondary}
              </Typography>
            ) : null}

            {props.unread && (
              <NumContainer>
                <Typography scale="caption" color="#ffffff">
                  {props.unread}
                </Typography>
              </NumContainer>
            )}
          </Secondary>
        </Main>
        {props.option && props.option}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export const Small: FC<Props> = (props) => {
  const ContainerPadding = {
    ...(props.paddingHorizontal && {
      paddingHorizontal: props.paddingHorizontal,
    }),
    ...(props.paddingVertical && {
      paddingVertical: props.paddingVertical,
    }),
  };
  return (
    <Container style={ContainerPadding}>
      {props.avatar ? (
        <AvatarSmall source={{ uri: props.avatar }} />
      ) : props.avatar === null && props.initial === true ? (
        <AvatarSmallEmpty
          style={{ ...(props.color && { backgroundColor: props.color }) }}
        >
          <Typography scale="body" color={color.black}>
            {props.primary && props.primary.charAt(0)}
          </Typography>
        </AvatarSmallEmpty>
      ) : props.avatar === null ? (
        <AvatarSmallEmpty
          style={{ ...(props.color && { backgroundColor: props.color }) }}
        >
          <User size={18} />
        </AvatarSmallEmpty>
      ) : null}
      {props.icon && <Icon>{props.children}</Icon>}
      <Main>
        {props.overline && (
          <Overline>
            <Typography scale="caption" color={color.gray}>
              {props.overline}
            </Typography>
          </Overline>
        )}
        <Primary>
          {props.primary && (
            <Typography scale="body" color={color.black} numberOfLines={1}>
              {props.primary}
            </Typography>
          )}
          {props.meta && (
            <Typography scale="caption" color={color.gray}>
              {props.meta}
            </Typography>
          )}
          {props.sub && (
            <Typography scale="body" color={color.gray}>
              {props.sub}
            </Typography>
          )}
        </Primary>
        <Secondary>
          {props.secondary && props.unread ? (
            <View style={{ width: "80%" }}>
              <Typography scale="overline" color={color.gray} numberOfLines={1}>
                {props.secondary}
              </Typography>
            </View>
          ) : props.secondary ? (
            <Typography scale="overline" color={color.gray} numberOfLines={1}>
              {props.secondary}
            </Typography>
          ) : null}

          {props.unread && (
            <NumContainer>
              <Typography scale="caption" color="#ffffff">
                {props.unread}
              </Typography>
            </NumContainer>
          )}
        </Secondary>
      </Main>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  background-color: ${color.lightgray};
`;

const AvatarEmpty = styled.View`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
  background-color: ${color.lightgray};
`;

const AvatarSmall = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-color: ${color.lightgray};
`;

const AvatarSmallEmpty = styled.View`
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-color: ${color.lightgray};
`;

const Icon = styled.View`
  margin-right: 10px;
`;

const Main = styled.View`
  flex: 1;
  justify-content: center;
`;
const Overline = styled.View`
  margin-bottom: 2px;
`;

const Primary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Secondary = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NumContainer = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: #ff7474;
`;

const Option = styled.View`
  width: 50px;
  height: 100%;
  background-color: darkblue;
`;
