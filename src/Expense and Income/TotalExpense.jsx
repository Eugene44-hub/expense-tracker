import React from "react";
import Header from "../header/Header";
const Totalexpense = ({expense}) => {
  return(
     <div className="expense"> 
  <Header amount={Math.abs(expense)} text={"Expense"}/>
   </div>
   )
};

export default Totalexpense;
