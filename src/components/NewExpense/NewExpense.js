import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";
const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
    console.log('expenseData', expenseData);
  }
  const stopEditingHandler = () => {
    setIsEditing( prev => !prev);
  }

  return (
    <div className={'new-expense'}>
      {!isEditing && <button onClick={stopEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
