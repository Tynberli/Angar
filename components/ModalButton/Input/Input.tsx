import React from 'react';

const CustomInput = ({ placeholder, pattern, required, name }: {
    placeholder: string,
    pattern: string,
    name: string,
    required: any,
  }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={name}
      pattern={pattern}
      required={required}
    />
  );
};

export default CustomInput;
