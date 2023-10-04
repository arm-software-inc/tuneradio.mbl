import { TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";

export const ButtonWrapper = styled.View`
  border-radius: 25px;
  border-bottom-width: 3px;
  border-color: #303030;
`;

export const PersonalizedButton = styled(TouchableOpacity)`
  margin-top: 24px;
  padding: 12px;
  width: 300px;
  height: 50px;
  border: 2px solid #303030;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-right: 10px;
`;

export const PersonalizedText = styled.Text`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
