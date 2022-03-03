import React from "react";
import "./expensesTracker.css";
import Balance from "./Balance.jsx";
import ExpenseIncome from "./Expense and Income/ExpenseIncome";
import TransactionList from "./Transaction History/TransactionList";
import AddTransaction from "./Add Transaction/AddTransaction"
import {GlobalProvider} from "./context/GlobalState"
const ExpensesTrackerApp = () => {
  return (
    <GlobalProvider>
    <div className="container">
      <Balance/>
      <ExpenseIncome/>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
};

export default ExpensesTrackerApp;
