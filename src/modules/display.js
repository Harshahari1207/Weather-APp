import { kelvinToCelcius, unixToHuman } from "./converts";

const description = document.querySelector('.description');
const cityName = document.querySelector('.cityName');
const temperature = document.querySelector('.temp');
const date = document.querySelector('.date');
const sunrise = document.querySelector(".sunriseh2");
const humidity = document.querySelector(".humh2");
const sunset = document.querySelector(".sunseth2");
const maxTemp = document.querySelector(".maxh2");
const temp = document.querySelector(".temph2");
const minTemp = document.querySelector(".minh2");
const wind = document.querySelector(".windh2");
const pressure = document.querySelector(".pressureh2");
export function displayWeather(response){
    console.log(response);
    let tempC = kelvinToCelcius(response.main.temp);
    let sunriseVal = unixToHuman(response.sys.sunrise);
    let sunsetVal = unixToHuman(response.sys.sunset);
    let maxTempVal = kelvinToCelcius(response.main.temp_max)
    let minTempVal = kelvinToCelcius(response.main.temp_min)
    const currentDate = new Date();
    const currentDateString = currentDate.toLocaleDateString();
    const currentTimeString = currentDate.toLocaleTimeString();
    console.log(tempC);
    console.log(sunriseVal);
    console.log(sunsetVal);
    console.log(maxTempVal);
    console.log(minTempVal);
    description.textContent = response.weather[0].description;
    cityName.textContent = response.name;
    date.textContent = currentDateString + " " + currentTimeString;
    temperature.textContent = tempC + "°C";
    setTimeout(()=>{
        temp.textContent = tempC + "°C";
        setTimeout(()=>{
            humidity.textContent = response.main.humidity ;
            setTimeout(()=>{
                sunrise.textContent = sunriseVal;
                setTimeout(()=>{
                    sunset.textContent = sunsetVal;
                })
            }, 250)

        }, 250);
        
    }, 250);
    
        
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


