import { createContext, useState } from "react";
import "./App.css";
// import Form from './Pages/Form';
import Parent from "./Pages/Parent";
export const COUNTER_CONTEXT = createContext();

function App() {
  // const [count, setCount] = useState(0);
  // const value = { count, setCount };
  return (
      <div className="App">
        <Parent />
        {/* <Form/> */}
      </div>
  );
}

export default App;
