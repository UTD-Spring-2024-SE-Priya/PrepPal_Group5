import React from "react";

const sizes = {
  xs: "text-xs font-normal",
  s: "text-[26px] font-normal md:text-2xl sm:text-[22px]",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-100_01 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
