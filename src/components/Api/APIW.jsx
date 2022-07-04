const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=63af4b12863f964b7dd0c84b2c1ef94a&units=metric&cnt=5';




async function APIW() {
  const result = await fetch(url)
  .then((res)=>res.json())
  .then((data) => {
   const days = [];

   data.list.map((day) => {
     days.push({
       date: day.dt_txt.slice(5, 10),
       time: day.dt_txt.slice(11, 16),
       wind: day.wind.speed,
       dayTemp: day.main.temp_max,
       nightTemp: day.main.temp_min,
       weather: day.weather.main,
     });
   });
  
   return days;
  });

    return result;
  }


export default APIW;