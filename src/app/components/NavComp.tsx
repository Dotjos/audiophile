"use client";
import Image from "next/image";
import ButtonThree from "./ButtonThree";

interface NavCompInterface {
  link?: string;
  productCategory: string;
  productImage: string;
}

const NavComp = ({ link, productCategory, productImage }: NavCompInterface) => {
  return (
    <div className="h-[217px] w-full flex items-end">
      <div className="h-[165px] pb-[22px] gap-[25px] flex flex-col items-center ju justify-end text-center relative w-full rounded-lg bg-grayLight">
        <Image
          alt="product"
          src={productImage}
          width={79.916}
          height={104}
          className="absolute left-1/2 transform -translate-x-1/2 -top-13"
        />
        <Image
          src="/assets/Oval.svg"
          alt="oval-bg"
          width={94.8889}
          height={14}
          className="absolute bottom-24 blur-[21.746]"
        />

        <span className="text-[15px] font-bold leading-none tracking-[1.071px]">
          {productCategory}
        </span>
        <ButtonThree />
      </div>
    </div>
  );
};

export default NavComp;
