"use-client";
interface RadioOptionProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export function RadioOption({
  id,
  label,
  checked,
  onChange,
}: RadioOptionProps) {
  return (
    <div
      className="flex items-center gap-4 px-3 pt-[19px] pb-[18px] py-3 border border-grayBorder rounded-md cursor-pointer hover:border-primary transition-colors"
      onClick={onChange}
    >
      <div className="relative flex items-center justify-center">
        <input
          type="radio"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-[20px] h-[20px] rounded-full border-2 flex items-center border-grayBorder justify-center`}
        >
          {checked && <div className="w-1 h-1 m-1px rounded-full bg-primary" />}
        </div>
      </div>
      <label
        htmlFor={id}
        className="text-sm font-bold text-black cursor-pointer flex-1"
      >
        {label}
      </label>
    </div>
  );
}
