import * as React from "react";

export interface IButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  primary = false,
  children,
  className,
}: IButtonProps) {
  return (
    <button
      className={
        `px-6 py-2 transition-colors rounded-full   ${
          primary
            ? "bg-[#000] text-white hover:bg-gray"
            : "bg-white text-[#000]"
        }` +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
