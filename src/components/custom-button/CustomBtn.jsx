import React from "react";

import "./CustomBtn.scss";

const CustomBtn = ({ children, ...otherProps }) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomBtn;
