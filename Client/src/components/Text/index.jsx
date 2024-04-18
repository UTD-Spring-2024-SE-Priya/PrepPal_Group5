import React from "react";

const sizes = {
  xs: "text-[10px] font-normal",
  lg: "text-[26px] font-normal md:text-2xl sm:text-[22px]",
  s: "text-xs font-normal",
  md: "text-[25px] font-normal md:text-[23px] sm:text-[21px]",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
