import React, { JSX, ReactNode } from "react";
import "./styles.css";

export default function Column({
  children,
  size,
  vCenter = false,
}: {
  children: ReactNode;
  size?: number | string;
  vCenter?: boolean;
}): JSX.Element {
  let parsedSize: number | undefined;
  if (typeof size === "number") {
    parsedSize = size;
  } else if (typeof size === "string" && size.trim() !== "") {
    const numericSize = Number(size);
    parsedSize = Number.isFinite(numericSize) ? numericSize : undefined;
  }
  const normalizedSize =
    parsedSize != null && Number.isInteger(parsedSize) && parsedSize >= 1 && parsedSize <= 12
      ? parsedSize
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
      }}
    >
      {children}
    </div>
  );
}
