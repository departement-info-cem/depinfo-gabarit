import React, { JSX, ReactNode } from "react";
import "./styles.css";

export default function Row({ children }: { children: ReactNode }): JSX.Element {
  return <div className="depinfo-row">{children}</div>;
}
