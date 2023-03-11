import logo from "../logo.svg";

import React from "react";

export default function Header({city , changeCity}) {
    const [search, setSearch] = React.useState(city);
    const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png";
    const erdogan = "/Erdogan.png"
    return(
        <header className="flex justify-between">
            <div className="flex items-center">
                <a href="https://erdoganyesil.com.tr" ><img src={erdogan} className="h-10" alt="logo"  /></a>
                <img src={logo} className="h-10" alt="logo"  />
                <img src={tailwind} className="h-10" alt="logo"  />

                </div>
            <input type="text"
                   value={search}
                   onInput={e => setSearch(e.target.value)}
                   onKeyPress={e => e.key === "Enter" ? changeCity(search) : null}
                   className=" rounded bg-gray-600 text-2xl p-2"/>
        </header>
    )
}