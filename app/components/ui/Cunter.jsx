"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white shadow-md rounded-xl w-[200px]">
      <h2 className="text-3xl font-bold">{count}</h2>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>

      <button
        className="px-4 py-2 bg-gray-400 text-white rounded-lg"
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
}
