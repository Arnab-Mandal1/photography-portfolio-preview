import React from 'react';

const Lightbox = ({src, alt, onClose}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center" onClick={onClose}>
            <button className="absolute top-4 right-4 text-white text-3xl">&times;</button>
            <div className="max-w-4xl max-h-full p-4">
                <img src={src} alt={alt} className="max-w-full max-h-full"/>
            </div>
        </div>
    );
};

export default Lightbox;
