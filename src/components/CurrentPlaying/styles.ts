import { TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";

export const CurrentPlayingWrapper = styled.View`
  border-radius: 25px;
  border-bottom-width: 4px;
  border-color: #a466ff;
`;

export const CurrentPlayingBar = styled(TouchableOpacity)`
  margin-top: 34px;
  width: 350px;
  height: 80px;
  border: 2px solid #303030;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  border-radius: 15px;
  border: 2px solid #303030;
  width: 80px;
  height: 80px;
`;

export const CurrentWrapper = styled(View)`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CurrentWrapperTitle = styled.Text`
  color: #303030;
  font-weight: bold;
`;

export const CurrentWrapperDescription = styled.Text`
  color: #303030;
`;

export const IconsWrapper = styled(View)`
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  margin-right: 24px;
`;
