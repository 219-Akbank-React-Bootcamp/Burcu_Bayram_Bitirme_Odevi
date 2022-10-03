import React, { FC } from "react";
import { Styled } from "./Button.styled";

const Button: FC<any> = (props) => {
  return (
    <div>
      <Styled {...props} />
    </div>
  );
};

export default Button;
