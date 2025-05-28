"use client";
import React from "react";
import Select from "react-select";

type Option = { label: string; value: string };

interface CustomSelectProps {
  options: Option[];
  value: Option | null;
  onChange: (selected: Option | null) => void;
  placeholder?: string;
  label?: string;
  required?: boolean;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  label,
  required = false,
}) => {
  return (
    <div className="inquire__field">
      {label && <label>{label}</label>}
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isClearable
        required={required}
        className="custom-select-dropdown"
        styles={{
          control: (base) => ({
            ...base,
            minHeight: 40,
            borderColor: "#ccc",
            boxShadow: "none",
          }),
        }}
      />
    </div>
  );
};

export default CustomSelect;
