import React,{ useRef, useEffect, useState} from 'react'
import * as S from './Fstyle'
import APIW from '../Api/APIW'
import sun from '../svg/day.svg'
import clouds from '../svg/cloudy-day-3.svg'
import cloudwithrain from '../svg/rainy-6.svg'
import moon from '../svg/night.svg'
import wind from '../svg/wind-svgrepo-com.svg'
import Graph from '../Graph/Graph'




const Forecast = () => {
  
  const divRef = useRef();
  const childRef = useRef();
  const [containerData, setcontainerData] = useState([]);
  const [days, setDays] = useState([]);
  useEffect(() => {
    APIW().then((data) => {
      setDays(data);
    });
  }, []);


  
  
 
  useEffect(() => {
    if (divRef && divRef.current && childRef && childRef.current) {
      const widthMiddle = divRef.current.offsetWidth;
      const WidthOfChild = childRef.current.offsetWidth;
      const heightOfChild = childRef.current.offsetHeight;
      setcontainerData({
        startingPoint: widthMiddle / (days.length * 2),
        widthOfContainers: WidthOfChild,
        heightOfContainers: heightOfChild,
      });
      
    }
  }, [days.length]);

  //console.log(containerData);

  function getWeatherIcon(weather) {
    switch (weather) {
      case "Clear":
        return sun;
      case "Clouds":
        return clouds;
      case "Rain":
        return cloudwithrain;
      default:
        return sun;
    }
  }


  
  

return (

  <S.MainContainer ref={divRef}>
  
  {Object.keys(containerData).length !== 0 && (
        <>
          {/* for dayTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={days.map((day) => day.dayTemp)}
            fromTop="35%"
            positioning="dayTime"
          />
          {/* for nightTime */}
          <Graph
            ContainerInfo={containerData}
            temperature={days.map((day) => day.nightTemp)}
            fromTop="60%"
            positioning={undefined}
          />
        </>
      )}


        {days.length!==0 && days.map((g)=> {
          return ( 
          <S.EachDay>
            <S.Label>{g.date}</S.Label>
            <S.Description>{g.time}</S.Description>
            <S.Images src={getWeatherIcon(g.weather)} alt="weather" />
          
        
           
          <S.GraphSpace ref={childRef} ></S.GraphSpace>
          <S.GraphSpace></S.GraphSpace>


          {/* <S.Description>wind speed</S.Description> */}
          <S.Images src={moon} alt="weatherNight" />
          <S.Description>
            
             {g.wind}
             <S.WindImage src={wind} alt="wind" />
            
          </S.Description>
            </S.EachDay>)
        })}
         
  </S.MainContainer>
    
  )
}

export default Forecast