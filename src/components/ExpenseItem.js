import './ExpenseItem.css';


function ExpenseItem(props){
    const demoDate = new Date(2001,5,29);
    const expenseDemoTitle = " Purse ";
    const expenseAmount = 21.21


    return(
        <>
        <div className = 'expense-item'>
            <div className = "expense-item__description">
             {props.time.toString()}
            </div>
            <div>
                <h3> {props.title}</h3>
                <div className = "expense-item__price">${props.amount}</div>
            </div>
        </div>
        
        </>
    )
}

export default  ExpenseItem;