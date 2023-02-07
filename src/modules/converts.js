export function kelvinToCelcius(k){
    let celcius = k - 273.15
    return celcius.toFixed(0)
    }
    
export function unixToHuman(t){
    var date = new Date(t * 1000);
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }    