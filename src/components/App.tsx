import {useState} from 'react';
import Header from './Header';
import Hero from './Hero';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import Lightbox from './Lightbox';

function App() {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

    const handleImageClick = (image: { src: string, alt: string }) => {
        setSelectedImage(image);
    };

    const handleCloseLightbox = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <Gallery onImageClick={handleImageClick}/>
                <Contact/>
            </main>
            <Footer/>
            {selectedImage && (
                <Lightbox src={selectedImage.src} alt={selectedImage.alt} onClose={handleCloseLightbox}/>
            )}
        </>
    );
}

export default App;
