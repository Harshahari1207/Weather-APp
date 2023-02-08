import { kelvinToCelcius, nameAsTitle, unixToHuman, convertTimeZone, windDi, convertUTCToLocalTime } from "./converts";

const description = document.querySelector('.description');
const cityName = document.querySelector('.cityName');
const timeZone = document.querySelector('.timeZone');
const temperature = document.querySelector('.temp');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const sunrise = document.querySelector(".sunriseh3");
const humidity = document.querySelector(".humh3");
const sunset = document.querySelector(".sunseth3");
const feelsLike = document.querySelector('.feelsLikeh3')


const wind = document.querySelector(".windh3");
const windDeg = document.querySelector(".windDeg");
const pressure = document.querySelector(".pressureh3");
export function displayWeather(response){
    console.log(response);
    let tempC = kelvinToCelcius(response.main.temp);
    let sunriseVal = unixToHuman(response.sys.sunrise);
    let sunsetVal = unixToHuman(response.sys.sunset);
    let feelsLikeVal = kelvinToCelcius(response.main.feels_like);
    const dateAndTime = new Date(response.dt * 1000);
    const dateVal = `${dateAndTime.getFullYear()}-${dateAndTime.getMonth() + 1}-${dateAndTime.getDate()}`;
    const timeVal = `${dateAndTime.getHours()}:${dateAndTime.getMinutes()}:${dateAndTime.getSeconds()}`;
    console.log(tempC);
    console.log(sunriseVal);
    console.log(sunsetVal);
    console.log("Date and time:", new Date(response.dt * 1000))
    console.log(response.wind.deg);
    let str = response.weather[0].description;
    console.log(str)
    let descriptionVal = nameAsTitle(str);
    console.log(descriptionVal)
    console.log(response.timezone);
    description.textContent = descriptionVal;
    cityName.textContent = response.name;
    let timeZoneVal = convertTimeZone(response.timezone);
    // console.log(convertUTCToLocalTime(timeZoneVal));
    timeZone.textContent = timeZoneVal;
    date.textContent = dateVal;
    time.textContent = timeVal;
    temperature.textContent = tempC + "°C";
    sunrise.textContent = sunriseVal;
    sunset.textContent = sunsetVal;
    feelsLike.textContent = feelsLikeVal + "°C";
    humidity.textContent = response.main.humidity+ "%";
    wind.textContent = response.wind.speed+ " m/s";
    windDeg.textContent = response.wind.deg + "°" + windDi(response.wind.deg);

    // setTimeout(()=>{
    //     temp.textContent = tempC + "°C";
    //     setTimeout(()=>{
    //         humidity.textContent = response.main.humidity ;
    //         setTimeout(()=>{
    //             sunrise.textContent = sunriseVal;
    //             setTimeout(()=>{
    //                 sunset.textContent = sunsetVal;
    //             })
    //         }, 250)

    //     }, 250);
        
    // }, 250);
    
        
    // setTimeout(()=>{
    //     sunrise.textContent = sunriseVal ;
        
    // }, 500);
    // setTimeout(()=>{
    //     sunset.textContent = sunsetVal ;

    //     setTimeout(()=>{
    //         maxTemp.textContent = maxTempVal + "°C";

    //     }, 500);
    //     setTimeout(()=>{
    //         minTemp.textContent = minTempVal + "°C";
    //     }, 0000);
        
    // }, 0000);
}


