import React from "react";
import * as S from "./style";

function Graph(ContainerInfo, fromTop, positioning) {
    
    
    
    
    // find min and max temp to find the diffrence and calculate height 
    const max = Math.max(...ContainerInfo.temperature),
    min = Math.min(...ContainerInfo.temperature);
    
    const difference = max - min;
    const degreeOfChange = ContainerInfo.ContainerInfo.heightOfContainers / difference; // degree of change of Y axis
    console.log(degreeOfChange);
 
   
  return (
    <>
    
    </>
    );
 }


export default Graph;