import React from 'react';
import DestinationIcon from "../assets/ic_round-directions-bus.svg";

export default function TransportDestination({ country, image, destinations }) {
    return (
        <div className="rounded-lg w-[292px]">
            <img src={image} className="w-full h-[159px] object-cover rounded-md" />
            <div className="text-center font-bold uppercase text-base mt-2 text-primary flex justify-between md:text-2xl">{country} <div className="text-base text-[#6985A2] md:hiddne normal-case font-normal">Rezervă Loc</div></div>

            <div className="h-[250px] overflow-y-scroll custom-scrollbar">
                <ul className="list-none text-[#024B93] text-xl mt-2 font-medium">
                    {destinations.map((destination, index) => (
                        <li key={index} className="flex items-center gap-2 py-1">
                            <img src={DestinationIcon} className="w-5 h-5" />
                            {destination}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}