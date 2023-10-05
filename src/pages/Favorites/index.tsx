import { ContainerView } from "../../assets/styles/ContainerView";
import { Menu } from "../../components/Menu/index";

import { Text } from "react-native";

export function Favorites() {
  return (
    <ContainerView>
      <Menu />
      <Text>Favorites</Text>
    </ContainerView>
  );
}
