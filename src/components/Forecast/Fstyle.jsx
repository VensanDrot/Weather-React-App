import styled from "styled-components";


export const container = styled.div`
margin: 10rem 15rem;
background: #000000;
border: 1px solid transperent;
border-radius: 1.5rem;
padding: 1.5rem;
`

export const maincontainer = styled.div`
    display:grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
    column-gap: 1.6rem;
    text-align:center;
    height:50vh;
    position:relative;
    
    
    `

export const h1= styled.h1`
    text-align:center;
    font-size:2.4rem;
    color:#fff;
`


export const day_cont = styled.div`
    display:grid;
    grid-template-rows: 25% 40% 25%; 
    border: 1px solid transperent;
    border-radius: 5rem;
    row-gap: 5%;
    color:#ffffff;
    position:relative;
    transition: 0.3s;
    &:hover {
        background: #aaccee;
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
