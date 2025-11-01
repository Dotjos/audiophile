"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white pt-[52px] md:pt-[60px] md:px-[39px] pb-[38px] md:pb-[46px] gap-[48px] md:gap-8 bg-black flex flex-col items-center md:items-start">
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

      <p className="opacity-50  md:text-left md:px-0 px-3 text-center text-Body font-normal">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="flex w-full items-center md:flex-row md:justify-between flex-col gap- md:mt-20">
        <p className="opacity-50 px-3 text-center text-Body font-normal">
          Copyright 2021. All Rights Reserved
        </p>
        <ul className="flex items-center gap-x-[40px]">
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
