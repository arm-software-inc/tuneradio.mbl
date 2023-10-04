import { StyledLabel, StyledTextInputWrapper, StyledTextInput } from "./styles";

interface InputGroupProps {
  label?: string;
  value?: string;
  placeholder?: string;
  onChangeText?: () => void;
  onBlur?: () => void;
}

export function InputGroup({
  label,
  value,
  placeholder,
  onChangeText,
  onBlur,
}: InputGroupProps) {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextInputWrapper>
        <StyledTextInput
          onChange={onChangeText}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </StyledTextInputWrapper>
    </>
  );
}
