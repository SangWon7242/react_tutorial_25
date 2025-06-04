"use client";

import { useState } from "react";

export default function State() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const recordNumber = () => {
    const num = inputValue === "" ? 0 : Number(inputValue);
    setNumbers([...numbers, num]);
    setInputValue("");
  };

  const resetNumbers = () => {
    setNumbers([]);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="숫자를 입력하세요"
          className="border p-2 mr-2"
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
