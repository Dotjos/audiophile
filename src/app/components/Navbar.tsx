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
          className="lg:hidden"
        />

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
