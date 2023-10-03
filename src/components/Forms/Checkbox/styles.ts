import { View } from "react-native";
import styled from "styled-components/native";

export const StyledCheckboxDiv = styled(View)`
  margin-top: 24px;
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledCheckbox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  border: 2px solid #303030;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const StyledCheckboxText = styled.Text`
  color: #303030;
  font-weight: bold;
  margin-left: 8px;
`;
