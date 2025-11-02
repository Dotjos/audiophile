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
      <div className="h-[165px] lg:h-[204px] pb-[22px] gap-[25px] lg:gap-[15px] flex flex-col items-center justify-end text-center relative w-full rounded-lg bg-grayLight">
        <div className="relative -top-12 w-[79.169px] h-[104px] lg:h-40 lg:w-[122.9474px]">
          <Image alt="product" src={productImage} fill className="absolute" />
        </div>

        <Image
          src="/assets/Oval.svg"
          alt="oval-bg"
          width={94.8889}
          height={14}
          className="absolute bottom-24 lg:bottom-[121px] blur-[21.746]"
        />

        <span className="text-[15px] lg:text-[18px] font-bold leading-none tracking-[1.071px]">
          {productCategory}
        </span>
        <ButtonThree />
      </div>
    </div>
  );
};

export default NavComp;
