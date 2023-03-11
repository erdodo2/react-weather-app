import React,{useEffect} from "react";
import {WiSunrise} from "react-icons/wi";
import moment from "moment/moment";

export default function Sunrise({weather}) {
    const [sunrise,setSunrise] = React.useState("")
    const [remainder,setRemainder] = React.useState("")
    const [remainderProgress, setRemainderProgress] = React.useState("0")
    const [sunset,setSunset] = React.useState("")
    useEffect(()=>{
        setSunrise(moment(weather.forecast.forecastday[0].date+' '+weather.forecast.forecastday[0].astro.sunrise).format('HH:mm'))
        setRemainder(moment(weather.forecast.forecastday[0].date+' '+weather.forecast.forecastday[0].astro.sunrise).add(1, 'd').fromNow())
        setRemainderProgress(
            moment(weather.forecast.forecastday[0].date+' '+weather.forecast.forecastday[0].astro.sunrise)
                .add(1, 'd')
                .fromNow(true)
                .split(" ")[0]
        )
        setSunset(moment(weather.forecast.forecastday[0].date+' '+weather.forecast.forecastday[0].astro.sunset).format('HH:mm'))
    },[weather])
    return (
        <div className="flex flex-col">
            <div className="border-b flex items-center pb-2 border-gray-500" htmlFor="">
                <WiSunrise className="text-2xl mr-1"/> <label>Günaydın {}</label>
            </div>


            <h1 className="text-4xl">{sunrise}</h1>

            <div className="w-full bg-gray-200 rounded-full h-1.5 my-2 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: (100/24*remainderProgress)+ "%"}}></div>
            </div>
            <span className="text-xs border-b  pb-2 border-gray-500">{remainder}.</span>
            <div className="flex items-center justify-between mt-2">
                <span className="text-xs">Gün batımı</span>
                <h1 className="text-xl">{sunset}</h1>
            </div>


        </div>
    )
}