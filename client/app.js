const API = `http://localhost:5000/api/v1/location/get-location`;
const modal = document.querySelector('.modal');
const closeModal = document.querySelectorAll('.icon-close');
const openModal = document.querySelector('.header__user');

// popup modal
openModal.addEventListener('click', () => {
    modal.classList.add('show-modal');
});

closeModal.forEach(e => {
    e.addEventListener('click', () => {
        modal.classList.remove('show-modal');
    })
})

// login signup

const signup = document.querySelector('.signup');
const login = document.querySelector('.login');
const subSignup = document.querySelector('#sub-signup');
const subLogin = document.querySelector('#sub-login');

subLogin.addEventListener('click', (e) => {
    e.preventDefault();
    login.classList.add('active');
    signup.classList.remove('active');
});

subSignup.addEventListener('click', (e) => {
    e.preventDefault();
    login.classList.remove('active');
    signup.classList.add('active');
});

let lat = 0;
let lon = 0;
// api
async function getWeather(city) {
    const newAPI = API + `\\${city}`;
    const geo = await fetch(newAPI);
    const resGeo = await geo.json();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${resGeo.lat}&lon=${resGeo.lng}&appid=56a710d6831ef0d0c537cb614265d9ab`
    const res = await fetch(url);
    const weather = await res.json();
    // console.log(weather);
    changeWeather(weather);
}


const locations = document.querySelectorAll('.location');
const temps = document.querySelectorAll('.temp');
const descs = document.querySelectorAll('.desc');
const humidity = document.querySelector('.humidity');
const visibility = document.querySelector('.visibility');
const wind = document.querySelector('.wind'); 
const sea = document.querySelector('.sea');


function changeWeather(weather) {
    locations.forEach(location => {
        location.textContent = weather.name + ' ' + weather.sys.country;
    });
 
    temps.forEach(temp => {
        temp.textContent = Math.round( weather.main.temp - 273.15);
    });

    descs.forEach(desc => {
        desc.textContent = weather.weather[0].description;
    });

    humidity.textContent = weather.main.humidity + '%';

    visibility.textContent = weather.visibility + 'm';

    wind.textContent = weather.wind.speed + 'm/s';

    sea.textContent = weather.main.pressure + 'm';
}

const inputCity = document.querySelector('.main__search input');
window.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        let city = inputCity.value;
        getWeather(city);  
    }
})


// function getLocation(city) {
//     Location.getLocation(city);
// }

// const { geocoder } = require('geocoder-opencagedata')
// const coder = new geocoder({api_key: '2657b76ce5fd4f9f87f8b1c0a2b061e4'})

// coder.geocode('21.0294498, 105.8544441').then(resp => {

//     if (resp.ok) {

//         console.log('Full response:', resp)
//         console.log('The most probable address:', resp.address)
//         //you may also want to check all other suggestions provided in array: resp.results
//         //for more details on response properties please consult with API Reference at https://opencagedata.com/api#reverse-resp
//     }
// })
