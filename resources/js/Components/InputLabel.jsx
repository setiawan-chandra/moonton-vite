import React from "react";

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label
            htmlFor={forInput}
            className={`text-base block mb-2 ${className ? className : ""}`}
        >
            {value ? value : children}
        </label>
    );
}
