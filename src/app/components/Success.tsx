"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "../store/useStore";
import { getShortProductName } from "../../../utils";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Success = () => {
  const {
    getCartItems,
    getGrandTotal,
    resetCheckoutSuccess,
    orderId,
    clearOrderId,
  } = useStore();

  const order = useQuery(
    api.order.getOrderByOrderId,
    orderId ? { orderId } : "skip"
  );

  const cartItems = getCartItems();
  return (
    <div className="absolute rounded-lg p-4 w-[327px] md:w-[327px] lg:w-[540px] flex flex-col bg-white z-90 left-1/2 top-[114px] md:top-28 lg:top-[212px] -translate-x-1/2 ">
      <Image
        alt="check-mark"
        width={64}
        height={64}
        src="/assets/checkout/icon-order-confirmation.svg"
      />
      <h1 className="mt-[23px] mb-2 text-[24px] font-bold text-black leading-7 tracking-[0.857px]">
        THANK YOU FOR YOUR ORDER
      </h1>
      <p className="text-black/50 text-Body">
        You will receive an email confirmation shortly.
      </p>

      <div className="my-3 rounded-lg bg-grayLight flex flex-col justify-between overflow-hidden">
        {/* <div>{cartItems.map()}</div> */}
        <div
          className={`mt-3 mx-3 ${cartItems.length > 1 && "border-dark/10 border-b"} mb-[12px] `}
        >
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-center">
              <div
                key={item.id}
                className="relative rounded-lg overflow-hidden h-16 w-16"
              >
                <Image
                  fill
                  src={item.image.mobile}
                  alt={`${item.slug}-cart-image`}
                />
              </div>
              <div className="flex justify-center pl-2 flex-col">
                <span className="font-bold text-Body">
                  {getShortProductName(item.name)}
                </span>
                <span className="text-body opacity-50 font-bold">
                  ${(item.quantity * item.price).toLocaleString()}
                </span>
              </div>
              <span className="ml-auto text-Body mt-[5px] text-black/50 font-bold text-right">
                x{item.quantity}
              </span>
            </div>
          ))}
        </div>
        {cartItems.length > 1 && (
          <div className="text-center text-[12px] text-dark/50  mb-[25px]">
            and ({cartItems.length - 1}) other items(s)
          </div>
        )}
        <div className="bg-dark flex flex-col gap-1 py-[15px] px-3">
          <h1 className="text-Body font-normal text-white/50">GRAND TOTAL</h1>
          <h1 className="text-white text-[18px] font-bold leading-none uppercase">
            ${getGrandTotal().toLocaleString()}
          </h1>
        </div>
      </div>
      <Link
        href="/"
        onClick={() => {
          resetCheckoutSuccess();
          clearOrderId();
        }}
        className="text-white text-center bg-primary uppercase py-[15px] w-full"
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

export default Success;
