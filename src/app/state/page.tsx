"use client";

import { useState } from "react";

export default function State() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<number>(0);

  const recordNumber = () => {
    setNumbers([...numbers, inputValue]);
    setInputValue(0);
  };

  const resetNumbers = () => {
    setNumbers([]);
    setInputValue(0);
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={recordNumber}>기록</button>
        &nbsp;
        <button onClick={resetNumbers}>리셋</button>
      </div>
      <div>
        {numbers.length > 0 && (
          <>
            <h1>기록된 숫자</h1>
            <ul>
              {numbers.map((number, index) => (
                <li key={index}>
                  {index + 1} : {number}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
