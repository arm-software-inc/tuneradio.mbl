import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

export const Text = styled.Text`
  font-size: 18px;
  color: blue;
  font-weight: 500;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: #fafafa;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;
