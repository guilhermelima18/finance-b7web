import { Container, Title, Info } from "./styles";

type ResumeItemProps = {
  title: string;
  value: number;
  color?: string;
};

export const ResumeItem = ({ title, value, color }: ResumeItemProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info color={color}>R$ {value}</Info>
    </Container>
  );
};
