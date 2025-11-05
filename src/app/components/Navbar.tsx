"use client";
import Image from "next/image";
import { useStore } from "../store/useStore";

const Navbar = () => {
  const { toggleMenu, cartActive, toggleCart } = useStore();

  const cartToggle = () => {
    toggleCart();
    console.log(cartActive);
  };

  const MenuToggle = () => {
    // console.log("cl ggffggs");
    toggleMenu();
  };

  return (
    <div className="absolute top-0 bg-transparent z-60 md:px-[40px] lg:px-[165px] w-full">
      <nav className="flex px-3 md:px-0 my-[32px] lg:my-9">
        <Image
          alt="hamburger-nav"
          src="/assets/hamburger.svg"
          width={16}
          onClick={() => MenuToggle()}
          height={15}
          className="lg:hidden border-white"
        />
        <Image
          alt="audiophile-logo"
          src="/assets/logo.svg"
          width={143}
          height={25}
          className="ml-auto mr-auto md:ml-[42px] lg:ml-0"
        />
        <Image
          alt="cart-nav"
          onClick={() => cartToggle()}
          src="/assets/carts.svg"
          width={23}
          height={20}
        />
      </nav>
      <div className="w-full border-t border-white/[.104]"></div>
    </div>
  );
};

export default Navbar;
