import Layout from "@theme/Layout";
import React from "react";

export default function Row({ children }): JSX.Element {
  return (
        <div className="row">{children}</div>
  );
}
