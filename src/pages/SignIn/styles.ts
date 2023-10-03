import {
  Platform,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const ContainerView = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;

export const StyledDiv = styled(View)``;

export const Logo = styled.Image`
  margin: 42px 0px;
  width: 161.47px;
  height: 135.03px;
`;

export const StyledLabel = styled.Text`
  color: #303030;
  font-weight: bold;
  font-size: 18px;
  margin-top: 42px;
`;

export const StyledTextInput = styled.TextInput`
  margin-top: 8px;
  width: 300px;
  height: 50px;
  border-radius: 5px;
  padding: 8px;
  border: 1px solid #303030;
  border-bottom: 4px solid #303030;
  border-right: 4px solid #303030;
  outline: 0;
`;

export const StyledButton = styled(TouchableOpacity)`
  margin-top: 42px;
  width: 300px;
  height: 50px;
  background-color: #ffec74;
  border: 1px solid #303030;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonText = styled(Text)`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
