import React from 'react';
import ImageCard from './ImageCard';

const images = [
    {src: 'https://source.unsplash.com/random/800x600?colorful,nature', alt: 'A colorful nature photograph'},
    {src: 'https://source.unsplash.com/random/800x600?abstract,art', alt: 'An abstract art photograph'},
    {src: 'https://source.unsplash.com/random/800x600?vibrant,cityscape', alt: 'A vibrant cityscape'},
    {src: 'https://source.unsplash.com/random/800x600?galaxy,stars', alt: 'A galaxy photograph'},
    {src: 'https://source.unsplash.com/random/800x600?underwater,coral', alt: 'An underwater coral photograph'},
    {src: 'https://source.unsplash.com/random/800x600?tropical,flowers', alt: 'A tropical flowers photograph'},
];

const Gallery = ({onImageClick}) => {
    return (
        <section id="gallery" className="py-12 bg-cyan-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-cyan-800">Portfolio</h2>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {images.map((image, index) => (
                        <ImageCard key={index} src={image.src} alt={image.alt} onClick={() => onImageClick(image)}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
