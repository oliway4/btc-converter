const inputValue = '20' //Value to convert
const inputCurrency = 'GBP'
const APIKey = '114c4554918fedfe39298f6d422e5683' //api key
const apiURL = 'http://apilayer.net/api/live'       //api url
var fetch = require("node-fetch"); //Enables fetch function

const usdToBtc = async () => {
    const endpoint = apiURL + '?access_key=' + APIKey + '&format=1'   //Creates API URL 
    try {
        const response = await fetch(endpoint)  //AJAX call to API
        if (response.ok === true) { //Handles successful request
            const jsonResponse = await response.json()  //Defines response object
            if (jsonResponse.success === true) {  //Checks for error response from API
                let dynamCurrency = ["USD" + inputCurrency]     //Reformats inputCurrency to API standard
                console.log(jsonResponse.quotes.USDBTC + ' USDBTC');
                console.log(jsonResponse.quotes.USDGBP + ' USDGBP');
                console.log((inputValue / jsonResponse.quotes[dynamCurrency]) * jsonResponse.quotes.USDBTC + ' BTC');   //GBP -> USD -> BTC
            } else {console.log('API Error')}
        }
    } catch(error) {
        console.log(error); //Logs error if no response from API
    }
};
usdToBtc();