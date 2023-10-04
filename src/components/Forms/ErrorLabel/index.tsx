import { StyledDivAction, StyledErrorLabel } from "./styles";

interface ErrorLabelProps {
  label?: string;
}

export function ErrorLabel({ label }: ErrorLabelProps) {
  return (
    <StyledDivAction>
      <StyledErrorLabel>{label}</StyledErrorLabel>
    </StyledDivAction>
  );
}
