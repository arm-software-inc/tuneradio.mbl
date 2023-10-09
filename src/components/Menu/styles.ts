import { TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";

export const MenuWrapper = styled.View`
  margin: 16px 0px 48px 0px;
  border-radius: 25px;
  border-bottom-width: 3px;
  border-color: #303030;
`;

export const MenuBar = styled(TouchableOpacity)`
  width: 350px;
  height: 60px;
  border: 2px solid #303030;
  background-color: #a466ff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const IconHandler = styled(View)`
  width: 35px;
  height: 35px;
  background-color: #303030;
  border-radius: 5px;
  border: 2px solid #000;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Icon = styled.Image``;
