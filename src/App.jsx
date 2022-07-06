import React from 'react'
import Forecast from './components/Forecast/Forecast'
import * as Style from "./style";

function App() {
    return ( 
       <>
       <Style.GlobalStyle />
      <Style.StyledApp>
        <Style.Header>Прогноз на целый день по 3 часа </Style.Header>
        <Forecast  />
      </Style.StyledApp>
       </>
    );
}

export default App;