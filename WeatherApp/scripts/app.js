const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const DETAILS = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();

// UPDATE The UI
const updateUI = (datas) => {
    
    const { cityDetails, weather } = datas;
    console.log(datas);

    //Update details template
    DETAILS.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
            </div>
    `;

    //Update night & day background images & Icons
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

   
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';


    time.setAttribute('src', timeSrc);


   // remove the d-none if present
   if(card.classList.contains('d-none')){
       card.classList.remove('d-none');
   }

};



cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const CITY = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with the new city
    forecast.updateCity(CITY)
        .then(data => {
            updateUI(data); 
        }).catch(error => {
            console.log(error);
        });

        //set local storage
        localStorage.setItem('city', CITY);
});


if(localStorage.getItem('city')){
updateCity(localStorage.getItem('city'))
        .then(data => {
            updateUI(data); 
        }).catch(error => {
            console.log(error);
        });
}















