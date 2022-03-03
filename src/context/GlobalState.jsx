import { createContext } from "react";
import { useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: [
    {
      id: 1,
      name: "Freelancing Job",
      amount: 100,
    },
    {
      id: 2,
      name: "Flower",
      amount: -50,
    },
    {
      id: 3,
      name: "Gift",
      amount: 100,
    },
    {
      id: 4,
      name: "Samosa",
      amount: -50,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

const addTransaction=(transaction)=>{
    
        dispatch({
            type:"ADD_TRANSACTION",
            payload:transaction
        })
    
}

const deleteTransaction=(id)=>{
dispatch({
    type:"DELETE_TRANSACTION",
    payload:id
})
}


  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction

      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
