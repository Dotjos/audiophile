"use client";

import { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { QuantitySelector } from "./QuantitySelector";
import { useStore } from "../store/useStore";

import { toast } from "react-toastify";
import { useEffect } from "react";

interface ProductActionsProps {
  product: Product;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const { addToCart, cart, updateQuantity } = useStore();
  const cartItem = cart[product.id];
  const [quantity, setQuantity] = useState(1);

  // Sync local quantity with cart quantity if item exists in cart
  useEffect(() => {
    if (cartItem) {
      setQuantity(cartItem.quantity);
    }
  }, [cartItem]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (cartItem) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    // We don't reset quantity to 1 anymore if it's in the cart, 
    // it stays in sync with the cart.
    if (!cartItem) {
      setQuantity(1);
    }
  };

  return (
    <div>
      <div className="flex gap-2 ">
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
        <AddToCartBtn onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductActions;
