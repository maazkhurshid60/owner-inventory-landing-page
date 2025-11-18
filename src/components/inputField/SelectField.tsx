"use client";

import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { HiChevronDown } from "react-icons/hi";

interface SelectFieldProps {
  label?: string;
  options: { label: string; value: string | number }[];
  placeholder?: string;
  register?: UseFormRegisterReturn;
  error?: string;
  required?: boolean;
  readOnly?: boolean;
  variant?: "default" | "signup";
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  placeholder = "Select an option",
  register,
  error,
  required = false,
  readOnly = false,
  variant = "default",
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <div className="flex items-center gap-x-1 mb-1">
          <p className="text-sm text-[#231F20] font-normal font-onest leading-[100%]">
            {label}
          </p>
          {required && variant !== "signup" && <p className="text-redColor">*</p>}
        </div>
      )}
      <div className="relative">
        <select
          {...register}
          value={value}
          onChange={onChange}
          disabled={readOnly}
          className="w-full px-4 py-[14px] pr-10 rounded-[14px] border border-[#D9D9D9] bg-white appearance-none text-[#231F20] placeholder:text-[#9A9A9A] font-onest"
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] pointer-events-none" />
      </div>
      {/* {error && <p className="text-redColor text-left mt-1 text-sm">{error}</p>} */}
    </div>
  );
};

export default SelectField;
