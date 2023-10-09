import { ContainerView } from "../../assets/styles/ContainerView";
import { Divisor } from "../../components/Divisor";
import { FooterMenu } from "../../components/FooterMenu";

import {
  Div,
  Title,
  TrendingContainer,
  Trending,
  TrendingWrapper,
  Logo,
  HighlightsContainer,
  HighlightsText,
  TotalListeners,
  HighlightsDiv,
  PlayButton,
  PlayButtonIcon,
  RadioCardWrapper,
  RadioCard,
  RadioCardImage,
  TagsContainer,
  TagsTitle,
  TagsWrapper,
  TagsCard,
  TagsSection,
  TagsIcon,
} from "./styles";

export function Home() {
  return (
    <ContainerView>
      <Div>
        <Title>Trending</Title>
      </Div>

      <TrendingContainer>
        <TrendingWrapper>
          <Trending>
            <Logo source={require("../../assets/icons/WebRadioIcon.png")} />
          </Trending>
        </TrendingWrapper>

        <TrendingWrapper>
          <Trending>
            <Logo
              source={require("../../assets/icons/MetropolitanaIcon.png")}
            />
          </Trending>
        </TrendingWrapper>
      </TrendingContainer>

      <Divisor backgroundColor="#303030" />

      <HighlightsContainer>
        <HighlightsDiv>
          <HighlightsText>Today's Highlight</HighlightsText>
          <TotalListeners>123k listeners</TotalListeners>
        </HighlightsDiv>

        <HighlightsDiv>
          <PlayButton>
            <HighlightsText>Play now</HighlightsText>
            <PlayButtonIcon
              source={require("../../assets/icons/PauseIcon.png")}
            />
          </PlayButton>
        </HighlightsDiv>
      </HighlightsContainer>

      <RadioCardWrapper>
        <RadioCard>
          <RadioCardImage
            source={require("../../assets/icons/BBCRadioIcon.png")}
          />
        </RadioCard>
      </RadioCardWrapper>

      <TagsContainer>
        <TagsTitle>Find your genre</TagsTitle>

        <TagsSection>
          <TagsWrapper>
            <TagsCard>
              <TagsIcon source={require("../../assets/icons/NewsIcon.png")} />
              <TagsTitle>Talk/News</TagsTitle>
            </TagsCard>
          </TagsWrapper>

          <TagsWrapper>
            <TagsCard>
              <TagsIcon source={require("../../assets/icons/SportsIcon.png")} />
              <TagsTitle>Sports</TagsTitle>
            </TagsCard>
          </TagsWrapper>

          <TagsWrapper>
            <TagsCard>
              <TagsIcon source={require("../../assets/icons/RockIcon.png")} />
              <TagsTitle>Rock n' roll</TagsTitle>
            </TagsCard>
          </TagsWrapper>

          <TagsWrapper>
            <TagsCard>
              <TagsIcon source={require("../../assets/icons/PopIcon.png")} />
              <TagsTitle>Pop</TagsTitle>
            </TagsCard>
          </TagsWrapper>
        </TagsSection>
      </TagsContainer>

      <FooterMenu />
    </ContainerView>
  );
}
