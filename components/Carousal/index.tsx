'use client';
import Link from "next/link";


import { useState, useEffect } from 'react';
import Image from 'next/image';


const images = [
    '/images/carousal/pexels-akos-szabo-145938-440731.jpg',
    'https://images.pexels.com/photos/30840677/pexels-photo-30840677/free-photo-of-scenic-seascape-with-rugged-rock-formations.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    '/docs/images/carousel/carousel-3.svg',
    '/images/carousal/pexels-akos-szabo-145938-440731.jpg',
];


export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full">
            <div className="relative h-100 overflow-hidden rounded-lg md:h-96">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image className="h-full" src={src} alt={`Slide ${index + 1}`} layout="fill" objectFit="cover" />
                    </div>
                ))}
            </div>
            {/* Slider Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
            {/* Controls */}
            <button onClick={prevSlide} className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4">
                <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                    &#8249;
                </span>
            </button>
            <button onClick={nextSlide} className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4">
                <span className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center">
                    &#8250;
                </span>
            </button>
        </div>
    );
}
