"use client";

import { useState } from "react";

export default function State() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const recordNumber = () => {
    if (inputValue === "") return;
    const num = Number(inputValue);
    setNumbers([...numbers, num]);
    setInputValue("");
  };

  const resetNumbers = () => {
    setNumbers([]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      recordNumber();
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl w-full max-w-md justify-self-center">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold mb-4">숫자 기록하기</h2>

        <div className="flex gap-2 mb-6">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="숫자를 입력하세요"
            className="input input-bordered flex-grow"
          />
          <button
            onClick={recordNumber}
            className="btn btn-primary"
            disabled={!inputValue}
          >
            기록
          </button>
        </div>

        {numbers.length > 0 && (
          <div className="bg-base-200 rounded-box p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">기록된 숫자</h3>
              <button
                onClick={resetNumbers}
                className="btn btn-sm btn-ghost text-error"
              >
                모두 지우기
              </button>
            </div>
            <div className="max-h-60 overflow-y-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="w-16">#</th>
                    <th>숫자</th>
                  </tr>
                </thead>
                <tbody>
                  {numbers.map((number, index) => (
                    <tr key={index} className="hover">
                      <th>{index + 1}</th>
                      <td className="font-mono">{number}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 text-sm text-right">
              총 {numbers.length}개의 항목이 있습니다.
            </div>
          </div>
        )}

        {numbers.length === 0 && (
          <div className="alert shadow-lg flex flex-col items-start">
            <div className="flex gap-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="font-bold translate-y-[1px]">기록이 없습니다!</h3>
            </div>
            <div>
              <div className="text-xs">
                위에 숫자를 입력하고 기록 버튼을 눌러주세요.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
