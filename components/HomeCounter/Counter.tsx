"use client";

import React from "react";

interface Counter {
  number?: number;
  name: string;
}

const Counter: React.FC<{ counterData: Counter }> = ({
    counterData,
}) => {
  return (
    <>
      <div id="counter-item">
        <div className="c-item-inner">
            <p className="counter-number">{counterData.number} +</p>
            <h6 className="counter-name" dangerouslySetInnerHTML={{ __html: counterData.name }} />
        </div>
      </div>
    </>
  );
};

export default Counter;
