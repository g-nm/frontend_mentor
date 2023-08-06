import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="text-center px-5 py-3 mt-5 bg-darkGrey rounded-md text-white font-bold w-full">
      {children}
    </button>
  );
}

export default Button;
