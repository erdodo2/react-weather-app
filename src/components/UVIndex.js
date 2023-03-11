import React from "react";
import {WiDaySunny} from "react-icons/wi";

export default function UVIndex({weather, todayWeather}) {
    return (
        <div className="flex flex-col">
            <label className="border-b flex items-center pb-2 border-gray-500" htmlFor=""><WiDaySunny className="text-2xl mr-1"/> <label>UV İndeksi</label></label>
            <h1 className="text-4xl">0</h1>
            <h1 className="text-xl">Düşük</h1>
            <div className="w-full bg-gray-200 rounded-full h-1.5 my-2 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: "25%"}}></div>
            </div>
            <span className="text-xs">Günün geri kalanında düşük.</span>
        </div>
    )
}