import { StyledDivisor } from "./styles";

interface DivisorProps {
  backgroundColor: string;
}

export function Divisor({ backgroundColor }: DivisorProps) {
  return <StyledDivisor style={{ backgroundColor }} />;
}
