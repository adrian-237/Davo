import React from "react";
import Header from '../Components/header.jsx';
import TransportDestination from "../Components/transport-destination.jsx";

import TransportOptions from "../Components/transport-options.jsx";
import SocialMediaCard from "../Components/social-media-card.jsx";
import Footer from "../Components/footer.jsx";

export default function Services() {
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

    const transportServices = [
        {
        id: 1,
        title: 'Transport de Persoane',
        description: 'Davo Group - Lider în transport internațional de pasageri și colete. Alegerea ta pentru călători sigure și livrări punctuale în Belgia, Germania, Olanda, Anglia și Moldova.',
        image: './Services/image1.png',
    },
        {
            id: 2,
            title: 'Transport de colete',
            description: 'Davo Group - Lider în transport internațional de pasageri și colete. Alegerea ta pentru călători sigure și livrări punctuale în Belgia, Germania, Olanda, Anglia și Moldova.',
            image: './Services/image2.png',
        },
        {
            id: 3,
            title: 'Transport de colete la cheie',
            description: 'Davo Group - Lider în transport internațional de pasageri și colete. Alegerea ta pentru călători sigure și livrări punctuale în Belgia, Germania, Olanda, Anglia și Moldova.',
            image: './Services/image3.png',
        }
    ];

    const socialCards = [
        {
            id: 1,
            image: './Social/stori1.png'
        },
        {
            id: 2,
            image: './Social/stori2.png'
        },
        {
            id: 3,
            image: './Social/stori3.png'
        }
    ]

    return (
        <>
            <Header />
            <section className="w-[90%] mx-auto">
                <div className="py-10 text-center font-body font-bold text-5xl lg:text-6xl">
                    <h1 className="text-primary">CĂLĂTORIA TA ÎNCEPE CU UN CLICK. <br /> <span className="text-accent">REZERVĂ ACUM!</span></h1>
                </div>



                <div className="flex gap-[42px] overflow-x-auto scroll-smooth py-20">
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

                {transportServices.map(service => (
                    <TransportOptions
                        key={service.id}
                        id={service.id}
                        image={service.image}
                        title={service.title}
                        description={service.description}
                    />
                ))}
                <div className="Social py-20">
                <h2 className="font-body font-bold uppercase text-4xl">Social davo group</h2>
                <div className="flex gap-4 overflow-x-auto py-4">
                    {socialCards.map(card => (
                        <SocialMediaCard
                            key={card.id}
                            image={card.image}
                        />
                    ))}
                </div>
            </div>

            </section>
            <Footer/>

        </>
    );
}
