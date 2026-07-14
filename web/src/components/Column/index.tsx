import React, { JSX, ReactNode } from "react";
import "./styles.css";

export default function Column({
  children,
  size,
  vCenter = false,
}: {
  children: ReactNode;
  size?: number;
  vCenter?: boolean;
}): JSX.Element {
  const normalizedSize =
    size != null && Number.isInteger(size) && size >= 1 && size <= 12
      ? size
      : undefined;
  const className =
    normalizedSize != null
      ? `depinfo-col depinfo-col-${normalizedSize}`
      : "depinfo-col";

  return (
    <div
      className={className}
      style={{
        display: vCenter ? "flex" : "block",
        alignItems: vCenter ? "center" : "flex-start",
      }}
    >
      {children}
    </div>
  );
}
