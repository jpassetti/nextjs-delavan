import React from 'react';

interface UlProps {
  children: React.ReactNode;
}

const UnformattedList: React.FC<UlProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default UnformattedList;