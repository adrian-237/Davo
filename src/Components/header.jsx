import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/LOGO.svg';
import menuIcon from '../assets/iconamoon_menu-burger-horizontal-bold.png';
import arrow from '../assets/Component 1.svg';
import Location from '../assets/location.jsx';
import Telegram from '../assets/telegram.jsx';
import Whatsapp from '../assets/whatsapp.jsx';
import Viber from '../assets/viber.jsx';
import Facebook from '../assets/facebook.jsx';
import Instagram from '../assets/instagram.jsx';
import Tiktok from '../assets/tiktok.jsx';

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
                    <Link to="/booking" className="hover:text-accent hover:font-medium">Rezervă Bilet</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Destinații</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Colet la cheie</Link>
                    <Link to="/services" className="hover:text-accent hover:font-medium">Servicii oferite</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Informații utile</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Contacte</Link>
                </div>
            </div>

            <div className={`md:hidden flex flex-col gap-4 p-5 bg-gray-100 rounded-lg transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col gap-2">
                    <Link to="/booking" className="hover:text-accent hover:font-medium">Rezervă Bilet</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Destinații</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Colet la cheie</Link>
                    <Link to="/services" className="hover:text-accent hover:font-medium">Servicii oferite</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Informații utile</Link>
                    <Link to="/" className="hover:text-accent hover:font-medium">Contacte</Link>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                    <div className="text-lg font-medium text-center">+373 79 000 000</div>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="">
                            <select>
                                <option value="en">EN</option>
                                <option value="ro">RO</option>
                                <option value="ru">RU</option>
                            </select>
                        </div>
                        <Location color="#042E58" />
                        <Telegram color="#042E58" />
                        <Whatsapp color="#042E58" />
                        <Viber color="#042E58" />
                        <Facebook color="#042E58" />
                        <Instagram color="#042E58" />
                        <Tiktok color="#042E58" />
                    </div>
                </div>
            </div>

            <div className="hidden md:flex justify-between">
                <div className="text-lg font-medium">+373 79 000 000</div>
                <div className="flex gap-[35px] items-center">
                    <div className="flex items-center">
                        <select>
                            <option value="en">EN</option>
                            <option value="ro">RO</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                    <Location color="#042E58" />
                    <Telegram color="#042E58" />
                    <Whatsapp color="#042E58" />
                    <Viber color="#042E58" />
                    <Facebook color="#042E58" />
                    <Instagram color="#042E58" />
                    <Tiktok color="#042E58" />
                </div>
            </div>
        </nav>
    );
}
