import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-[26px] font-semibold md:text-2xl sm:text-[22px]",
  xs: "text-[11px] font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
