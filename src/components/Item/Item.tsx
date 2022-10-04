import React, { FC } from "react";
import Button from "../Button";
import { Styled } from "./Item.styled";
import { ItemProps } from "./Item.types";

const Item: FC<ItemProps> = (props) => {
  return (
    <Styled>
      <span className="material-symbols-outlined add_circle">add_circle</span>

      <h6 contentEditable="true"> {props.title}</h6>
      {props.children}
    </Styled>
  );
};

export default Item;
