import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'meal',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e2',
    title: 'noodle',
    amount: 200,
    date: new Date(2021, 7, 22),
  },
  {
    id: 'e3',
    title: 'beef',
    amount: 1400,
    date: new Date(2020, 8, 22),
  }
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
    setExpenses(prevExpenses => [expense, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  )
}

export default App;
