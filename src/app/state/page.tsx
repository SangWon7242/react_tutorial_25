"use client";

import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  const increaseNum = () => setCount(count + 1);
  const decreaseNum = () => setCount(count - 1);
  const resetNum = () => setCount(0);

  return (
    <div>
      <div>숫자 : {count}</div>
      <button onClick={increaseNum}>증가</button>
      &nbsp;
      <button onClick={decreaseNum}>감소</button>
      &nbsp;
      <button onClick={resetNum}>초기화</button>
    </div>
  );
}
