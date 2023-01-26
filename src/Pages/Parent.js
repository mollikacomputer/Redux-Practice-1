import React, { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Parent = () => {
  //   const { count, setCount } = useContext(COUNTER_CONTEXT);
  const { count, setCount } = useContext(COUNTER_CONTEXT);
  return (
    <div className="grid justify-items-center ">
        <h2 className="text-2xl my-6">Parent {count} </h2>
          <div>
            <button
              className="btn btn-warning mr-2"
              //   onClick={() => setCount((prvState) => prvState - 1)}
              onClick={() => setCount((prvState) => prvState - 1)}
            >
              Decrise
            </button>
            <button
              className="btn btn-error"
              //   onClick={() => setCount((prvState) => prvState + 1)}
              onClick={() => setCount((prvState) => prvState + 1)}
            >
              Increase
            </button>
          </div>
    </div>
  );
};

export default Parent;
