import { ContainerView } from "../../assets/styles/ContainerView";
import { Divisor } from "../../components/Divisor";
import { Menu } from "../../components/Menu/index";

import {
  Div,
  Title,
  TrendingContainer,
  Trending,
  TrendingWrapper,
  Logo,
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

      <Menu />
    </ContainerView>
  );
}
