import {useState} from 'react'

import './App.css'
import {Search} from "./assets/components/search/Search";
import {CurrentWeather} from "./assets/components/current-weather/current-weather";

function App() {
    return (
        <div className="container">
            <Search/>
            <CurrentWeather/>
        </div>
    )
}

export default App
