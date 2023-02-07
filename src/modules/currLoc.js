import { displayWeather } from "./display";

export default function cuLocation(){
    console.log("current location");
    navigator.geolocation.getCurrentPosition(showPosition);
}
let longitude = 0;
let latitude = 0;
let apiKey = '124037468d5fc4cf222e0fd1436d41b3';
function showPosition(position){
     longitude = position.coords.longitude;
     latitude = position.coords.latitude;

    console.log(longitude, latitude);
    fetchData();
}

  function fetchData(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`, {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      displayWeather(response);
    });
  }