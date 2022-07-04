import React,{useEffect, useState} from 'react'
import * as S from './Fstyle'
import APIW from '../Api/APIW'
const days = [];
const Forecast = () => {
  


  const [days, setDays] = useState([]);
  useEffect(() => {
    APIW().then((data) => {
      setDays(data);
    });
  }, []);
console.log(days);
return (
    <S.container>
        <S.h1>Forecast for every 3 hours</S.h1>
        <S.maincontainer>
        {days.length!==0 && days.map((g)=> {
          return ( <S.day_cont><S.p>{g.date}</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>)
        })}
          <S.day_cont><S.p>12</S.p><S.p>12</S.p><S.p>12</S.p></S.day_cont>
        </S.maincontainer>
    </S.container>
  )
}

export default Forecast