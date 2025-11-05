"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const ICONS = {
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="transition-colors duration-300 hover:text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
        />
      </svg>
    ),
    facebook: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="transition-colors duration-300 hover:text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.325 24H12.82V14.708h-3.1v-3.62h3.1V8.413c0-3.066 1.872-4.736 4.604-4.736 1.31 0 2.437.097 2.763.14v3.204l-1.897.001c-1.487 0-1.774.708-1.774 1.745v2.29h3.544l-.462 3.62h-3.082V24h6.042c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z"
        />
      </svg>
    ),
    instagram: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="transition-colors duration-300 hover:text-primary"
      >
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    ),
  };

  return (
    <footer className="text-white pt-[52px] mt-[120px] md:mt-24 lg:mt-[200px] relative md:pt-[60px] lg:pt-[75px] md:px-[39px] lg:px-[165px] pb-[38px] md:pb-[46px] lg:pb-[48px] gap-[48px] md:gap-8 lg:gap-9 bg-black flex flex-col items-center md:items-start">
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
          <Link className="hover:text-primary" href="/">
            HOME
          </Link>
          <Link className="hover:text-primary" href="/category/headphones">
            HEADPHONES
          </Link>
          <Link className="hover:text-primary" href="/category/speakers">
            SPEAKERS
          </Link>
          <Link className="hover:text-primary" href="/category/earphones">
            EARPHONES
          </Link>
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
        <ul className="flex lg:absolute lg:top-[205px] lg:right-[165px] items-center gap-x-[40px] text-white">
          <li>{ICONS.facebook}</li>
          <li>{ICONS.twitter}</li>
          <li>{ICONS.instagram}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
