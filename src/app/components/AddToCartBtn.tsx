"use client";

interface AddToCartButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const AddToCartBtn = ({ onClick, disabled = false }: AddToCartButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-primary text-white w-40 h-12 text-[13px] tracking-[1px] uppercase hover:bg-secondary transition"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartBtn;
