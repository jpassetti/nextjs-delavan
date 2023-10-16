import React, { ReactNode, FC, Fragment } from 'react';

// Define a TypeScript interface for the Text component props
interface TextProps {
  children: ReactNode;
}

// Define the Text component as a functional component (FC) with the specified props
const Text: FC<TextProps> = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

export default Text;