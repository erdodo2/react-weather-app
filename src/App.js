import React, {useState,useEffect} from 'react';
import axios from "axios";

import Header from "./components/Header";
import Base from "./components/Base";
import Hourly from "./components/Hourly";
import Weekly from "./components/Weekly";
import UVIndex from "./components/UVIndex";
import Sunrise from "./components/Sunrise";
import Wind from "./components/Wind";
import Moon from "./components/Moon";


import './App.css';
import weatherJson from './model/weather.json';

import moment from "moment/moment";
import {tr} from "moment/locale/tr"





function App() {
    moment.locale('tr', tr)

    const [city, setCity] = useState('Kütahya')
    const [weather, setWeather] = useState(weatherJson)
    const [todayWeather, setTodayWeather] = useState(weatherJson.forecast.forecastday[0])

    useEffect(() => {
        getWeather(city).then(()=>{
            setTodayWeather(weather.forecast.forecastday[0])
            console.log('today',todayWeather)
        })
    }, [])

    useEffect(() => {
        getWeather(city)
    }, [city])
    const getWeather = async (city) => {
        const url="https://api.weatherapi.com/v1/forecast.json?key=650feee5ed984d3ab84143925231003&q="+city+"&days=10&aqi=yes&alerts=yes\n"
        const response = await axios.get(url)
        setWeather(response.data)
        console.log('weather',weather)
    }

  return (
      <div className="flex content-center py-5  text-white  justify-center h-screen oveflow-auto ">
          <div className="container h-auto xl:px-36">
              <Header city={city} changeCity={value=> setCity(value)}/>
              <Base city={city} weather={weather} todayWeather={todayWeather}/>
              <div className="grid grid-cols-6 gap-2 ">
                    <div className="col-span-4" >
                        <div className="flex flex-col">
                            <Hourly weather={weather} todayWeather={todayWeather} />
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <div className="col-span-2" >
                                <Weekly weather={weather}/>
                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="col-span-1">
                                        <div className=" flex flex-col">
                                            <div className="card">
                                                <UVIndex weather={weather} todayWeather={todayWeather}/>


                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-span-1">
                                        <div className="flex flex-col">
                                            <div className="card">
                                                <Sunrise weather={weather}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <div className="col-span-2">
                                        <div className=" flex flex-col">
                                            <div className="card">
                                                <Wind weather={weather} todayWeather={todayWeather}/>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2" >
                        <div className="flex flex-col">
                            <div className="card">

                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <div className="col-span-1">
                                <div className=" flex flex-col">
                                        <div className="card">
                                            <Moon weather={weather} todayWeather={todayWeather}/>
                                        </div>
                                    </div>
                                </div>

                        </div>
                    </div>
              </div>
              <footer className="my-3 p-4">
                    Created by Erdoğan Yeşil
              </footer>
          </div>
      </div>
  );
}

export default App;
