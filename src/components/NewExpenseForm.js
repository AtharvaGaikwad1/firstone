import './ExpenseInternalForm.css';

function NewExpenseForm (){

    return(
        <form>
            <div className=" 'new-expense__controls">

                <div className="new-expense__control">
                    <label>
                        Title
                    </label>
                    <input type="text"/>
                </div>
                <div className="new-expense__control">
                    <label>
                        amount
                    </label>
                    <input type="number"/>
                </div>
                <div className="new-expense__control">
                    <label>
                        Date
                    </label>
                    <input type="Date"/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button> submit </button>
            </div>
        </form>
    )


}
export default NewExpenseForm;