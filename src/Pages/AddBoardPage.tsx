import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { Styled } from "../components/Card/Card.styled";
import { useLoginContext } from "../contexts/LoginContext/LoginContext";

export type AddBoardPageProps = {};

const AddBoardPage: FC<AddBoardPageProps> = (props) => {
  const navigate = useNavigate();
  const { login } = useLoginContext();

  const handleClick = () => {
    //board ekranına yonlendirecek
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

export default AddBoardPage;
