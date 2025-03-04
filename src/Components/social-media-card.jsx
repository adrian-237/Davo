import React from 'react';
import PlayIcon from '../assets/play.svg';

function SocialMediaCard({ image }) {
    return (
        <div className="relative w-full sm:w-[278px] lg:w-[541px] h-[400px] sm:h-[400px] lg:h-[716px] rounded-[10px]">
            <img
                src={image}
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-opacity-20 flex items-center justify-center">
                <img
                    src={PlayIcon}
                    alt="Play"
                    className="w-16 h-16 opacity-80 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                />
            </div>
        </div>
    );
}

export default SocialMediaCard;
