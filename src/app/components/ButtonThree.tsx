"use client";
import Link from "next/link";

interface ButtonThreeInterface {
  onClick?: () => void;
  route: string;
}

const ButtonThree = ({ route = "/", onClick }: ButtonThreeInterface) => {
  return (
    <Link
      href={`/category/${route}`}
      onClick={onClick}
      className="inline-flex items-center gap-[13.322px]"
    >
      <span className="uppercase hover:text-primary hover:opacity-100 text-[13px] leading-none  tracking-[1px] opacity-50 font-bold">
        Shop
      </span>
      <span className="text-primary">&gt;</span>
    </Link>
  );
};

export default ButtonThree;
