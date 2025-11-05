"use client";

import Link from "next/link";

interface ButtonTwoProps {
  background: string;
  textColor: string;
  position?: string;
  route?: string;
}

const ButtonTwo = ({
  background,
  textColor,
  position,
  route = "/",
}: ButtonTwoProps) => {
  return (
    <Link
      href={route}
      className={` ${background} ${position} flex flex-col justify-center items-center border  font-normal leading-none tracking-[1px] text-center ${textColor} font-bold w-40 h-6 border-amber-50 px-[30px] text-[13px] tracking-[1px] uppercase  transition ${background === "bg-black" ? "hover:bg-white hover:text-black hover:border-white border-black" : "hover:bg-black border-black hover:text-white"}`}
    >
      See Product
    </Link>
  );
};

export default ButtonTwo;
