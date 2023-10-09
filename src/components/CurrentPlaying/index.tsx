import { useState } from "react";
import {
  CurrentPlayingWrapper,
  CurrentPlayingBar,
  Logo,
  CurrentWrapper,
  CurrentWrapperTitle,
  CurrentWrapperDescription,
  IconsWrapper,
  Icon,
} from "./styles";
import { TouchableOpacity } from "react-native";

export function CurrentPlaying() {
  const [favorite, setIsFavorite] = useState<Boolean>(false);
  const [play, setIsPlaying] = useState<Boolean>(false);

  function handleSetFavorite(): void {
    if (favorite === false) setIsFavorite(true);
    else setIsFavorite(false);
  }

  function handlePlay(): void {
    if (play === false) setIsPlaying(true);
    else setIsPlaying(false);
  }

  return (
    <CurrentPlayingWrapper>
      <CurrentPlayingBar>
        <Logo source={require("../../assets/icons/RadioRockIcon.png")} />

        <CurrentWrapper>
          <CurrentWrapperTitle>89 FM 🇧🇷</CurrentWrapperTitle>
          <CurrentWrapperDescription>
            Missão Impossível
          </CurrentWrapperDescription>
        </CurrentWrapper>

        <IconsWrapper>
          {favorite ? (
            <TouchableOpacity onPress={handleSetFavorite}>
              <Icon
                source={require("../../assets/icons/HeartFavoriteIcon.png")}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleSetFavorite}>
              <Icon source={require("../../assets/icons/HeartWhiteIcon.png")} />
            </TouchableOpacity>
          )}

          {play ? (
            <TouchableOpacity onPress={handlePlay}>
              <Icon source={require("../../assets/icons/PauseIcon.png")} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handlePlay}>
              <Icon source={require("../../assets/icons/PlayIcon.png")} />
            </TouchableOpacity>
          )}
        </IconsWrapper>
      </CurrentPlayingBar>
    </CurrentPlayingWrapper>
  );
}
