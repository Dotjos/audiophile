"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white pt-[52px] relative md:pt-[60px] lg:pt-[75px] md:px-[39px] lg:px-[165px] pb-[38px] md:pb-[46px] lg:pb-[48px] gap-[48px] md:gap-8 lg:gap-9 bg-black flex flex-col items-center md:items-start">
      <div className="border-2 w-[101px] absolute top-0 text-primary"></div>
      <div className="flex flex-col gap-6 md:gap-4 lg:flex-col lg:justify-between lg:w-full">
        <Image
          src="/assets/logo.svg"
          alt=""
          height={25}
          width={143}
          className=""
        />

        <ul className="text-[13px] text-center font-bold leading-[25px] tracking-[2px] flex flex-col md:flex-row gap-2 md:gap-[34px]">
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
      </div>

      <p className="opacity-50 lg:w-1/2 md:text-left md:px-0 px-3 text-center text-Body font-normal">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="flex w-full items-center md:flex-row md:justify-between flex-col gap-6 md:mt-6 lg:mt-[20px]">
        <p className="opacity-50 px-3 lg:px-0 text-center text-Body font-normal">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="flex lg:absolute lg:top-[205px] lg:right-[165px] items-center gap-x-[40px]">
          <li>
            <Image
              alt="socials"
              height={24}
              width={24}
              src="/assets/shared/desktop/icon-facebook.svg"
            />
          </li>
          <li>
            <Image
              alt="socials"
              height={24}
              width={24}
              src="/assets/shared/desktop/icon-twitter.svg"
            />
          </li>
          <li>
            <Image
              alt="socials"
              height={24}
              width={24}
              src="/assets/shared/desktop/icon-instagram.svg"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
