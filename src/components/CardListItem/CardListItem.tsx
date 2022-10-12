import React, { FC, useState } from "react";
import { useBoardContext } from "../../contexts/BoardContext/BoardContext";
import { Styled, StyledInput } from "./CardListItem.styled";
import { CardListItemProps } from "./CardListItem.types";
import { Draggable } from "react-beautiful-dnd";
import Input from "../Input";
import Button from "../Button";

const CardListItem = (props: any, id: any, index: number, title: string) => {
  const BoardCtx = useBoardContext();

  const [cardItemValue, setCardItemValue] = useState<any>("");
  const [cardItems, setCardItems] = useState<any>([]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const v = e.target.value;
    setCardItemValue(v);
    props.onChange?.(e, v);
  };

  const handleClick = (e: any) => {
    if (cardItemValue !== "") {
      setCardItems([
        {
          id: `${cardItemValue}-${Date.now()}`,
          cardItemValue,
        },
        ...cardItems,
        ,
      ]);
    }
  };

  return (
    <Styled>
      <div>
        <StyledInput
          onChange={handleChange}
          value={cardItemValue}
          placeholder={"Card title"}
          type={"text"}
        />
      </div>
      <div>
        <Button type="button" className="btn-light" onClick={handleClick}>
          Add a card
        </Button>
      </div>
      <Draggable draggableId={cardItems.id} index={cardItems.index}>
        {(provided) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <ul>
                {cardItems.map((items: any) => (
                  <li>
                    <span>{items.cardItemValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Draggable>
    </Styled>
  );
};

export default CardListItem;
