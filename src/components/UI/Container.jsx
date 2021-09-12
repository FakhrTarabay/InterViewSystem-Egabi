import React from "react";
import css from "./Container.module.css";
const Container = ({ children, className, style }) => {
  return (
    <div className={`${css.Container} ${className}`} style={style}>
      {children}
    </div>
  );
};
Container.defaultProps = {
  style: {},
};

export default Container;
