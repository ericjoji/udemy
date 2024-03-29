import React from 'react';
// import Card from '../UI/Card';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    // const [enteredDate, setEnteredDate] = useState('');
    const ExpenseFilterHandler = (event) =>{
        props.onChangeFilter(event.target.value);
        // console.log('check');
        // console.log(event.target.value);working
    }

  return (
    
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={ExpenseFilterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    
  );
};

export default ExpensesFilter;