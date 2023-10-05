import { ContainerView } from "../../assets/styles/ContainerView";
import { Menu } from "../../components/Menu/index";

import { Text } from "react-native";

export function Settings() {
  return (
    <ContainerView>
      <Menu />
      <Text>Settings</Text>
    </ContainerView>
  );
}
