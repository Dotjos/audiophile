"use client";
import Image from "next/image";
import ButtonThree from "./ButtonThree";

interface NavCompInterface {
  route: string;
  productCategory: string;
  productImage: string;
  onClick?: () => void;
}

const NavComp = ({
  route,
  productCategory,
  productImage,
  onClick,
}: NavCompInterface) => {
  return (
    <div className="pt-11 w-full flex items-end">
      <div className="h-[165px] lg:h-[204px] pb-[22px] gap-[25px] lg:gap-[15px] flex flex-col items-center justify-end text-center relative w-full rounded-lg bg-grayLight">
        <div className="absolute -top-12 w-[79.169px] h-[104px]  lg:h-40 lg:w-[122.9474px]">
          <Image
            alt="product"
            src={productImage}
            fill
            className="object-contain"
          />
        </div>

        <Image
          src="/assets/Oval.svg"
          alt="oval-bg"
          width={94.8889}
          height={14}
          className="absolute bottom-24 border lg:bottom-[121px] "
        />

        <div className="flex flex-col items-center gap-[17px]">
          <span className="text-[15px] lg:text-[18px] font-bold leading-none tracking-[1.071px]">
            {productCategory}
          </span>
          <ButtonThree route={route} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default NavComp;
