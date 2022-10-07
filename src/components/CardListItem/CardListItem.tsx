import React, { FC, useState } from "react";
import { useBoardContext } from "../../contexts/BoardContext/BoardContext";
import { Styled } from "./CardListItem.styled";

import { CardListItemProps } from "./CardListItem.types";

const CardListItem: FC<CardListItemProps> = (props) => {

  const BoardCtx = useBoardContext()

  return <Styled>
    <li>
      {props.children}
    </li>
  </Styled>;
};

export default CardListItem;
