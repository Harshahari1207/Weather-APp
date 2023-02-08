export function kelvinToCelcius(k){
    let celcius = k - 273.15
    return celcius.toFixed(0)
    }
    
export function unixToHuman(t){
    var date = new Date(t * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
    
export function nameAsTitle(str){
    let words = str.split(" ");
    let titleCasedWords = words.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
    return titleCasedWords.join(" ");
  };

export function convertTimeZone(timezone) {
        let hours = Math.floor(timezone / 3600);
        let minutes = Math.floor((timezone % 3600) / 60);
        let sign = hours > 0 ? '+' : '-';
        hours = Math.abs(hours);
        return `UTC ${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    }

    
export function windDi(w){
    if(w >= 0 && w < 30 ){
        return "N"
    }
    else if(w >= 30 && w < 60 ){
        return "NE"
    }
    else if(w >= 60 && w < 120 ){
        return "E"
    }
    else if(w >= 120 && w < 150 ){
        return "SE"
    }
    else if(w >= 150 && w < 210 ){
        return "S"
    }
    else if(w >= 210 && w < 240 ){
        return "SW"
    }
    else if(w >= 240 && w < 300 ){
        return "W"
    }
    else if(w >= 300 && w < 330 ){
        return "NW"
    }
    else return "N"
    }

// export function convertUTCToLocalTime(utcTime) {
//         // Get the time zone offset for the country
//         let timeZoneOffset = -Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1];
//         // Calculate the local time by adding the time zone offset to the UTC time
//         let localTime = new Date(utcTime.getTime() + (timeZoneOffset * 60 * 60 * 1000));
//         return localTime;
//       }