import React, { useState } from "react";

const InputWithDecimals = ({ value, setValue }) => {
  const handleChange = (e) => {
    let newValue = e.target.value;

    // Allow only numbers and a single dot
    newValue = newValue.replace(/[^0-9.]/g, "");

    // Prevent multiple dots
    const parts = newValue.split(".");
    if (parts.length > 2) {
      newValue = parts[0] + "." + parts.slice(1).join("");
    }

    setValue(newValue);
  };

  const handleBlur = () => {
    if (value !== "" && !isNaN(value)) {
      setValue(parseFloat(value).toFixed(2));
    } else {
      setValue("0.00");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur} // Format when the user leaves the input field
      placeholder="0.00"
      className="slide-input"
    />
  );
};

export default InputWithDecimals;
