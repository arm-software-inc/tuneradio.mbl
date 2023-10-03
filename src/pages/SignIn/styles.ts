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
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
  background-color: #f0edd7;
  height: 100%;
`;

export const StyledDiv = styled(View)`
  margin-top: 28px;
`;

export const Logo = styled.Image`
  margin: 16px 0px;
  width: 161.47px;
  height: 135.03px;
`;

export const StyledLabel = styled.Text`
  color: #303030;
  font-weight: bold;
  font-size: 18px;
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
  background-color: #fff;
`;

export const StyledDivAction = styled(View)`
  width: 300px;
  margin-top: 28px;
`;

export const StyledTextAction = styled(Text)`
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
`;
