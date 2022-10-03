import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import { Styled } from "./Board.styled";

const Board = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    //tüm boardların oldugu sayfaya geri yönlendirecek
    navigate("/addboard");
  };

  return (
    <Styled>
      <div className="container text-center">
        <div className="row align-items-start row-top">
          <div className="col">
            <Button className="boardsbtn" onClick={handleBack}>
              Boards
            </Button>
          </div>
          <div className="col board-name">
            Untitled Board{" "}
            <span className="material-symbols-outlined">edit</span>
          </div>
          <div className="col add-user-btn">
            <span className="material-symbols-outlined">manage_accounts</span>
          </div>
        </div>

        <div className="row-bottom"> asdasdasdasd</div>
      </div>
    </Styled>
  );
};

export default Board;
