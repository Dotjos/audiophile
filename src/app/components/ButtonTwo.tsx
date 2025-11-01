"use client";

interface ButtonTwoProps {
  background: string;
  textColor: string;
  position?: string;
}

const ButtonTwo = ({ background, textColor, position }: ButtonTwoProps) => {
  return (
    <button
      className={`${background} ${position} border border-black font-normal leading-none tracking-[1px] text-center ${textColor} font-bold w-40 h-6 border-amber-50 px-[30px] text-[13px] tracking-[1px] uppercase hover:bg-black hover:text-white transition`}
    >
      See Product
    </button>
  );
};

export default ButtonTwo;
