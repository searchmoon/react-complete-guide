import './ExpenseForm.css';
import {useCallback, useState} from "react";
const ExpenseForm = (props) => {
  const vacantData = {
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  }

  const [userInput, setUserInput] = useState(vacantData);

  const titleChangeHandler = useCallback((event) => {
    setUserInput((prevState) => {
    return {
      ...prevState,
      enteredTitle: event.target.value,
    }});
    console.log(event);
  }, [setUserInput])

  const amountChangeHandler = useCallback((event) => {
    setUserInput((prevState) =>{
      return {
        ...prevState,
        enteredAmount: event.target.value,
      }});
    console.log(event);
  }, [setUserInput])

  const dateChangeHandler = useCallback((event) => {
    setUserInput((prevState) =>{
      return {
        ...prevState,
        enteredDate: event.target.value,
      }});
    console.log(event);
  }, [setUserInput])

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }
    console.log('expenseData', expenseData);
    props.onSaveExpenseData(expenseData);
    setUserInput(vacantData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={'new-expense__controls'}>
        <div className={'new-expense__control'}>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle} />
        </div>
        <div className={'new-expense__control'}>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={userInput.enteredAmount}/>
        </div>
        <div className={'new-expense__control'}>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={userInput.enteredDate}/>
        </div>
      </div>
      <div className={'new-expense__actions'}>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
