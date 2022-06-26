import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{
    const saveExpenseDAtaHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        
    };
    

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDAtaHandler} />
        </div>
    );
};

export default NewExpense;