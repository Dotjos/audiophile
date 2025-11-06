"use client";
import { useStore } from "./store/useStore";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Success from "./components/Success";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    menuActive,
    closeMenu,
    cartActive,
    closeCart,
    successFulCheckOut,
    resetCheckoutSuccess,
  } = useStore();

  return (
    <div className="max-w-[1440px] mx-auto relative w-full">
      {/* Background Overlay */}
      {(menuActive || cartActive || successFulCheckOut) && (
        <div
          className={`absolute inset-0 bg-black/40 ${successFulCheckOut ? "z-80" : "z-40"}   transition-opacity duration-300`}
          onClick={() => {
            closeMenu();
            closeCart();
            resetCheckoutSuccess();
          }}
        />
      )}
      {/* Menu */}
      {menuActive && <Menu />}
      {/* cart */}
      {cartActive && <Cart />}
      {/* success */}
      {successFulCheckOut && <Success />}
      {children}
    </div>
  );
}
