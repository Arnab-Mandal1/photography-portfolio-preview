import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="h-screen bg-cover bg-center flex items-center justify-center text-white"
                 style={{backgroundImage: "url('https://source.unsplash.com/random/1600x900?colorful,landscape')"}}>
            <div className="text-center bg-black bg-opacity-50 p-8 rounded-lg">
                <h1 className="text-5xl md:text-7xl font-bold">Arnab Mandal</h1>
                <p className="text-lg md:text-2xl mt-4">Capturing Moments, Creating Memories</p>
            </div>
        </section>
    );
};

export default Hero;
