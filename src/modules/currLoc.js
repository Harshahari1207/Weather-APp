export default function cuLocation(){
    console.log("current location");
    navigator.geolocation.getCurrentPosition(showPosition);
}
let longitude = 0;
let latitude = 0;
let apiKey = '02cd7df6f57621292521348f6a56ec7c'
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
      console.log(response);
    });
  }