"use client";
import React from "react";
import type { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/redux/features/counter/counterSlice";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div className=" flex items-center gap-4 ">
        <button
          className="border bg-green-800 px-4 py-2 rounded-md text-white"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span className=" border rounded p-2 font-bold bg-slate-500 text-white text-2xl">
          {count}
        </span>
        <button
          className="border bg-red-800 px-4 py-2 rounded-md text-white"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
