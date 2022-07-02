import styled from "styled-components";


export const container = styled.div`
margin: 10rem 15rem;
background: #000000;
    
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
    
    row-gap: 5%;
    color:#ffffff;
`

export const p = styled.p`
background: #ff00aa;
display:flex;
align-items:center;
justify-content:center;
`
