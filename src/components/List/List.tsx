import React, { FC, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import { Styled, StyledCard } from "./List.styled";
import { ListProps } from "./List.types";

import { Draggable, Droppable } from "react-beautiful-dnd";
import Input from "../Input";
import { card } from "../../services/http/patika/endpoints/card";
import { DetailedCardProps } from "../DetailedCard/DetailedCard.types";

const List: FC<ListProps> = (props) => {
  //yeni card ekleme
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const [cards, setCards] = useState<Array<DetailedCardProps>>([]);

  const handleAddCard = (card: any) => {
    setCards((prev) => [...prev, card]);
  };

  const handleAddClick = () => {
    card
      .create({
        title: value,
        listId: 0,
      })
      .then(({ data }) => {
        handleAddCard(data);
      });
  };

  return (
    <StyledCard className="card">
      <div className="addNewCard">
        <Input placeholder="Card title" type="text" />;<Button>Save</Button>
      </div>
      {cards.map((card) => (
        <div className="card-body">
          <h5 contentEditable="true" className="card-title">
            {card.title}{" "}
            <button className=" btn btn-outline-primary" type="button">
              <span className="material-symbols-outlined align-top">
                delete
              </span>
            </button>
          </h5>
        </div>
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
    </StyledCard>
  );
};

export default List;
