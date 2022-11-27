import "./ExpenseInternalForm.css";

function NewExpenseForm() {
  return (
    <form class="w-full max-w-lg ml-40" >
      <div class="flex flex-wrap ">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Title
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Grocery"
          />
        
        </div>
        <div class=" md:w-1/2 px-3 mr-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Amount 
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="number"
            placeholder="$21"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mr-3 mt-7 md:w-1/2">
        <div class=" px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            
          >
            Date 
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="date"
            
          />
          <p class="text-gray-600 text-xs italic">
           Please select a date from calender
          </p>
        </div>
      </div>
      
        
      
    </form>
    // <form>
    //     <div className=" 'new-expense__controls">

    //         <div className="new-expense__control">
    //             <label>
    //                 Title
    //             </label>
    //             <input type="text"/>
    //         </div>
    //         <div className="new-expense__control">
    //             <label>
    //                 amount
    //             </label>
    //             <input type="number"/>
    //         </div>
    //         <div className="new-expense__control">
    //             <label>
    //                 Date
    //             </label>
    //             <input type="Date"/>
    //         </div>
    //     </div>
    //     <div className='new-expense__actions'>
    //         <button> submit </button>
    //     </div>
    // </form>
  );
}
export default NewExpenseForm;
