import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      {...props}
      title="button"
      className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-2 hover:bg-red-500 hover:shadow-md transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
};
