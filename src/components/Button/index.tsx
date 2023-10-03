import { PersonalizedButton, PersonalizedText } from "./styles";

interface ButtonProps {
  backgroundColor: string;
  color: string;
  label: string;
  handleSubmit: () => void;
}

export function Button({
  backgroundColor,
  color,
  label,
  handleSubmit,
}: ButtonProps) {
  return (
    <PersonalizedButton style={{ backgroundColor }} onPress={handleSubmit}>
      <PersonalizedText style={{ color }}>{label}</PersonalizedText>
    </PersonalizedButton>
  );
}
