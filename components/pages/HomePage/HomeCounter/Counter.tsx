"use client";

import React from "react";
import { useTheme } from "@/lib/ThemeContext";

interface Counter {
  number?: number;
  name: string;
}

const Counter: React.FC<{ counterData: Counter }> = ({
    counterData,
}) => {
  const { color } = useTheme();
  return (
    <>
      <div id="counter-item">
        <div className="c-item-inner">
            <p className="counter-number" style={{ color: color }}>{counterData.number} +</p>
            <h6 className="counter-name" dangerouslySetInnerHTML={{ __html: counterData.name }} />
        </div>
      </div>
    </>
  );
};

export default Counter;
