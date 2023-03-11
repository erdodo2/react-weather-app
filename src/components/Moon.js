import React,{useEffect} from "react";
import {WiSunrise
    ,WiMoonAltWaxingCrescent2,
    WiMoonAltNew,WiMoonAltWaxingGibbous1,
    WiMoonAltWaxingGibbous4,WiMoonAltFull,
    WiMoonAltWaningGibbous2,WiMoonAltWaningCrescent1,
    WiMoonAltWaningCrescent3} from "react-icons/wi";
import moment from "moment/moment";

export default function Moon({weather,todayWeather}) {
    const [moonPhase,setMoonPhase] = React.useState("")
    useEffect(()=>{
        let phase = weather.forecast.forecastday[0].astro.moon_phase
        if(phase === "New Moon"){
            setMoonPhase(WiMoonAltNew)
        }else if(phase === "Waxing Crescent"){
            setMoonPhase(WiMoonAltWaxingCrescent2)
        }else if(phase === "First Quarter"){
            setMoonPhase(WiMoonAltWaxingGibbous1)
        }else if(phase === "Waxing Gibbous"){
            setMoonPhase(WiMoonAltWaxingGibbous4)
        }else if(phase === "Full Moon"){
            setMoonPhase(WiMoonAltFull)
        }else if(phase === "Waning Gibbous"){
            setMoonPhase(WiMoonAltWaningGibbous2)
        }else if(phase === "Last Quarter"){
            setMoonPhase(WiMoonAltWaningCrescent1)
        }else if(phase === "Waning Crescent"){
            setMoonPhase(WiMoonAltWaningCrescent3)

        }
    },[weather])

    return (
        <div className="flex flex-col">
            <div className="border-b flex items-center pb-2 border-gray-500" htmlFor="">
                <WiMoonAltWaxingGibbous1 className="text-2xl"/> <label>Ay</label>
            </div>
            <div className="text-center">
                <div className="text-8xl flex justify-center"><span className="mx-auto">{moonPhase}</span></div>
                <span className="whitespace-nowrap">Ay doğumu: {moment(weather.forecast.forecastday[0].astro.moon_rise).format('HH:mm')}</span>
            </div>


        </div>
    )
}