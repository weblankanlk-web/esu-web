import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default function FilterLoader() {
  return (
    <div className="filter-loader">
      <ThreeDots visible height="60" width="60" color="#02AEC9" radius="9" ariaLabel="three-dots-loading" />
    </div>
  );
}
