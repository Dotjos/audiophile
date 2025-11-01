import Image from "next/image";
import ButtonOne from "./components/ButtonOne";

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
      <section></section>
    </div>
  );
}
