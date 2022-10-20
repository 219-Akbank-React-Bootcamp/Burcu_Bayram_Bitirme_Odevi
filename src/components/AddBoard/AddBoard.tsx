import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Styled } from "./AddBoard.styled";

const AddBoard: FC<any> = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    //board ekranına yonlendirecek - list ve card ekleme
    navigate("/board");
  };

  return (
    <Styled>
      <Button className="addNewBoard " onClick={handleClick}>
        {" "}
        <span className="material-symbols-outlined add_circle">add_circle</span>
        <br />
        Add a new board
      </Button>
    </Styled>
  );
};

export default AddBoard;
