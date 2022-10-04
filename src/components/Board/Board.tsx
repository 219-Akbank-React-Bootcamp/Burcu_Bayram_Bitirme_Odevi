import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Item from "../Item";
import { Styled } from "./Board.styled";
import { BoardProps } from "./Board.types";

const Board: FC<BoardProps> = () => {

  const [listTitle, setListTitle] = useState()

  const navigate = useNavigate();

  const handleBack = () => {
    //tüm boardların oldugu sayfaya geri yönlendirecek
    navigate("/addboard");
  };

  // const handleEditListTitle = ()=>{
  //   const findListTitle = listTitle.find((title) => title.id === id );
  //   setListTitle(findListTitle)

  // } aşağıda Item'ın onClick'ine verilecek

  return (
    <Styled>
      <div className="container text-center">
        <div className="row align-items-start row-top">
          <div className="col">
            <Button className="boardsbtn" onClick={handleBack}>
              Boards
            </Button>
          </div>
          <div className="col board-name" contentEditable="true">
            Untitled Board{" "}
            <span className="material-symbols-outlined">edit</span>
          </div>
          <div className="col add-user-btn">
            <span className="material-symbols-outlined">manage_accounts</span>
          </div>
        </div>

        <div className="row-bottom">
          {" "}
          
          <Item title="Add a list"  />
        </div>
      </div>  
    </Styled>
  );
};

export default Board;
