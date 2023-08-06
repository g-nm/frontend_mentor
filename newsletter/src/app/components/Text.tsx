import React from 'react';

type TextType = {
  children: React.ReactNode;
  className?: string;
};

function Text({ children, className }: TextType) {
  return <p className={` text-darkGrey ${className}`}>{children}</p>;
}

export default Text;
