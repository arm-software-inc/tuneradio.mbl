import { View, TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const Div = styled(View)`
  width: 350px;
  margin-top: 28px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #303030;
  font-weight: bold;
`;

export const TrendingContainer = styled(TouchableOpacity)`
  margin-top: 12px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TrendingWrapper = styled.View`
  border-radius: 25px;
  border-bottom-width: 3px;
  border-color: #303030;
`;

export const Trending = styled(TouchableOpacity)`
  width: 150px;
  height: 150px;

  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  border: 2px solid #303030;
`;
