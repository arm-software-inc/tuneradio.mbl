import { Platform, StatusBar } from "react-native";

import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const ContainerView = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : "0"};
`;
