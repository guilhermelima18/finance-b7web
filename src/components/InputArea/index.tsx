import { Item } from "../../types/Item";
import { Container } from "./styles";

type InputAreaProps = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: InputAreaProps) => {
  const handleAddEvent = () => {
    let newItem = {
      date: new Date(2021, 9, 27),
      category: "food",
      title: "Item Teste",
      value: 250.5,
    };
    onAdd(newItem);
  };

  return (
    <Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </Container>
  );
};
