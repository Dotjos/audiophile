"use client";
import React, { useState } from "react";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function FormInput({
  label,
  id,
  type = "text",
  placeholder = "",
  value: controlledValue,
  onChange,
}: FormInputProps) {
  const [internalValue, setInternalValue] = useState("");

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-[9px]">
      <label
        htmlFor={id}
        className="text-black text-[12px] font-bold tracking-normal leading-[-0.214px]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-3 pt-[18px] text-[14px] pb-[19px] text-black/40 border border-grayBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    </div>
  );
}
