import React from 'react';

const ImageCard = ({src, alt}) => {
    return (
        <div
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <img src={src} alt={alt} className="w-full h-auto"/>
        </div>
    );
};

export default ImageCard;
