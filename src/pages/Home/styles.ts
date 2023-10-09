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

export const HighlightsContainer = styled(TouchableOpacity)`
  margin-top: 24px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HighlightsDiv = styled(View)``;

export const HighlightsText = styled.Text`
  font-size: 16px;
  color: #303030;
  font-weight: bold;
`;

export const TotalListeners = styled.Text`
  font-size: 14px;
  color: #ff6666;
  font-weight: 600;
`;

export const PlayButton = styled(TouchableOpacity)`
  padding: 12px;
  width: 130px;
  border: 2px solid #303030;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonIcon = styled.Image`
  margin-left: 8px;
`;

export const RadioCardWrapper = styled.View`
  border-radius: 25px;
  border-bottom-width: 4px;
  border-color: #ff6666;
`;

export const RadioCard = styled(TouchableOpacity)`
  padding: 12px;
  margin-top: 16px;
  width: 350px;
  border: 2px solid #303030;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RadioCardImage = styled.Image``;

export const TagsContainer = styled(View)`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 28px;
`;

export const TagsSection = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TagsTitle = styled.Text`
  font-size: 16px;
  color: #303030;
  font-weight: bold;
`;

export const TagsWrapper = styled.View`
  border-radius: 25px;
  border-bottom-width: 4px;
  border-color: #303030;
`;

export const TagsCard = styled(TouchableOpacity)`
  width: 170px;
  height: 50px;
  padding: 12px;
  margin-top: 16px;
  border: 2px solid #303030;
  background-color: #fff;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TagsIcon = styled.Image`
  margin-right: 16px;
`;
