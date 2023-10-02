import { Text, Button, Image } from "react-native";
import { ContainerView } from "../../components/Container/styles";

import { Logo } from "./styles";

export function SignIn({ navigation }: any) {
  return (
    <ContainerView>
      <Logo source={require("../../assets/icons/Icon.png")} />
      <Text>Radião</Text>
      {/* <Button
        title="Ir para Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      /> */}
    </ContainerView>
  );
}
