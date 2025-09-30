import React from 'react';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  rounded?: 'left' | 'right' | 'full' | 'none';
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'email',
  placeholder = 'Enter email',
  rounded = 'left',
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
      className={`flex-grow px-8 py-4 text-[#231F20] focus:outline-none ${roundedClass}`}
    />
  );
};

export default InputField;
