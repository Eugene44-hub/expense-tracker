import React from "react";
import "./transaction.css"

const Transaction = ({name,amount,deleteTransaction,id}) => {
  

  
const sign=amount<0&&"-"

  return( 

      <>
  <li className={amount<0?"expense-list":"income-list"}>{name}<span className="amount">{sign}${Math.abs(amount)}</span>  
  <div className="delete" onClick={()=>deleteTransaction(id)}>
    x
  </div>
  </li>
  {/* <li className="expense-list">Flower <span className="amount">-$100</span></li>
  <li className="income-list">Gift<span className="amount">$100</span>  </li>
  <li className="expense-list">Samosa<span className="amount">-$100</span>  </li> */}
  

      </>
  )
};

export default Transaction;
