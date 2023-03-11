import React from "react";
import moment from "moment";
import {WiDayFog} from "react-icons/wi";
import {AiOutlineCalendar} from "react-icons/ai";
export default function Weekly({weather}) {
    return (
        <div className="card">
            <div className="border-b pb-2 border-gray-500 flex items-center" htmlFor="">
                <AiOutlineCalendar className="text-xl mr-1"/> <label>10 günlük tahmin</label>
            </div>
            <div className="flex flex-col align-middle">
                {weather.forecast.forecastday.map((item, index) => {
                    return (
                        <>
                            <div className="snap-start h-12 border-b border-gray-700 flex-shrink-0 w-full flex items-center justify-between gap-1 ">
                                <div className="flex items-center ">
                                    <span className="mr-4">{moment(item.date).format("D MMMM ")}</span>
                                    <img src={item.day.condition.icon} className="h-10 w-10" alt=""/>

                                </div>
                                <span className="">D:{item.day.mintemp_c}° / Y:{item.day.maxtemp_c}°</span>

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}