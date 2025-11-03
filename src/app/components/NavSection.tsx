import NavComp from "./NavComp";

const NavSection = () => {
  return (
    <section className="flex bg-grayLighter flex-col md:flex-row gap-[68px] md:gap-2.5 lg:gap-[30px] items-center">
      <NavComp
        productCategory="HEADPHONES"
        productImage="/assets/image-removebg-preview(41).png"
      />
      <NavComp
        productCategory="SPEAKERS"
        productImage="/assets/image-removebg-preview(38).png"
      />
      <NavComp
        productCategory="EARPHONES"
        productImage="/assets/image-removebg-preview(42).png"
      />
    </section>
  );
};

export default NavSection;
