import { useState } from "react";
import "./styles.css";

const app = () => {
  const [data, setData] = useState(0);
  console.log(data);

  const plusHandler = () => {
    setData(data + 1);
  };

  const minusHandler = () => {
    setData(data - 1);
  };

  return (
    <div>
      <h1>Button To Increase and Decrease Count:</h1>
      <button onClick={plusHandler}>+</button>
      <h1>{data}</h1>
      <button onClick={minusHandler}>-</button>
    </div>
  );
};
export default app;
