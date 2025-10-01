import React from 'react';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  py?:string
  px?:string
  rounded?: 'left' | 'right' | 'full' | 'none';
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'email',
  placeholder = 'Enter email',
  rounded = 'left',
  px="px-8",
  py="py-4",
  
}) => {
  // map rounded prop to Tailwind class
  const roundedClass =
    rounded === 'left'
      ? 'rounded-l-full'
      : rounded === 'right'
      ? 'rounded-r-full'
      : rounded === 'full'
      ? 'rounded-full'
      : '';

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`flex-grow ${py} ${px} text-[#231F20] focus:outline-none ${roundedClass}`}
    />
  );
};

export default InputField;
