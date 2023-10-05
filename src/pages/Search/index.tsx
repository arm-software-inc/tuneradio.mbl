import { ContainerView } from "../../assets/styles/ContainerView";
import { Menu } from "../../components/Menu/index";

import { Text } from "react-native";

export function Search() {
  return (
    <ContainerView>
      <Menu />
      <Text>Search</Text>
    </ContainerView>
  );
}
