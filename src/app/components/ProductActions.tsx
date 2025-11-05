"use client";

import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { QuantitySelector } from "./QuantitySelector";
import { useStore } from "../store/useStore";

interface ProductActionsProps {
  product: Product;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [quantity, setQuantity] = useState(1); // ✅ This is fine here!
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div>
      <div className="flex gap-2 ">
        <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />
        <AddToCartBtn onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductActions;
