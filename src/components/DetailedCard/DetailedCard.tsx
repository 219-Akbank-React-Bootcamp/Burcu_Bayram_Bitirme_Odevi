import React, { FC, useState } from "react";
import { card } from "../../services/http/patika/endpoints/card";
import Button from "../Button/Button";
import Card from "../Card";
import Input from "../Input";
import { Styled } from "./DetailedCard.styled";
import { DetailedCardProps } from "./DetailedCard.types";

const DetailedCard: FC<DetailedCardProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const [detailedCards, setDetailedCards] = useState<Array<DetailedCardProps>>([]);

  const handleAddCard = (card: any) => {
    setDetailedCards((prev) => [...prev, card]);
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
    <Styled>
      <Card title={""}>
        <h1>{props.title}</h1>
        {props.children}
        <Input placeholder="Title" type="text" />

        <Input placeholder="Description" type="text" />

        <div>
          <h5>Comments</h5>
          <Input placeholder="Add comment" type={"text"} />
          <Button>Save</Button>
        </div>
      </Card>
    </Styled>
  );
};

export default DetailedCard;
