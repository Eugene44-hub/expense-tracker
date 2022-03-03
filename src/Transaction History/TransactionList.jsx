import React from "react";
import "./transaction.css"
import Transaction from "./Transaction";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const TransactionList = () => {
const context=useContext(GlobalContext)

const {transactions}=context;
const {deleteTransaction}=context
// console.log(transactions)
  

  return (
     <ul>
     {transactions.map(transaction=><Transaction key={transaction.id} amount={transaction.amount} name={transaction.name} deleteTransaction={deleteTransaction} id={transaction.id} />)}

     </ul>
  );
};

export default TransactionList;
