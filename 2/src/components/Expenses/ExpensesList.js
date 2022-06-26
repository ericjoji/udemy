import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    // let expenseContent = <p>No expense Found.</p>;   

    if (props.item.length ===0) {
        // expenseContent = ;
        return <h2 className="expenses-list__fallback">found no expenses.</h2>;
    }

    return <ul className="expenses-list">
        {props.item.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
        ))}
    </ul>
};

export default ExpensesList;
