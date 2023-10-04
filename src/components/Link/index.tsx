import { StyledDivAction, StyledTextAction } from "./styles";

interface LinkProps {
  label?: string;
  onNavigate: () => void;
}

export function Link({ label, onNavigate }: LinkProps) {
  return (
    <StyledDivAction>
      <StyledTextAction onPress={onNavigate}>{label}</StyledTextAction>
    </StyledDivAction>
  );
}
