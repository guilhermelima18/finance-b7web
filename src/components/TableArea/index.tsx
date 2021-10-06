import { Table, TableHeadColumn } from "./styles";
import { Item } from "../../types/Item";

interface ListProps {
  filteredList: Item[];
}

export const TableArea = ({ filteredList }: ListProps) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={100}>Data</TableHeadColumn>
          <TableHeadColumn width={130}>Categoria</TableHeadColumn>
          <TableHeadColumn>Título</TableHeadColumn>
          <TableHeadColumn width={150}>Valor</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {filteredList &&
          filteredList.map((item, index) => (
            <tr key={index}>
              <td></td>
              <td>{item.category}</td>
              <td>{item.title}</td>
              <td>{item.value}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};
