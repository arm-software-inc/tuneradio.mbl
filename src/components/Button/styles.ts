import { TouchableOpacity } from "react-native";

import styled from "styled-components/native";

export const PersonalizedButton = styled(TouchableOpacity)`
  margin-top: 16px;
  width: 300px;
  height: 50px;
  border: 1px solid #303030;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PersonalizedText = styled.Text`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
