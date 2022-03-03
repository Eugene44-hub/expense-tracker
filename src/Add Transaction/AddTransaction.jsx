import TransactionForm from "./TransactionForm";
import { useState } from "react";
import "./addTransaction.css";
const AddTransaction = () => {



  const [income, setIncome] = useState(false);
  const [expense, setExpense] = useState(false);

  const displayIncome = (value) => {
   
    setIncome(true);
    setExpense(false);
  };

  const displayExpense = (value) => {
    
    setIncome(false);
    setExpense(true);
  };

  return (
    <>
      <h2></h2>
      <form action="">
        <div className="chooseTransaction">
          <div>
            <label htmlFor="Income">Income</label>
            <input
              type="radio"
              name="choose"
              value={income}
              onChange={(e) => displayIncome(e.target.checked)}
            />
          </div>

          <div>
            <label htmlFor="Income">Expenses</label>
            <input
              type="radio"
              name="choose"
              value={expense}
              onChange={(e) => displayExpense(e.target.checked)}
            />
          </div>
        </div>
      </form>
{expense && (<>

    <h2 className="NewTransac">Add Expense</h2> 
    <TransactionForm transType="Add Expense"/>
</>
   
    )}
{income &&
<>
 <h2 className="NewTransac"> Add Income</h2>

<TransactionForm transType="Add Income"/>
</>
 
 }
    </>
  );
};

export default AddTransaction;
