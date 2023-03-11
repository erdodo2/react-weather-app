import {WiStrongWind} from "react-icons/wi";
import React from "react";
import '../css/Wind.css'


export default function Header({city,weather,todayWeather}) {
    const [wind,setWind] = React.useState({
        N:{
            degree:0,
            direction:"Kuzey"
        },
        NNE:{
            degree:22.5,
            direction: "Kuzey Kuzeydoğu"
        },
        NE:{
            degree:45,
            direction: "Kuzeydoğu"
        },
        ENE:{
            degree:67.5,
            direction: "Doğu Kuzeydoğu"
        },
        E:{
            degree:90,
            direction: "Doğu"
        },
        ESE:{
            degree:112.5,
            direction:"Doğu Güneydoğu"
        },
        SE:{
            degree:135,
            direction:"Güneydoğu"
        },
        SSE:{
            degree:157.5,
            direction:"Güney Güneydoğu"
        },
        S:{
            degree:180,
            direction:"Güney"

        },
        SSW:{
            degree:202.5,
            direction:"Güney Güneybatı"

        },
        SW:{
            degree:225,
            direction:"Güneybatı"
        },
        WSW:{
            degree:247.5,
            direction:"Batı Güneybatı"
        },
        W:{
            degree:270,
            direction:"Batı"
        },
        WNW:{
            degree:292.5,
            direction:"Batı Kuzeybatı"
        },
        NW:{
            degree:315,
            direction:"Kuzeybatı"
        },
        NNW:{
            degree:337.5,
            direction:"Kuzey Kuzeybatı"

        },
        })
    return(
        <div className="flex flex-col align-center w-full text-center justify-center ">
            <div className="border-b flex items-center pb-2 border-gray-500" htmlFor="">
                <WiStrongWind className="text-2xl mr-1"/> <label>Rüzgar</label>
            </div>
            <div className="flex items-center justify-between pt-3">
                <div>
                    <h1 className="text-3xl font-extralight">{weather.current.wind_kph} km/s</h1>
                    <h1 className="">{wind[weather.current.wind_dir].direction}</h1>
                    <h1 className="whitespace-nowrap">{wind[weather.current.wind_dir].degree}°</h1>
                    <h1 className="whitespace-nowrap">{weather.current.wind_dir}</h1>
                </div>
                <div className="compass-div">
                    <div className="compass">
                        <div className="arrow"></div>
                        <img
                            className="max-h-48"
                            style={{transform: "rotate("+(wind[weather.current.wind_dir].degree *-1)+"deg)"}}
                            src="/compass.png"
                            alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}