import React from "react";
import * as S from "./style";

function Graph(ContainerInfo, fromTop, positioning) {
    
    
    
    
    // find min and max temp to find the diffrence and calculate height 
    const max = Math.max(...ContainerInfo.temperature),
    min = Math.min(...ContainerInfo.temperature);
    
    const difference = max - min;
    //degre to rotate the line
    const degreeOfChange = ContainerInfo.ContainerInfo.heightOfContainers / difference; // degree of change of Y axis
    //console.log(degreeOfChange);
 
      // start temp
  const temperatureData = {
    x1: 0,
    y1: 0,
    x2: -ContainerInfo.ContainerInfo.startingPoint,
    y2: 70,
  };
   
  console.log(temperatureData.x2);
  return (
    <S.GraphImg top={ContainerInfo.fromTop}>
    {ContainerInfo.temperature.map((each, key) => {
      //replace the temp with the prev one's || change start points
      temperatureData.x1 = temperatureData.x2;
      temperatureData.y1 = temperatureData.y2;
      temperatureData.x2 += ContainerInfo.ContainerInfo.widthOfContainers;
    
      // if curent temp is lower then current add degree and set y2 coord 
      if (ContainerInfo.temperature[key - 1] > each) {
        temperatureData.y2 += degreeOfChange * Math.abs(ContainerInfo.temperature[key - 1] - each);
      } 
       // if curent temp is higher then current dicrease degree and set y2 coord 
      else if (ContainerInfo.temperature[key - 1] < each) {
        temperatureData.y2 -= degreeOfChange * Math.abs(ContainerInfo.temperature[key - 1] - each);
      }  // if curent temp is same stay on the same level 
      else {
        temperatureData.y2 += 0;
      }

      return (
        <g key={key}>
            
          {/* display the data according to nightTime or dayTime standards based on positioning props */}
          <S.Text
            x={temperatureData.x2}
            //correcting a place to put temp
            y={
              positioning ? temperatureData.y2 - 15 : temperatureData.y2 + 25
            }
          >
          
            {ContainerInfo.temperature[key]}°
          </S.Text>
          <S.Circle cx={temperatureData.x2} cy={temperatureData.y2} />
           {/* draw a line by coordinates */ }
            <S.Line
              x1={temperatureData.x1}
              y1={temperatureData.y1}
              x2={temperatureData.x2}
              y2={temperatureData.y2}
            />
        </g>
      );
    })}
  </S.GraphImg>
    );
 }
//export

export default Graph;