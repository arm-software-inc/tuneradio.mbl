import { Text, Button } from "react-native";
import { ContainerView } from "../../components/Container/styles";

export function SignIn({ navigation }) {
  return (
    <ContainerView>
      <Text>Sign In Page</Text>
      <Button
        title="Ir para Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button
        title="Ir para Reset Password"
        onPress={() => navigation.navigate("ResetPassword")}
      />
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </ContainerView>
  );
}
