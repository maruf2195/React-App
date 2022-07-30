import React from "react";
import CounterClass from "./components/CounterClass";
import CounterFunctional from "./components/CounterFunction";

const App = () => {
  return (
    <>
      <h2>COUNTER APP  </h2>
      <hr />
      
      <CounterFunctional />

      {/* <p>Ex: Class Component</p>
      <CounterClass /> */}
    </>
  );
};

export default App;
