"use client";

import Image from "next/image";
import { useStore } from "../store/useStore";
import { QuantitySelector } from "./QuantitySelector";
import { getShortProductName } from "../../../utils";

interface CartProductInterface {
  image: string;
  quantity: number;
  name: string;
  price: number;
  id: number;
}

const CartProduct = ({
  image,
  quantity,
  name,
  price,
  id,
}: CartProductInterface) => {
  const { updateQuantity } = useStore();
  const cost = price * quantity;
  const cartName = getShortProductName(name);
  return (
    <div className="flex it items-center justify-between">
      <div className="relative rounded-lg overflow-hidden h-16 w-16">
        <Image fill src={image} alt={`${name}-cart-image`} />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-Body">{cartName}</span>
        <span className="text-body opacity-50 font-bold">
          ${cost.toLocaleString()}
        </span>
      </div>
      <QuantitySelector
        quantity={quantity}
        onQuantityChange={(newQuantity) => updateQuantity(id, newQuantity)}
        size="small"
      />
    </div>
  );
};

export default CartProduct;
