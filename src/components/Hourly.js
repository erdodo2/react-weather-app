import {useEffect,useState} from "react";
import {WiTime4} from "react-icons/wi";
import moment from "moment";


export default function Hourly({weather, todayWeather}) {
    const [hourlyWeather, setHourlyWeather] = useState([])
    useEffect(() => {
        const nowHour = new Date().getHours()
        let hourly = weather.forecast.forecastday[0].hour
        hourly = hourly.slice(nowHour+1)

        if(hourly.length<12){
            let tomorrow = weather.forecast.forecastday[1].hour
            tomorrow = tomorrow.slice(0,12-hourly.length)
            hourly = hourly.concat(tomorrow)

        }
        setHourlyWeather(hourly)
        console.log('hourly',hourlyWeather)
    }, [weather])
    return(
        <div className="card">
            <div className="border-b pb-2 flex items-center border-gray-500" htmlFor="">
                <WiTime4 className="mr-2 text-xl"/>
                <label htmlFor="">Saatlik tahminler</label>
            </div>
            <div className="snap-x mx-auto snap-mandatory flex w-full overflow-auto">
                {hourlyWeather.map((item, index) => {
                    return(
                        <>
                            <div className="snap-start border-r border-gray-600 w-16 flex-shrink-0 h-32 flex flex-col items-center justify-center gap-1 ">
                                <span className="text-xs">{moment(item.time).format(' HH:mm')}</span>
                                <img src={item.condition.icon} className="w-10 h-10" alt=""/>
                                <span className="text-xl font-bold">{item.temp_c}°</span>

                            </div>
                        </>
                    )
                })}

            </div>
        </div>
    )
}