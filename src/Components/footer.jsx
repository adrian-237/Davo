import React, { useState } from 'react';
import Logo from '../assets/LOGO.svg';
import bus from '../assets/autobus.svg';
import Location from '../assets/location.jsx';
import Telegram from '../assets/telegram.jsx';
import Whatsapp from '../assets/whatsapp.jsx';
import Viber from '../assets/viber.jsx';
import Facebook from '../assets/facebook.jsx';
import Instagram from '../assets/instagram.jsx';
import Tiktok from '../assets/tiktok.jsx';
import arrow from '../assets/Component 2.svg';
import visa from '../assets/visa.svg';
import mastercard from '../assets/mastercard.svg';
import maestro from '../assets/maestro.svg';
import amex from '../assets/american express.svg';

export default function Footer() {
    const [showTickets, setShowTickets] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    return (
        <footer className="text-white w-full font-primary pt-96 md:pt-52 relative">
            <div className="grid grid-cols-3 grid-rows-5 md:grid-rows-4 gap-4 bg-primary px-[10%]">
                <div className="max-sm:col-span-full row-span-3 md:row-span-2 flex justify-center items-center left-0 max-md:my-24">
                    <img src={bus} alt="Bus" className="absolute md:left-0 w-full md:w-[calc(80%/3+10%+6px)] h-6/10 object-cover object-right" />
                </div>

                <div className="max-md:pb-12 max-sm:col-span-full col-span-3 md:col-span-2  text-center pb-10 lg:text-left lg:flex lg:justify-between lg:items-center px-5 absolute right-0 -top-2">
                    <div className="">
                        <img src={Logo} alt="Logo" className="mx-auto lg:mx-0 mb-4 lg:mb-0" />
                        <div className="flex items-center gap-8 max-md:flex-col ">
                            <p className="text-lg text-gray-900">
                                Cu noi puteți ajunge în Germania, Olanda, Anglia, Belgia, și multe alte țări.
                            </p>
                            <button className="bg-red-600 text-white font-bold px-6 py-3 rounded-md mt-5 w-50">
                                CONTACTEAZĂ-NE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="max-sm:col-span-full col-span-2 col-start-2 md:row-start-2 flex justify-between text-white *:max-md:hidden">
                    <div>
                        <p className="font-bold max-md:border-b">Rezervă bilet</p>
                        <p className="text-white/50">Transport Moldova - Anglia</p>
                        <p className="text-white/50">Transport Moldova - Germania</p>
                        <p className="text-white/50">Transport Moldova - Olanda</p>
                        <p className="text-white/50">Transport Moldova - Belgia</p>
                    </div>
                    <div>
                        <p className="font-bold">Serviciile oferite</p>
                        <p className="text-white/50">Transport de persoane</p>
                        <p className="text-white/50">Transport colete</p>
                        <p className="text-white/50">Transfer Chișinău - Iași aeroport</p>
                    </div>
                    <div>
                        <p className="font-bold">Informații utile</p>
                        <p className="text-white/50">DAVO Social Media</p>
                        <p className="text-white/50">Recenzii</p>
                        <p className="text-white/50">Contacte</p>
                    </div>
                </div>

                <div className="max-sm:col-span-full col-span-3 md:row-start-3 text-center lg:text-left text-sm">
                    <div className="flex justify-end">
                        <p className="font-medium">+373 79 000 000</p>
                        <p>info@davo.md</p>
                    </div>
                </div>


                <div className="max-sm:col-span-full col-start-2 md:row-start-4 flex justify-center space-x-4">
                    <Location color="white" />
                    <Telegram color="white" />
                    <Whatsapp color="white" />
                    <Viber color="white" />
                    <Facebook color="white" />
                    <Instagram color="white" />
                    <Tiktok color="white" />
                </div>

                {/* Payment Methods */}
                <div className="max-sm:col-span-full col-start-3 md:row-start-4 flex justify-end space-x-4">
                    <img src={visa} alt="Visa" className="h-8" />
                    <img src={mastercard} alt="Mastercard" className="h-8" />
                    <img src={maestro} alt="Maestro" className="h-8" />
                    <img src={amex} alt="Amex" className="h-8" />
                </div>

                {/* Footer Credits */}
                <div className="max-sm:col-span-full col-start-1 md:row-start-4 text-center text-xs text-white/50">
                    © 2024 DAVO GROUP SRL.  I  Powered by DOT
                </div>
            </div>
        </footer>
    );
}
