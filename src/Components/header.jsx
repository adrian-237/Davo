import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/LOGO.svg';
import menuIcon from '../assets/iconamoon_menu-burger-horizontal-bold.png';
import arrow from '../assets/Component 1.svg';
import location from '../assets/location.svg';
import telegram from '../assets/telegram.svg';
import whatsapp from '../assets/whatsapp.svg';
import viber from '../assets/viber.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import tiktok from '../assets/tiktok.svg';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-[90%] p-5 mx-auto flex flex-col md:flex-col-reverse gap-2 font-primary text-primary">
            <div className="flex justify-between items-center">
                <img src={logo} alt="Logo" className="w-[117px]" />
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    <img src={menuIcon} alt="Menu" className="w-[41px]" />
                </button>
                <div className="hidden md:flex gap-5 font-normal">
                    <Link to="/booking" className="hover:underline">Rezervă Bilet</Link>
                    <Link to="/" className="hover:underline">Destinații</Link>
                    <Link to="/" className="hover:underline">Colet la cheie</Link>
                    <Link to="/services" className="hover:underline">Servicii oferite</Link>
                    <Link to="/" className="hover:underline">Informații utile</Link>
                    <Link to="/" className="hover:underline">Contacte</Link>
                </div>
            </div>

            <div className={`md:hidden flex flex-col gap-4 p-5 bg-gray-100 rounded-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col gap-2">
                    <Link to="/booking" className="hover:underline">Rezervă Bilet</Link>
                    <Link to="/" className="hover:underline">Destinații</Link>
                    <Link to="/" className="hover:underline">Colet la cheie</Link>
                    <Link to="/services" className="hover:underline">Servicii oferite</Link>
                    <Link to="/" className="hover:underline">Informații utile</Link>
                    <Link to="/" className="hover:underline">Contacte</Link>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="text-lg font-medium text-center">+373 79 000 000</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center">
                            EN <img src={arrow} alt="Lang" className="w-[28px] ml-2" />
                        </div>
                        <img src={location} alt="Location" className="w-6" />
                        <img src={telegram} alt="Telegram" className="w-6" />
                        <img src={whatsapp} alt="WhatsApp" className="w-6" />
                        <img src={viber} alt="Viber" className="w-6" />
                        <img src={facebook} alt="Facebook" className="w-6" />
                        <img src={instagram} alt="Instagram" className="w-6" />
                        <img src={tiktok} alt="TikTok" className="w-6" />
                    </div>
                </div>
            </div>

            <div className="hidden md:flex justify-between">
                <div className="text-lg font-medium">+373 79 000 000</div>
                <div className="flex gap-[35px] items-center">
                    <div className="flex items-center">
                        EN <img src={arrow} alt="Lang" className="w-[28px] ml-2" />
                    </div>
                    <img src={location} alt="Location" />
                    <img src={telegram} alt="Telegram" />
                    <img src={whatsapp} alt="WhatsApp" />
                    <img src={viber} alt="Viber" />
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={tiktok} alt="TikTok" />
                </div>
            </div>
        </nav>
    );
}
