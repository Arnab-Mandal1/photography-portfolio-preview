interface ImageCardProps {
    src: string;
    alt: string;
    onClick: () => void;
}

const ImageCard = ({src, alt, onClick}: ImageCardProps) => {
    return (
        <div
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
            onClick={onClick}
        >
            <img src={src} alt={alt} className="w-full h-auto"/>
        </div>
    );
};

export default ImageCard;
