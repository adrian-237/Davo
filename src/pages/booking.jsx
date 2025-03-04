import React from 'react';
import Header from '../Components/header.jsx';
import TransportDestination from "../Components/transport-destination.jsx";
import Footer from "../Components/footer.jsx";

export default function Booking() {

    const transportData = [
        {
            country: "Anglia",
            image: "/Countries/Anglia.png",
            destinations: [
                "Londra", "Manchester", "Birmingham", "Liverpool", "Cambridge",
                "Oxford", "Bristol", "Leeds", "Glasgow", "Edinburgh", "Nottingham", "Sheffield"
            ]
        },
        {
            country: "Germania",
            image: "/Countries/Germania.png",
            destinations: [
                "Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne", "Stuttgart",
                "Düsseldorf", "Dortmund", "Leipzig", "Hannover", "Nuremberg", "Bremen"
            ]
        },
        {
            country: "Belgia",
            image: "/Countries/Belgia.png",
            destinations: [
                "Bruxelles", "Antwerpen", "Gent", "Liège", "Brugge", "Leuven",
                "Namur", "Mons", "Charleroi", "Kortrijk", "Oostende", "Mechelen"
            ]
        },
        {
            country: "Olanda",
            image: "/Countries/Olanda.png",
            destinations: [
                "Amsterdam", "Rotterdam", "The Hague", "Utrecht", "Eindhoven",
                "Groningen", "Maastricht", "Arnhem", "Leiden", "Delft", "Haarlem", "Almere"
            ]
        },
        {
            country: "Luxemburg",
            image: "/Countries/Luxembourg.png",
            destinations: [
                "Luxembourg City", "Ettelbruck", "Differdange", "Ettelbruck",
                "Ettelbruck", "Ettelbruck", "Ettelbruck", "Ettelbruck", "Ettelbruck"
            ]
        }
    ];

    return (
        <div className={"Booking"}>
            <Header />
            <section className="w-[90%] mx-auto">
                <div className="py-10 text-center font-body font-bold text-5xl lg:text-6xl">
                    <h1 className="text-primary">CĂLĂTORIA TA ÎNCEPE CU UN CLICK. <br /> <span className="text-accent">REZERVĂ ACUM!</span></h1>
                </div>



                <div className="flex gap-[42px] overflow-x-auto scroll-smooth py-10">
                    {transportData.map((data, index) => (
                        <div className="flex-shrink-0 w-[300px]">
                            <TransportDestination
                                key={index}
                                country={data.country}
                                image={data.image}
                                destinations={data.destinations}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
}
