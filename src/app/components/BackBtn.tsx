"use client";
import { useRouter } from "next/navigation";

const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-Body text-black hover:text-primary hover:opacity-100 opacity-50"
    >
      Go Back
    </button>
  );
};

export default BackBtn;
