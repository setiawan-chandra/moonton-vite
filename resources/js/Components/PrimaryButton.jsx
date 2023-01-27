import PropTypes from "prop-types";
import React from "react";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function PrimaryButton({
    type = "submit",
    variant = "primary",
    className = "",
    processing,
    children,
}) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full ${
                processing ? "opacity-30" : ""
            } btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
