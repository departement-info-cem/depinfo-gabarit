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
  return (
    <div
      className={strSize}
      style={{
        display: vCenter ? "flex" : "block",
        alignItems: vCenter ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
}
