"use client";
import Image from "next/image";
import { useStore } from "../store/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/category/headphones", label: "HEADPHONES" },
    { href: "/category/speakers", label: "SPEAKERS" },
    { href: "/category/earphones", label: "EARPHONES" },
  ];

  const { toggleMenu, menuActive, cartActive, toggleCart } = useStore();

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
        <div
          onClick={MenuToggle}
          className="cursor-pointer flex items-center lg:hidden"
        >
          {menuActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="15"
              width="16"
              viewBox="0 0 16 16"
              className="text-white font-bold"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="15"
              className="text-white font-bold"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 2H1.75H14.25H15V3.5H14.25H1.75H1V2ZM1 12.5H1.75H14.25H15V14H14.25H1.75H1V12.5ZM1.75 7.25H1V8.75H1.75H14.25H15V7.25H14.25H1.75Z"
                fill="currentColor"
              />
            </svg>
          )}
        </div>

        <Image
          alt="audiophile-logo"
          src="/assets/logo.svg"
          width={143}
          height={25}
          className="ml-auto mr-auto md:ml-[42px] lg:ml-0"
        />

        <ul className="text-[13px] lg:mr-auto text-white hidden lg:flex text-center gap-[34px] font-bold leading-[25px] tracking-[2px]">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className={`text-white hover:text-primary`}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Image
          alt="cart-nav"
          onClick={() => cartToggle()}
          src="/assets/carts.svg"
          width={23}
          height={20}
          className="border-white"
        />
      </nav>
      <div className="w-full border-t border-white/[.104]"></div>
    </div>
  );
};

export default Navbar;
