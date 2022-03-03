import React from "react";
import Header from "./header/Header";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalState";


const Balance = () => {

  const context=useContext(GlobalContext)

const {transactions}=context;
console.log(transactions);
const balance= transactions.map(transaction=>transaction.amount)
.reduce((total,amount)=>(total+amount),0)


  return( 
      <div style={{backgroundColor:"grey",padding:"2px"}}>
  <Header text={"Available Balance"} amount={500+balance} textColor="white"/>
  </div>
  );
};

export default Balance;
