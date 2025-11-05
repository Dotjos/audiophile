"use client";
import Link from "next/link";

interface ButtonOneProps {
  route?: string;
}

const ButtonOne = ({ route = "" }: ButtonOneProps) => {
  return (
    <Link
      href={route}
      className="bg-primary flex flex-col items-center justify-center text-white w-40 h-12 text-[13px] tracking-[1px] uppercase hover:bg-secondary transition"
    >
      See Product
    </Link>
  );
};

export default ButtonOne;
