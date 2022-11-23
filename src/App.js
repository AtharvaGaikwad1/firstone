import logo from "./logo.svg";
import "./App.css";
import "./components/ExpenseItem";
import ExpenseItem from "./components/ExpenseItem";

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
    <div className="App">
      <h2>Expense App</h2>
      <ExpenseItem
        title={arrOfDummy[0].title}
        amount={arrOfDummy[0].amount}
        time={arrOfDummy[0].time}
      ></ExpenseItem>
      <ExpenseItem
        title={arrOfDummy[1].title}
        amount={arrOfDummy[1].amount}
        time={arrOfDummy[1].time}
      ></ExpenseItem>
      <ExpenseItem
        title={arrOfDummy[2].title}
        amount={arrOfDummy[2].amount}
        time={arrOfDummy[2].time}
      ></ExpenseItem>
    </div>
  );
}

export default App;
