import React from 'react';


const Hero = ({ title, subtitle, buttonText }) => {
    return (
        <div className="bg-blue-200 py-20">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center text-gray-800">{title}</h1>
                <p className="text-lg text-center text-gray-600 mt-4">{subtitle}</p>
                <div className="flex justify-center mt-8">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full">{buttonText}</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
