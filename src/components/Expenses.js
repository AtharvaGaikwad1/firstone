import ExpenseItem from "./ExpenseItem";
import './expense.css';
import Card from "./Card";

function Expenses(props) {
  return (
    <Card className ='expenses'>
      <ExpenseItem
        title={props.arrOfDummy[0].title}
        amount={props.arrOfDummy[0].amount}
        time={props.arrOfDummy[0].time}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arrOfDummy[1].title}
        amount={props.arrOfDummy[1].amount}
        time={props.arrOfDummy[1].time}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arrOfDummy[2].title}
        amount={props.arrOfDummy[2].amount}
        time={props.arrOfDummy[2].time}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
