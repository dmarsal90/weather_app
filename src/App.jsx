import {useState} from 'react'

import './App.css'
import {Search} from "./assets/components/search/Search";
import {CurrentWeather} from "./assets/components/current-weather/current-weather";
import {WEATHER_API_KEY, WEATHER_API_URL} from "./assets/components/api.jsx";
import {Forecast} from "./assets/components/forecast/forecast";

function App() {
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({city: searchData.label, ...weatherResponse});
            setForecast({city: searchData.label, ...forecastResponse});
        }).catch((err) => console.log(err));
    };

    console.log(currentWeather);
    console.log(forecast);

    return (<div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/> }
        <Forecast/>
    </div>)
}

export default App
