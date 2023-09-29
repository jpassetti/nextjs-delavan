import React from "react";
import styled from "styled-components";
import Button from "./Button";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onClickFunction: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const CTA = (props: Props) => {
  return (
    <Button
      clickHandler={props.onClickFunction}
    >
      {props.children}
    </Button>
  );
};

export default CTA;