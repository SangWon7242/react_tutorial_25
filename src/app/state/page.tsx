"use client";

import { useState } from "react";

export default function State() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>숫자 : {count}</div>
      <button onClick={() => setCount(count + 1)}>증가</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>감소</button>
    </div>
  );
}
