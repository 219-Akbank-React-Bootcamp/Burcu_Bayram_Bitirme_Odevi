import styled from "styled-components";

export const Styled = styled.div`
display: flex;
width: 100%;
margin-top: 10px;
border-radius: 5px;
box-sizing: border-box;
list-style: none;

.addListBtn{
    margin-top: 5px;
}

.container_dnd{
    display: flex;
    width: 95%;
    margin-top: 10px;  
    align-items: flex-start;
    background-color: whitesmoke;
    min-height: 100vh;}

.col-1{
    display: flex;
    width: auto;   
    padding: 15px;
    border-radius: 5px;
    border-color: red;
}   
.col-2{
    display: flex;
    width: auto;
    
    flex-direction: column;
    padding: 15px;
    border-radius: 5px;
    border-color: red;
}

.board-name{
    color: white;
    
}
.add-user-btn{
    color: white;
}
    
.row-bottom{
    margin-top: 20px;
    padding:20px 20px;
    background-color: white;      
    height: 100%;
    display: flex;
    
}

.boardsbtn{
    width: 100px;
}

`