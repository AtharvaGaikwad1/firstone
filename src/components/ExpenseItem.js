import Card from "./Card";
import "./ExpenseItem.css";
import ExpenseDateFaltu from "./ExpeseDateFaltu";
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDateFaltu date={props.time} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
