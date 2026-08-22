import React, { JSX, ReactNode } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export default function Column({
  children,
  size,
  vCenter = false,
}: {
  children: ReactNode;
  size?: number;
  vCenter?: boolean;
}): JSX.Element {
  const strSize = size != null ? "col-" + size : "col";
  const classes = vCenter ? `${strSize} d-flex align-items-center` : strSize;
  return (
    <div className={classes}>
      {children}
    </div>
  );
}
