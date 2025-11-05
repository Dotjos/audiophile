// "use client";
// import React, { useState } from "react";

// interface FormInputProps {
//   label: string;
//   id: string;
//   type?: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: (value: string) => void;
// }

// export function FormInput({
//   label,
//   id,
//   type = "text",
//   placeholder = "",
//   value: controlledValue,
//   onChange,
// }: FormInputProps) {
//   const [internalValue, setInternalValue] = useState("");

//   const value = controlledValue !== undefined ? controlledValue : internalValue;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     if (onChange) {
//       onChange(newValue);
//     } else {
//       setInternalValue(newValue);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-[9px]">
//       <label
//         htmlFor={id}
//         className="text-black text-[12px] font-bold tracking-normal leading-[-0.214px]"
//       >
//         {label}
//       </label>
//       <input
//         id={id}
//         type={type}
//         value={value}
//         onChange={handleChange}
//         placeholder={placeholder}
//         className="w-full px-3 pt-[18px] caret-primary text-[14px] pb-[19px] text-black/40 border border-grayBorder rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
//       />
//     </div>
//   );
// }
// "use client";
// import React, { useState } from "react";

// interface FormInputProps {
//   label: string;
//   id: string;
//   type?: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: (value: string) => void;
//   error?: string; // 👈 Added: error message prop
// }

// export function FormInput({
//   label,
//   id,
//   type = "text",
//   placeholder = "",
//   value: controlledValue,
//   onChange,
//   error,
// }: FormInputProps) {
//   const [internalValue, setInternalValue] = useState("");
//   const value = controlledValue !== undefined ? controlledValue : internalValue;

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const newValue = e.target.value;
//     if (onChange) {
//       onChange(newValue);
//     } else {
//       setInternalValue(newValue);
//     }
//   };

//   return (
//     <div className="flex flex-col gap-1.5 relative">
//       {/* Label */}
//       <label
//         htmlFor={id}
//         className="text-black text-[12px] font-bold tracking-normal leading-0"
//       >
//         {label}
//       </label>

//       {/* Input */}
//       {/* Error Message */}
//       {error && (
//         <span className="text-[#CD2C2C] text-[12px] font-medium absolute -bottom-[18px] right-0">
//           {error}
//         </span>
//       )}
//       <input
//         id={id}
//         type={type}
//         value={value}
//         onChange={handleChange}
//         placeholder={placeholder}
//         className={`w-full px-3 pt-[18px] pb-[19px] text-[14px] text-black/80 border rounded-md caret-primary focus:outline-none
//           ${
//             error
//               ? "border-[#CD2C2C] focus:ring-[#CD2C2C]"
//               : "border-grayBorder focus:ring-2 focus:ring-primary focus:border-transparent"
//           }`}
//       />
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";

interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

export function FormInput({
  label,
  id,
  type = "text",
  placeholder = "",
  value: controlledValue,
  onChange,
  error,
}: FormInputProps) {
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-[9px]">
      {/* Label + Error Row */}
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={`text-[12px] font-bold tracking-normal leading-none ${
            error ? "text-[#CD2C2C]" : "text-black"
          }`}
        >
          {label}
        </label>

        {error && (
          <span className="text-[#CD2C2C] text-[12px] font-normal leading-0 tracking-[-0.214px]">
            {error}
          </span>
        )}
      </div>

      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`w-full px-3 pt-[18px] pb-[19px] hover:border-primary text-[14px] text-black/80 border rounded-md caret-primary focus:outline-none 
          ${
            error
              ? "border-[#CD2C2C] focus:ring-[#CD2C2C]"
              : "border-grayBorder focus:ring-2 focus:ring-primary focus:border-transparent"
          }`}
      />
    </div>
  );
}
