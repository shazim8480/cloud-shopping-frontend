import React from "react";

const Input = ({
  label,
  id,
  type = "text",
  required = true,
  placeholder,
  value,
  onChange,
  disabled = false,
  ...inputProps
}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...inputProps}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          autoComplete={type === "password" ? "current-password" : "off"}
          required={required}
          disabled={disabled}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
