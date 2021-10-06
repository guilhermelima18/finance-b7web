/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Header, HeaderText, Body } from "./styles/App";

import { Item } from "./types/Item";
import { Category } from "./types/Category";

import { items } from "./data/items";
import { categories } from "./data/categories";

import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

function App() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <TableArea filteredList={filteredList} />
      </Body>
    </Container>
  );
}

export default App;
