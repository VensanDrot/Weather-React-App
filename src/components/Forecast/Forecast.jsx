import React from 'react'
import * as S from './Fstyle'


const Forecast = () => {
    
  return (
    <S.container>
        <S.h1>Forecast for every 3 hours</S.h1>
        <S.maincontainer>
        <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        </S.maincontainer>
    </S.container>
  )
}

export default Forecast