import { createContext, useState } from "react";
import "./App.css";
// import Form from './Pages/Form';
import Parent from "./Pages/Parent";
export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);
  const value = { count, setCount };
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent />
        {/* <Form/> */}
      </div>
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
