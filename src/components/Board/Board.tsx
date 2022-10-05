import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import List from "../List";
import { StyledCard } from "../List/List.styled";
import { Styled } from "./Board.styled";
import { BoardProps } from "./Board.types";

const lists = [
  {
    title: "List Adı Güncel",
    boardId: 1,
    card: <div>Card content</div>,
  },
  {
    title: "Liste 2",
    boardId: 2,
    card: <div>Card content Liste 2</div>,
  },
];

const Board: FC<BoardProps> = () => {
  const [listTitle, setListTitle] = useState();

  const navigate = useNavigate();

  const handleBack = () => {
    //tüm boardların oldugu sayfaya geri yönlendirecek
    navigate("/addboard");
  };

  // const handleEditListTitle = ()=>{
  //   const findListTitle = listTitle.find((title) => title.id === id );
  //   setListTitle(findListTitle)

  // } aşağıda List'in onClick'ine verilecek

  const [activeList, setActiveList] = useState<string>(lists[0].title); //hangisinin etkin olduğunu gosteren state
  const handleChangeActiveList = (title: string) => {
    setActiveList(title);
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
          <div className="col board-name" contentEditable="true">
            Untitled Board{" "}
            <span className="material-symbols-outlined align-text-bottom">
              edit
            </span>
          </div>
          <div className="col add-user-btn">
            <span className="material-symbols-outlined">manage_accounts</span>
          </div>
        </div>

        <div className="row-bottom ">
          <div className="col">
            <Styled>
              {lists.map((list) => {
                return (
                  <button
                    className={list.title === activeList ? "active list-title" : "list-title"}
                    onClick={() => handleChangeActiveList(list.title)}
                  >
                    {list.title}
                  </button>
                );
              })}

              <div>{lists.find((list) => list.title === activeList)?.card}</div>
            </Styled>

            <button className=" btn btn-outline-primary  " type="button">
              <span className="material-symbols-outlined align-top">add</span>
              Add another list
            </button>
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default Board;
