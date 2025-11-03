"use client";

import React, { useState } from "react";

interface QuantitySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initialValue = 1,
  min = 1,
  max = 99,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(value, min), max);
    setQuantity(clampedValue);
    onChange?.(clampedValue);
  };

  return (
    <div className="h-[48px] inline-flex items-center bg-grayLight text-black">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="disabled:opacity-30 px-[13px] disabled:cursor-not-allowed text-sm font-bold"
        aria-label="Decrease quantity"
      >
        -
      </button>

      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className="w-12 text-center px-[13px] bg-transparent text-sm font-bold focus:outline-none"
        aria-label="Quantity"
      />

      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="disabled:opacity-30 px-[13px] disabled:cursor-not-allowed text-sm font-bold"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
