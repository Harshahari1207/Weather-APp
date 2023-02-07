import { displayWeather } from "./display";

const inputCity = document.getElementById('searchLoc');
export default function searchLocation(){
    console.log("current location");
    console.log(inputCity.value);
    
    fetchData();
}
let apiKey = '124037468d5fc4cf222e0fd1436d41b3';
function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&APPID=${apiKey}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      displayWeather(response);
    });
    
    inputCity.value = "";
  }