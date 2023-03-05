import { useState } from "react";

function Counter() {
  console.log("render counter");
  const [number, setNumber] = useState(0);

  function handleClick(e) {
    e.stopPropagation();
    setTimeout(() => {
      setNumber(number => number + 1);// updater function
      setNumber(number => number + 1);// updater function
    }, 2000);
    setTimeout(() => {
      console.log(number);
    }, 1000);
  }
  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}>Add</button>
    </>
  );
}
export default Counter;
