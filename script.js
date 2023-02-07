const currLocation = document.querySelector("button");

currLocation.addEventListener("click", cuLocation);

function cuLocation(){
    console.log("current location");
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
    let logitude = position.coords.longitude;
    let latitude = position.coords.latitude;

    console.log(logitude, latitude);
}