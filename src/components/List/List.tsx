import React, { FC, useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import { Styled, StyledCard } from "./List.styled";
import { ListProps } from "./List.types";

import { Draggable, Droppable } from "react-beautiful-dnd";
import Input from "../Input";
import { card } from "../../services/http/patika/endpoints/card";
import { DetailedCardProps } from "../DetailedCard/DetailedCard.types";
import { useBoardContext } from "../../contexts/BoardContext/BoardContext";
import CardListItem from "../CardListItem";

const List: FC<ListProps> = (props) => {
  //yeni card ekleme
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const BoardCtx = useBoardContext();

  const handleAddCard = (card: any) => {
    BoardCtx.dispatches.addCard(card);
  };

  const handleAddClick = () => {
    card
      .create({
        title: value,
        listId: 0,
      })
      .then(({ title }) => {
        handleAddCard(title);
      });
  };

  return (
    <StyledCard className="card">
      <div className="addNewCard">
        <Input placeholder="Card title" type="text" onChange={handleChange} />
        <Button onClick={handleAddClick}>Save</Button>
      </div>
      {BoardCtx.state.card.map((card) => (
        <CardListItem title={card.title} />
        // <div className="card-body">
        //   <h5 contentEditable="true" className="card-title">
        //     {card.title}{" "}
        //     <button className=" btn btn-outline-primary" type="button">
        //       <span className="material-symbols-outlined align-top">
        //         Delete
        //       </span>
        //     </button>
        //   </h5>
        // </div>
      ))}

      {/* <p className="card-text">label color</p>
        <h6 className="card-subtitle mb-2 text-muted">Test Card title</h6>
        <p className="card-text">date</p>
        <p className="card-text">checklist sayısı</p>
        <a href="#" className="card-link">
          Card link
        </a>
        <a href="#" className="card-link">
          Another link
        </a> */}
      {/* <Draggable draggableId={id.toString()} index={order}>
        {(provided, snapshot) => {
          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={{
                userSelect: "none",
                padding: 16,
                margin: "0 0  8px 0",
                minHeight: "50px",
                backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                color: "white",
                ...provided.draggableProps.style,
              }}
            >
              <li>{props.title}</li>
            </div>
          );
        }}
      </Draggable> */}
    </StyledCard>
  );
};

export default List;
