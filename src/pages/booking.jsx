import React from 'react';
import Header from '../Components/header.jsx';

export default function Booking() {
    return (
        <div className={"Booking"}>
            <Header />
            <section className="w-[90%] mx-auto">
                <div className="pt-10 text-center font-body font-bold  text-5xl lg:text-6xl">
                    <h1 className="text-primary">CĂLĂTORIA TA ÎNCEPE CU UN CLICK. <br/> <span className="text-accent">REZERVĂ ACUM!</span></h1>

                </div>
            </section>
        </div>
    );
}
