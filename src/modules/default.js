import { displayWeather } from "./display";

let inputCity = "London"
let apiKey = '124037468d5fc4cf222e0fd1436d41b3';
export function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&APPID=${apiKey}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      displayWeather(response);
    });
    
    
  }