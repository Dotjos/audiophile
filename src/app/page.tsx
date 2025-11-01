import Image from "next/image";
import ButtonOne from "./components/ButtonOne";
import NavComp from "./components/NavComp";
import ButtonTwo from "./components/ButtonTwo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <section className="relative h-150">
        <div className="absolute z-10 border-b w-full border-white/[.104]">
          <nav className="flex justify-between py-[32px] px-3">
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
            />
            <Image
              alt="cart-nav"
              src="/assets/carts.svg"
              width={23}
              height={20}
            />
          </nav>
        </div>
        <div className="">
          <div className="text-white justify-between h-[290px] w-[328px] left-1/2 transform -translate-x-1/2 flex items-center flex-col top-49.5 text-center absolute z-10 ">
            <p className="text-[14px] opacity-[0.5] font-normal leading-none tracking-[10px]">
              NEW PRODUCT
            </p>
            <p className="text-[36px] uppercase tracking-[1.28px] leading-5 font-bold text-center">
              XX99 Mark II HeadphoneS
            </p>
            <p className="text-Body font-normal opacity-75">
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
      <section className="px-3">
        <div className="flex flex-col gap-[68px] items-center mb-[118px] mt-5">
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
          <div className="h-[600px] overflow-hidden flex flex-col items-center relative text-center text-white bg-primary rounded-lg">
            <Image
              src="/assets/home/desktop/pattern-circles.svg"
              width={558}
              height={558}
              alt="Pattern-circles"
              className="absolute z-0 transform scale-173 top-0"
            />
            <Image
              alt="speaker"
              src="/assets/home/desktop/image-removebg-preview.png"
              height={207}
              width={172.2482}
              className="mt-[55px] mb-12"
            />
            <div className="flex flex-col items-center gap-3">
              <h1 className=" font-bold leading-10 tracking-[1.286px] text-[36px]">
                ZX9 <br /> SPEAKER
              </h1>
              <p className="opacity-75 font-normal text-Body">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly
                <br /> remarkable sound.
              </p>
              <ButtonTwo background="bg-black" textColor="text-white" />
            </div>
          </div>
          <div className="w-full h-80 relative overflow-hidden rounded-lg">
            <Image
              alt="speaker-zx7"
              fill
              src="/assets/home/mobile/image-speaker-zx7.jpg"
              className="z-0"
            />
            <div className="top-1/2 left-3 gap-4 -translate-y-1/2 absolute flex justify-between flex-col h-[118px] w-[204px] border-black">
              <h1 className="text-[28px] w-full font-bold leading-none tracking-[2px]">
                ZX7 SPEAKER
              </h1>
              <ButtonTwo
                background="bg-transparent"
                position=" z-10"
                textColor="text-black"
              />
            </div>
          </div>
          <div className="h-[424px]  flex flex-col gap-3">
            <div className="rounded-lg overflow-hidden relative h-[200px] w-full border">
              <Image
                src="/assets/home/mobile/image-earphones-yx1.jpg"
                fill
                alt="yx-1 earphone"
              />
            </div>
            <div className="rounded-lg gap-[32px] px-3 flex flex-col justify-center bg-grayLight h-[200px]">
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
          <Image
            alt="man advertising"
            height={300}
            width={327}
            src="/assets/man.png"
            className="rounded-lg mb-5"
          />
          <h1 className="uppercase mb-4 text-center text-[28px] tracking-[1px] text-black font-bold">
            Bringing you the <span className="text-primary">best</span> audio
            gear
          </h1>
          <p className="opacity-50 text-center font-normal text-Body">
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
