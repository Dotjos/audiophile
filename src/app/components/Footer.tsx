"use client";

import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-white pt-[52px] pb-[38px] gap-[48px] bg-black flex flex-col items-center">
      <Image
        src="/assets/logo.svg"
        alt=""
        height={25}
        width={143}
        className=""
      />

      <ul className="text-[13px] text-center font-bold leading-[25px] tracking-[2px] flex flex-col gap-2">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>

      <p className="opacity-50 px-3 text-center text-Body font-normal">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

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
    </footer>
  );
};

export default Footer;
