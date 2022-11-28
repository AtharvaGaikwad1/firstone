import "./ExpenseForm.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  function saveExpDataHandler(enteredExpData) {
    const expenseData = {
      ...enteredExpData,
      id: Math.random().toString(),
    };
    props.giveHere(expenseData);
  }
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpData={saveExpDataHandler}></NewExpenseForm>
    </div>
  );
}

export default NewExpense;
