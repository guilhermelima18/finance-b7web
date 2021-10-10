/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Container, Header, HeaderText, Body } from "./styles/App";

import { Item } from "./types/Item";

import { items } from "./data/items";
import { categories } from "./data/categories";

import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InputArea } from "./components/InputArea";

function App() {
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  console.log(filteredList);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }

      setIncome(incomeCount);
      setExpense(expenseCount);
    }
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = {
      date: item.date,
      title: item.title,
      value: item.value,
      category: item.category,
    };

    setList([...list, newList]);
  };

  return (
    <Container>
      <Header>
        <HeaderText>Sistema Financeiro</HeaderText>
      </Header>
      <Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAddItem} />
        <TableArea filteredList={filteredList} />
      </Body>
    </Container>
  );
}

export default App;
