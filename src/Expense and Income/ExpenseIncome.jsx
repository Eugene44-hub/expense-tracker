import React from "react";
import TotalIncome from "./TotalIncome";
import TotalExpense from "./TotalExpense";
import "./expenseAndIncome.css"
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const ExpenseIncome = () => {

  const context=useContext(GlobalContext)
console.log(context);

const {transactions}=context;

const income=transactions.map(transaction=>transaction.amount)
.filter(transaction=>transaction>0)
.reduce((total,amount)=>(total+amount),0)

const expense=transactions.map(transaction=>transaction.amount)
.filter(transaction=>transaction<0)
.reduce((total,amount)=>(total+amount),0)
  return (
    <div className="expensesAndIncome">
      <TotalExpense expense={expense}/>
      <TotalIncome income={income}/>
    </div>
  );
};

export default ExpenseIncome;

const arr=[1,,2]

console.log(arr[1]+1);