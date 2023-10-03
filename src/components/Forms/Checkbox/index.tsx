import {
  StyledCheckboxDiv,
  StyledCheckbox,
  StyledCheckboxText,
} from "./styles";

interface CheckboxProps {
  text?: string;
}

export function Checkbox({ text }: CheckboxProps) {
  return (
    <StyledCheckboxDiv>
      <StyledCheckbox />
      <StyledCheckboxText>{{ text }}</StyledCheckboxText>
    </StyledCheckboxDiv>
  );
}
