import styled from "styled-components";


export const container = styled.div`
background: rgb(15, 14, 14);
border: 1px solid transperent;
border-radius: 1.5rem;
height: 750px;
width: 750px;
margin: 3rem auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

export const h1= styled.h1`
    text-align:center;
    font-size:1.7rem;
    color:#fff;
`

export const maincontainer = styled.div`
    display:grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    text-align:center;
    position:relative;
    height:75%;  
   `


export const day_cont = styled.div`
    display:grid;
    grid-template-rows: 25% 40% 25%; 
    border: 1px solid transperent;
    border-radius: 1.5rem;
    row-gap: 3%;
    width:130px;
    color:#ffffff;
    position:relative;
    transition: 0.3s;
    &:hover {
        background: #474343;
      }
`

export const p = styled.p`
background: #ff00aa;
width:85%;
margin-left: 7.5%;
display:flex;
align-items:center;
justify-content:center;
`
