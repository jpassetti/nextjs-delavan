import React, { ReactNode } from 'react';

interface DivProps {
  children?: ReactNode;
}

const Div: React.FC<DivProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Div;