"use client";

import React from "react";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "default" | "small"; // New size prop
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
  size = "default", // Default size
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(value, min), max);
    onQuantityChange(clampedValue);
  };

  // Size-specific classes
  const sizeClasses = {
    default: {
      container: "h-[48px]",
      button: "px-[13px] text-sm",
      input: "w-12 text-sm",
    },
    small: {
      container: "h-[32px] w-[96px]",
      button: "px-[10px] text-[13px]",
      input: "w-8 text-[13px]",
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div
      className={`${currentSize.container} inline-flex items-center bg-grayLight text-black`}
    >
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`${currentSize.button} disabled:opacity-30 disabled:cursor-not-allowed font-bold hover:text-primary transition uppercase tracking-[1px]`}
        aria-label="Decrease quantity"
      >
        -
      </button>

      <input
        type="text"
        value={quantity}
        onChange={handleInputChange}
        className={`${currentSize.input} text-center bg-transparent font-bold focus:outline-none uppercase tracking-[1px]`}
        aria-label="Quantity"
      />

      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`${currentSize.button} disabled:opacity-30 disabled:cursor-not-allowed font-bold hover:text-primary transition uppercase tracking-[1px]`}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
