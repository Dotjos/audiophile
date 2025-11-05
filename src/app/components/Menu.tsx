"use client";
import { useStore } from "../store/useStore";
import NavComp from "./NavComp";

const Menu = () => {
  const { closeMenu } = useStore();
  return (
    <div className="bg-white pt-4 grid grid-cols-1 md:grid-cols-3 px-3 md:px-[40px] md:gap-x-2.5 gap-y-2 pb-[35px] md:pt-14 md:pb-[67px] mt-[90px] rounded-b-lg w-full z-60 top-0 absolute">
      <NavComp
        productCategory="HEADPHONES"
        productImage="/assets/image-removebg-preview(41).png"
        route="/headphones"
        onClick={closeMenu}
      />
      <NavComp
        productCategory="SPEAKERS"
        productImage="/assets/image-removebg-preview(38).png"
        route="speakers"
        onClick={closeMenu}
      />
      <NavComp
        productCategory="EARPHONES"
        productImage="/assets/image-removebg-preview(42).png"
        route="earphones"
        onClick={closeMenu}
      />
    </div>
  );
};

export default Menu;
