import { Text } from "react-native";

import {
  Logo,
  ContainerView,
  StyledTextInput,
  StyledLabel,
  StyledDiv,
  StyledCheckbox,
  StyledCheckboxDiv,
  StyledCheckboxText,
  StyledTextAction,
  StyledDivAction,
} from "./styles";

import { useForm, Controller } from "react-hook-form";

import { Button } from "../../components/Button";
import { Divisor } from "../../components/Divisor";
import { Checkbox } from "../../components/Forms/Checkbox";

export function SignIn({ navigation }: any) {
  const {
    control,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    navigation.navigate("SignUp");
  }

  return (
    <ContainerView>
      <Logo source={require("../../assets/icons/Icon.png")} />

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>Email</StyledLabel>
            <StyledTextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="johndoe@mail.com"
            />
          </StyledDiv>
        )}
        name="email"
        rules={{ required: "E-mail is required." }}
      />
      {errors.email && <Text>Invalid e-mail.</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>Password</StyledLabel>
            <StyledTextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Password"
              secureTextEntry
            />
          </StyledDiv>
        )}
        name="password"
        rules={{ required: "Password is required." }}
      />
      {errors.password && <Text>Invalid password.</Text>}

      <Checkbox text="Remember me" />

      <Button
        backgroundColor="#ffec74"
        label="Sign In"
        color="#303030"
        handleSubmit={onSubmit}
      />

      <Button
        backgroundColor="#fff"
        label="Sign In with Google"
        color="#303030"
        handleSubmit={onSubmit}
      />

      <Button
        backgroundColor="#000"
        label="Sign In with Apple Id"
        color="#fff"
        handleSubmit={onSubmit}
      />

      <Divisor backgroundColor="#303030" />

      <StyledDivAction>
        <StyledTextAction>Don't have an account? Sign Up</StyledTextAction>
      </StyledDivAction>

      <StyledDivAction>
        <StyledTextAction>Forgotten your password?</StyledTextAction>
      </StyledDivAction>
    </ContainerView>
  );
}
