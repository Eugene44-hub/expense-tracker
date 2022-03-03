import React from "react";
import Header from "../header/Header";

const TotalIncome = ({income}) => {
  return(  <div className="income"> 
  <Header amount={income} text={"Income"}/>

   </div>)
};

export default TotalIncome;
