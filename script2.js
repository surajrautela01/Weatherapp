const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';

$(document).ready(function () {
    weatherFn('Delhi');
});

async function weatherFn(cName) {
    const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
        const res = await fetch(temp);
        const data = await res.json();
        if (res.ok) {
            weatherShowFn(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function weatherShowFn(data) {
    $('#city-name').text(data.name);
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $('#temperature').html(`${data.main.temp}°C`);
    $('#description').text(data.weather[0].description);
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);
    $('#weather-icon').attr('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    $('#weather-info').fadeIn();
}
let isDarkMode = false; // Initialize dark mode status

function toggleDarkMode() {
    // Toggle dark mode for the body
    const body = document.querySelector('body');
    // body.style.background = 'linear-gradient(to right, #000000, #808080)';
    body.style.background =  'url(pexels-jonathan-emili-4620668-6133150.jpg)';
    body.style.color = 'black';
    body.style.backgroundPosition = "center "
    body.style.backgroundSize ="cover"
    
    body.style.color = 'white';

    // Toggle dark mode for the weather card
    const weatherCard = document.querySelector('.weather-card');
    weatherCard.style.background = 'linear-gradient(to right, #000000, #808080)';
    weatherCard.style.color = 'white';

    isDarkMode = true; // Set dark mode status to true
}

function toggleNormalMode() {
    // Toggle normal mode for the body
    const body = document.querySelector('body');
    body.style.background =  'url(pexels-brett-sayles-912364.jpg)';
    body.style.color = 'black';
    body.style.backgroundPosition = "center"
    body.style.backgroundSize ="cover"
    

    // Toggle normal mode for the weather card
    const weatherCard = document.querySelector('.weather-card');
    weatherCard.style.background = 'seashell';
    weatherCard.style.color = 'black';

    isDarkMode = false; // Set dark mode status to false
}
