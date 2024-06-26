import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[21px]",
};
const variants = {
  fill: {
    gray_500: "bg-gray-500 text-blue_gray-800",
    blue_gray_800_01: "bg-blue_gray-800_01 text-blue_gray-100_01",
  },
};
const sizes = {
  xs: "h-[42px] px-[35px] text-xs",
  sm: "h-[45px] px-[35px] text-xs",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "blue_gray_800_01",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer text-xs ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["gray_500", "blue_gray_800_01"]),
};

export { Button };
