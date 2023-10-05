import { useForm, Controller } from "react-hook-form";

import {
  Logo,
  StyledDiv,
  Title,
  StyledTextInputWrapper,
  StyledTextInput,
  StyledLabel,
} from "./styles";

import { ContainerView } from "../../assets/styles/ContainerView";

import { Button } from "../../components/Button";
import { Divisor } from "../../components/Divisor";
import { Link } from "../../components/Link";
import { ErrorLabel } from "../../components/Forms/ErrorLabel";

export function SignIn({ navigation }: any) {
  const logoGoogle = require("../../assets/icons/GoogleIcon.png");

  const logoApple = require("../../assets/icons/AppleIcon.png");

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    navigation.navigate("Home");
  }

  function onSignUp() {
    navigation.navigate("SignUp");
  }

  function onResetPassword() {
    navigation.navigate("ResetPassword");
  }

  return (
    <ContainerView>
      <Logo source={require("../../assets/icons/Icon.png")} />

      <Title>Radião</Title>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>E-mail</StyledLabel>
            <StyledTextInputWrapper>
              <StyledTextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="johndoe@mail.com"
              />
            </StyledTextInputWrapper>
          </StyledDiv>
        )}
        name="email"
        rules={{ required: "E-mail is required." }}
      />
      {errors.email && <ErrorLabel label="Invalid e-mail." />}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <StyledDiv>
            <StyledLabel>Password</StyledLabel>
            <StyledTextInputWrapper>
              <StyledTextInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
                secureTextEntry
              />
            </StyledTextInputWrapper>
          </StyledDiv>
        )}
        name="password"
        rules={{ required: "Password is required." }}
      />
      {errors.password && <ErrorLabel label="Invalid password." />}

      <Button
        backgroundColor="#ffec74"
        label="Sign In"
        color="#303030"
        handleSubmit={handleSubmit(onSubmit)}
      />

      <Button
        backgroundColor="#fff"
        label="Sign In with Google"
        logoURL={logoGoogle}
        color="#303030"
        handleSubmit={onSubmit}
      />

      <Button
        backgroundColor="#000"
        label="Sign In with Apple Id"
        logoURL={logoApple}
        color="#fff"
        handleSubmit={onSubmit}
      />

      <Divisor backgroundColor="#303030" />

      <Link label="Don't have an account? Sign Up" onNavigate={onSignUp} />
      <Link label="Forgotten your password?" onNavigate={onResetPassword} />
    </ContainerView>
  );
}
