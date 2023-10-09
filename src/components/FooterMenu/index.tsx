import { CurrentPlaying } from "../CurrentPlaying";
import { Menu } from "../Menu";

import { FooterWrapper } from "./styles";

export function FooterMenu() {
  return (
    <FooterWrapper>
      <CurrentPlaying />
      <Menu />
    </FooterWrapper>
  );
}
