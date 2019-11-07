
class Forecast{
    constructor(){
        this.key = 'YdB496Dux5V2GDdeUxD994OZqoTMroTh';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(CITY){
        const cityDetails = await this.getCity(CITY); //getCity is from the forecast file
        const weather = await this.getWeather(cityDetails.Key); //getWeather is from the forecast file
    
        return { cityDetails, weather };
    }

    async getCity(CITY) {
        const query = `?apikey=${this.key}&q=${CITY}`;
        const response = await fetch(this.cityURI + query);
        const cityData = await response.json();

        return cityData[0];
    }

    async getWeather(keyId){
        const query = `${keyId}?apikey=${this.key}`;
        const response = await fetch (this.weatherURI + query);
        const weatherData = await response.json();

    return weatherData[0];   
    }
}

 {


































// const getWeather = async (keyId) => {
    
//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${keyId}?apikey=${key}`;

//     const response = await fetch (base + query);
//     const weatherData = await response.json();

//     return weatherData[0];
// };


// const getCity = async (city) => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`;

//     const response = await fetch(base + query);
//     const cityData = await response.json();

//     return cityData[0];
// };


// getCity('bacoor').then(cityData => {
//     return getWeather(cityData.Key);
// }).then(weatherData => {
//     console.log(weatherData);
// }).catch(error => console.log(error)); 

// getWeather('manila')
// .then(data => console.log(data))
// .catch(error => console.log(error)); 
