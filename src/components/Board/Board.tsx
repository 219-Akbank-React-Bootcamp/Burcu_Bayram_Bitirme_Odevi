import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Card from "../Card/Card";
import CardListItem from "../CardListItem";
import DetailedCard from "../DetailedCard";
import List from "../List";
import { StyledCard } from "../List/List.styled";
import { Styled } from "./Board.styled";
import { BoardProps } from "./Board.types";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropReason,
  DropResult,
} from "react-beautiful-dnd";

const lists = [
  {
    title: "List Adı Güncel",
    boardId: 1,
    card: <Card title={""} />,
  },
  {
    title: "Liste 2",
    boardId: 2,
    card: <Card title={""} />,
  },
];

const Board = () => {
  const [listTitle, setListTitle] = useState();
  const [cardItems, setCardItems] = useState<any>([]);
  const [dropItems, setDropItems] = useState<any>([]);

  const navigate = useNavigate();

  const handleBack = () => {
    //tüm boardların oldugu sayfaya geri yönlendirecek
    navigate("/addboard");
  };

  const [activeList, setActiveList] = useState<string>(lists[0].title); //hangisinin etkin olduğunu gosteren state
  const handleChangeActiveList = (title: string) => {
    setActiveList(title);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId !== destination?.droppableId &&
      destination?.index === source.index
    )
      return;

    let add,
      active = cardItems,
      complete = dropItems;

    if (source.droppableId === "col-1") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = active[source.index];
      complete.splice(source.index, 1);
    }

    if (destination?.droppableId === "col-1") {
      active.splice(destination?.index, 0, add);
    } else {
      complete.splice(destination?.index, 0, add);
    }
    setDropItems(dropItems);
    setCardItems(cardItems);
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
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="container_dnd">
            <Droppable droppableId="col-1">
              {(provided) => (
                <div
                  className="col-1"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {lists.map((cardItem, index) => (
                    <CardListItem
                      cardItem={cardItem}
                      key={cardItem.title}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="col-2">
              {(provided) => (
                <div
                  className="col-2"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {lists.map((cardItem, index) => (
                    <CardListItem
                      cardItem={cardItem}
                      key={cardItem.title}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
        {/* <div
          className="row-bottom "
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >

            <div className="col">
              <Styled>
                {lists.map((list) => {
                  return (
                    <List title={list.title} id={0} />
                    // <button
                    //   className={list.title === activeList ? "active list-title" : "list-title"}
                    //   onClick={() => handleChangeActiveList(list.title)}
                    // >
                    //   {list.title}
                    // </button>
                  );
                })}

                {/* <div>{lists.find((list) => list.title === activeList)?.card}</div> */}
        {/* </Styled>

              <button className=" btn btn-outline-primary  " type="button">
                <span className="material-symbols-outlined align-top">add</span>
                Add another list
              </button>
            </div>
          </DragDropContext>
        </div> */}
      </div>
    </Styled>
  );
};
export default Board;
