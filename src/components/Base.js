import React from "react";

export default function Header({city,weather,todayWeather}) {
    return(
        <div className="flex flex-col align-center w-full text-center justify-center my-16">
            <h1 className="text-2xl">{city}</h1>
            <h1 className="text-7xl font-extralight">&nbsp;{weather.current.temp_c}°</h1>
            <h1>{weather.current.condition.text}</h1>
            <h1>D:{todayWeather.day.mintemp_c}°  Y:{todayWeather.day.maxtemp_c}°</h1>
        </div>
    )

}