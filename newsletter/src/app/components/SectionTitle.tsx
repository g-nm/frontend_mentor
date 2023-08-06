import React from 'react';

type SectionTitleProps = {
  children: React.ReactNode;
};

function SectionTitle({ children }: SectionTitleProps) {
  return <h1 className="text-4xl font-bold pb-5 text-darkGrey">{children}</h1>;
}

export default SectionTitle;
