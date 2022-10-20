import React, { FC, useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import { Styled, StyledCard } from "./List.styled";
import { ListProps } from "./List.types";

import { Draggable, Droppable } from "react-beautiful-dnd";
import Input from "../Input";
import { card } from "../../services/http/patika/endpoints/card";
import { DetailedCardProps } from "../DetailedCard/DetailedCard.types";
import {
  BoardContext,
  useBoardContext,
} from "../../contexts/BoardContext/BoardContext";
import CardListItem from "../CardListItem";
import { CreateListRequestPayload } from "../../services/http/patika/endpoints/list/types";
import { list } from "../../services/http/patika/endpoints/list";

const List = (props: any, id: number, index: number, title: string) => {
  //yeni card ekleme
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const [list, setList] = useState<any>([]);

  const BoardCtx = useBoardContext();

  const handleAddList = (list: any) => {
    BoardCtx.dispatches.addList(list);
  };

  const handleAddListClick = (e: any) => {
    list
      .create({
        title: value,
        boardId: 0,
      })
      .then((title: any) => handleAddList(title.data));
  };

  const handleAddCard = (card: any) => {
    BoardCtx.dispatches.addCard(card);
  };

  const handleAddClick = (e: any) => {
    card
      .create({
        id: 0,
        title: value,
        listId: 0,
      })
      .then(({ title }) => {
        handleAddCard(title);
      });
  };

  return (
    <div>
      <div className="addNewList">
        <Input
          placeholder="List title"
          type="text"
          onChange={handleChange}
          value={value}
        />
        <Button onClick={handleAddListClick}>Save</Button>
      </div>
      ;
      <div className="addNewCard">
        <Input placeholder="Card title" type="text" onChange={handleChange} />
        <Button onClick={handleAddClick}>Save</Button>
      </div>
      {/* <Droppable droppableId={list.id} type="card"> */}
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
      
      {/* </Droppable> */}
    </div>
  );
};

export default List;
