import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./NewComponentExpenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";
// import ExpensesFilter from "../NewExpense/ExpensesFilter";

const NewComponentExpenses = (props) => {
  // const title = props.expenses.title;
  // const amount = props.expenses.amount;
  // const date = props.expenses.date;
  const [filteredYear, setfilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    // console.log('NewComponentExpenses.js');
    console.log(selectedYear);
  };
  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpense} />
        {/* {newFilterChangeHandler} */}
        {/* { props.item.filter((expense) => expense.date==={filterChangeHandler} )} */}
        {/* {filteredExpense.length===0 ? <p>No Expenses Found.</p> : filteredExpense.map((expense) =>())} */}
        <ExpensesList item={filteredExpense} />
        {/* <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
            <ExpenseItem title={props.item[2].title} amount={props.item[2].amount} date={props.item[2].date} />
            <ExpenseItem title={props.item[3].title} amount={props.item[3].amount} date={props.item[3].date} /> */}
      </Card>
    </div>
  );
};

export default NewComponentExpenses;
