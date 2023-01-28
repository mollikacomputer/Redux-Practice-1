import React, {useReducer } from "react";
const Parent = () => {
  const initialState = 0;
  const reducer = (state, action) =>{
    if(action.type === "INCREMENT"){
      return state + action.payload;
    } else if(action.type === "DECREMENT"){
      return state - action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="grid justify-items-center ">
        <h2 className="text-2xl my-6">Parent {state} </h2>
          <div>
            <button
              className="btn btn-warning mr-2"
              onClick={() => dispatch({type:"DECREMENT", payload:5})}
            >Decrise</button>
            <button
              className="btn btn-error"
              onClick={() => dispatch({type: "INCREMENT", payload:5 })}
            > Increase</button>
          </div>
    </div>
  );
};
export default Parent;
