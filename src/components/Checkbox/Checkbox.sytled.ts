import styled from "styled-components";

export const Styled = styled.div`

display: flex;
flex-direction: row;
aling-items: center;
cursor: pointer;

input{
    width: 0px;
    height: 0px;
    display: none;

}

.checkbox-container{
    width: 18px;
    height: 18px;
   box-sizing: box;
   border-radius: 3px;
   border: 2px solid #515151;
   align-items:center;
   display:flex;
   justify-content: center;


}
.check-icon{
    font-size: 16pt;
}

.label{
    margin-left: 10px;
    font-size: 0.8rem;
}

`