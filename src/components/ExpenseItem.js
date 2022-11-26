import Card from "./Card";
import React,{useState}  from 'react';
import "./ExpenseItem.css";
import ExpenseDateFaltu from "./ExpeseDateFaltu";
function ExpenseItem(props) {


  

    const [currtitle , updatedTitle] = useState(props.title);
    const clickHandler=()=>{

      updatedTitle('updated hehe');
    }
  

  
  return (

 <Card className="expense-item">
      <ExpenseDateFaltu date={props.time} />
      <div className="expense-item__description">
        <h2>{currtitle}</h2>
      </div>
      <div>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>
        update ME
      </button>
    </Card>
  );
}

export default ExpenseItem;
