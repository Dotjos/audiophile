"use client";

import Link from "next/link";
import { useStore } from "../store/useStore";
import CartProduct from "./CartProduct";

const Cart = () => {
  const {
    cart,
    getTotalUniqueProducts,
    clearCart,
    getCartItems,
    getGrandTotal,
    closeCart,
  } = useStore();
  const cartItems = getCartItems();
  const cartProducts = getTotalUniqueProducts();
  const cartCost = getGrandTotal();
  const isEmpty = cartItems.length < 1;

  return (
    <div
      className="
    bg-white
    w-[90%] sm:w-[85%] md:w-[377px] lg:w-[540px]
    mx-auto
    px-6 py-7
    rounded-lg
    absolute
    left-1/2 -translate-x-1/2
    top-[114px] lg:top-[129px]
    md:left-auto md:right-10 md:translate-x-0
    lg:right-[165px]
    z-50
    flex flex-col justify-between
    shadow-lg
  "
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-[18px] uppercase">
          Cart({cartProducts})
        </h1>
        <button
          disabled={isEmpty}
          onClick={() => {
            clearCart();
            closeCart();
          }}
          className=" text-black/50 text-Body underline underline-offset-auto"
        >
          Remove All
        </button>
      </div>

      {isEmpty ? (
        <div className="flex flex-col items-center justify-center py-16">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Your cart is empty
          </h2>
        </div>
      ) : (
        <div className="py-[32px] flex flex-col gap-3">
          {cartItems.map((item, index) => (
            <CartProduct
              key={index}
              image={item.image.mobile}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              id={item.id}
            />
          ))}
        </div>
      )}
      <div className="flex mb-3 justify-between">
        <h1 className="uppercase text-black/50 text-Body">TOTAL</h1>
        <h1 className="font-bold text-center text-[18px] leading-none uppercase">
          ${cartCost.toLocaleString()}
        </h1>
      </div>

      {!isEmpty && (
        <Link
          href="/checkout"
          onClick={closeCart}
          className="w-full text-center py-[15px] text-white tracking-[1px] leading-none uppercase text-[13px] font-bold bg-primary"
        >
          checkout
        </Link>
      )}
    </div>
  );
};

export default Cart;
