import Image from "next/image";
import ButtonOne from "./components/ButtonOne";
import NavComp from "./components/NavComp";
import ButtonTwo from "./components/ButtonTwo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-150 md:h-[729px]">
        <div className="absolute z-10 md:px-[40px] w-full">
          <nav className="flex px-3 md:px-0 my-[32px]">
            <Image
              alt="hamburger-nav"
              src="/assets/hamburger.svg"
              width={16}
              height={15}
            />
            <Image
              alt="audiophile-logo"
              src="/assets/logo.svg"
              width={143}
              height={25}
              className="ml-auto mr-auto md:ml-[42px]"
            />
            <Image
              alt="cart-nav"
              src="/assets/carts.svg"
              width={23}
              height={20}
            />
          </nav>
          <div className="w-full border-t border-white/[.104]"></div>
        </div>
        <div className="">
          <div className="text-white left-1/2 transform -translate-x-1/2 flex items-center flex-col top-49.5 md:top-[216px] text-center absolute z-10 ">
            <p className="text-[14px] mb-2 md:mb-3 opacity-[0.5] font-normal leading-none tracking-[10px]">
              NEW PRODUCT
            </p>
            <p className="text-[36px] mb-3 md:text-[56px] md:tracking-[2px] md:leading-[58px] uppercase tracking-[1.28px] leading-5 font-bold text-center">
              XX99 Mark II HeadphoneS
            </p>
            <p className="text-Body mb-7 md:mb-10 font-normal opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ButtonOne />
          </div>
          <picture>
            {/* Mobile image (default, smallest first for progressive enhancement) */}
            <source
              media="(max-width: 767px)"
              srcSet="/assets/home/mobile/image-header.jpg"
            />

            {/* Tablet image */}
            <source
              media="(min-width: 768px) and (max-width: 1023px)"
              srcSet="/assets/home/tablet/image-header.jpg"
            />

            {/* Desktop image */}
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-hero.jpg"
            />

            {/* Fallback for Next.js Image optimization */}
            <Image
              src="/assets/home/desktop/image-hero.jpg"
              alt="Hero background"
              fill
              priority
              quality={90}
              sizes="100vw"
              className="object-cover"
            />
          </picture>
        </div>
      </section>
      <section className="px-3 md:px-[39.61px]">
        <div className="flex flex-col md:flex-row gap-[68px] md:gap-2.5 items-center mb-[118px] md:mb-24 mt-5 md:mt-24 md:mt-">
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
        </div>
        <div className="flex flex-col gap-3 mb-[37px]">
          <div className="h-[600px] md:h-[689px] overflow-hidden flex flex-col items-center relative text-center text-white bg-primary rounded-lg">
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              width={558}
              height={558}
              alt="Pattern-circles"
              className="absolute z-0 transform scale-173 md:scale-171 top-0 md:-top-1/7"
            />
            <div className="w-[172.2482px] relative h-[207px] md:w-[197.212px] md:h-[237px] mt-[57px] mb-12 md:mt-[52px] md:mb-16">
              <Image
                alt="speaker"
                src="/assets/home/desktop/image-removebg-preview.png"
                fill
              />
            </div>

            <div className="flex flex-col items-center gap-3 mb-3 md:mb-5">
              <h1 className="font-bold leading-10 tracking-[1.286px] text-[36px] md:text-[56px] md:tracking-[2px] md:leading-[58px]">
                ZX9 <br /> SPEAKER
              </h1>
              <p className="opacity-75 font-normal w-[280px] md:w-[349px] text-Body">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly
                <br /> remarkable sound.
              </p>
            </div>
            <ButtonTwo background="bg-black" textColor="text-white" />
          </div>
          <div className="w-full h-80 relative overflow-hidden rounded-lg">
            {/* Mobile */}
            <div className="absolute inset-0 md:hidden">
              <Image
                alt="ZX7 Speaker"
                fill
                src="/assets/home/mobile/image-speaker-zx7.jpg"
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Tablet */}
            <div className="absolute inset-0 hidden md:block lg:hidden">
              <Image
                alt="ZX7 Speaker"
                fill
                src="/assets/home/tablet/image-speaker-zx7.jpg"
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Desktop */}
            <div className="absolute inset-0 hidden lg:block">
              <Image
                alt="ZX7 Speaker"
                fill
                src="/assets/home/desktop/image-speaker-zx7.jpg"
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="absolute top-1/2 left-3 md:left-[62.25px] -translate-y-1/2 flex flex-col gap-4 h-[118px] w-[204px] z-10">
              <h1 className="text-[28px] font-bold leading-none tracking-[2px]">
                ZX7 SPEAKER
              </h1>
              <ButtonTwo background="bg-transparent" textColor="text-black" />
            </div>
          </div>
          <div className="h-[424px] md:h-80 flex flex-col md:flex-row md:gap-[11px] gap-3">
            <div className="rounded-lg overflow-hidden relative h-[200px] md:w-1/2 md:h-full w-full">
              {/* Mobile */}
              <div className="absolute inset-0 md:hidden">
                <Image
                  src="/assets/home/mobile/image-earphones-yx1.jpg"
                  fill
                  alt="YX1 Earphones"
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Tablet */}
              <div className="absolute inset-0 hidden md:block lg:hidden">
                <Image
                  src="/assets/home/tablet/image-earphones-yx1.jpg"
                  fill
                  alt="YX1 Earphones"
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>

              {/* Desktop */}
              <div className="absolute inset-0 hidden lg:block">
                <Image
                  src="/assets/home/desktop/image-earphones-yx1.jpg"
                  fill
                  alt="YX1 Earphones"
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </div>

            <div className="rounded-lg gap-[32px] px-3 md:pl-[41px] md:h-full md:w-1/2 flex flex-col justify-center bg-grayLight h-[200px]">
              <h1 className="text-[28px] font-bold leading-none tracking-[2px]">
                YX1 EARPHONES
              </h1>
              <ButtonTwo
                background="bg-transparent"
                position=""
                textColor="text-black"
              />
            </div>
          </div>
        </div>

        <div className="mt-[83px] mb-[120px] ">
          <div className="relative h-[300px] mb-5">
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
          <h1 className="uppercase mb-4 text-center text-[28px] md:text-[40px] md:px-[61.5px] md:tracking-[1.429px] md:leading-11 tracking-[1px] text-black font-bold">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="opacity-50 text-center md:px-[73px] font-normal text-Body">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
