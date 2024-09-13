import * as React from "react";

export interface IMxLayoutProps {
  children: React.ReactNode;
}

export function MxLayout(props: IMxLayoutProps) {
  return (
    <div className="mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] xl:max-w-[80%] w-full mt-[72px]">
      {props.children}
    </div>
  );
}
