import * as React from "react";

export interface IButtonProps {
  primary?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}

export default function Button({
  primary = false,
  children,
  className,
  onClick,
  type = "button",
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `px-6 py-2 transition-colors rounded-full   ${
          primary
            ? "bg-[#000] text-white hover:bg-gray"
            : "bg-white text-[#000] border border-[#000] hover:opacity-50"
        }` +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
