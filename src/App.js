import logo from "./logo.svg";
import "./App.css";
import "./components/ExpenseItem";

import Expesnses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function App() {
  const arrOfDummy = [
    {
      title: "Phone",
      amount: "200",
      time: new Date(2000, 5, 2),
    },
    {
      title: "Laptop",
      amount: "400",
      time: new Date(2000, 6, 2),
    },
    {
      title: "Phone Charger",
      amount: "20",
      time: new Date(2000, 7, 2),
    },
  ];
  return (
    // here we use props whicha are baicaly like paramenters and give data to functions
    <div className="App">
      <NewExpense />
      <Expesnses arrOfDummy={arrOfDummy}></Expesnses>
    </div>
  );
}

export default App;
