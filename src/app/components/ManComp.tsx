import Image from "next/image";

const ManComp = () => {
  return (
    <section className="flex flex-col lg:gap-[125px] bg-grayLighter lg:flex-row">
      <div className="relative h-[300px] lg:h-[588px] lg:order-2 lg:w-1/2 mb-5 lg:mb-0">
        <Image
          alt="man advertising"
          fill
          src="/assets/shared/mobile/image-best-gear.jpg"
          className="rounded-lg md:hidden lg:hidden"
        />
        <Image
          alt="man advertising"
          fill
          src="/assets/shared/tablet/image-best-gear.jpg"
          className="rounded-lg hidden md:block"
        />
        <Image
          alt="man advertising"
          fill
          src="/assets/shared/desktop/image-best-gear.jpg"
          className="rounded-lg hidden lg:block"
        />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center lg:order-1">
        <h1 className="uppercase mb-4 lg:text-left text-center text-[28px] md:text-[40px] md:px-[61.5px] lg:px-0 md:tracking-[1.429px] md:leading-11 tracking-[1px] text-black font-bold">
          Bringing you the <span className="text-primary">best</span> audio gear
        </h1>
        <p className="opacity-50 text-center lg:text-left md:px-[73px] lg:px-0 font-normal text-Body">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default ManComp;
