import React from "react";
import "./addTransaction.css"
import { useState,useContext } from "react";
import {GlobalContext} from "../context/GlobalState"

const TransactionForm = ({transType}) => {

const[name,setName]=useState("")
const[amount,setAmount]=useState(0)

const context=useContext(GlobalContext)

const {addTransaction}=context;


const handleSubmit=(e)=>{
  e.preventDefault();
  const NewTransaction=transType=="Add Expense"?{name,amount:-(+amount),id:Math.floor(Math.random()*1000)}:"Add Income"&&{name,amount:+amount,id:Math.floor(Math.random()*1000)}
addTransaction(NewTransaction)
  console.log(NewTransaction)
  setName("")
  setAmount("")
}


  
  return (
      <form onSubmit={handleSubmit}>
<div className="TransactionName">
<label htmlFor="Name">Name</label> 

<input type="text" name="TransactionName" value={name} onChange={(e)=>setName(e.target.value)} />
</div>

<div className="Amount">
<label htmlFor="Amount">Amount</label> 

<input type="number" name="Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
</div>

<div className="submit-btn">
    <button type="submit">Add Transaction</button>
</div>
      </form>
  )
};

export default TransactionForm;
