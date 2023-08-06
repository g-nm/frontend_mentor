import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
};

function Text({ children, className }: TextProps) {
  return <p className={` text-darkGrey ${className}`}>{children}</p>;
}

export default Text;
