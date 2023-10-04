import {
  ButtonWrapper,
  PersonalizedButton,
  Logo,
  PersonalizedText,
} from "./styles";

interface ButtonProps {
  backgroundColor: string;
  color: string;
  logoURL?: string;
  label: string;
  handleSubmit: () => void;
}

export function Button({
  backgroundColor,
  color,
  logoURL,
  label,
  handleSubmit,
}: ButtonProps) {
  return (
    <ButtonWrapper>
      <PersonalizedButton style={{ backgroundColor }} onPress={handleSubmit}>
        {logoURL && <Logo source={logoURL} />}
        <PersonalizedText style={{ color }}>{label}</PersonalizedText>
      </PersonalizedButton>
    </ButtonWrapper>
  );
}
