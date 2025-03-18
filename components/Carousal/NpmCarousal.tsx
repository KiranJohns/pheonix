"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from 'lib/utils'
import Image from 'next/image';

export type CarouselItem = {
  id: string | number;
  image: string;
  title: string;
  description?: string;
};

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  showControls?: boolean;
  showIndicators?: boolean;
  showCaptions?: boolean;
}

const Carousel = ({
  items,
  autoPlay = true,
  interval = 5000,
  className = '',
  showControls = true,
  showIndicators = true,
  showCaptions = true,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('left');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, items.length]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection('right');
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
      setIsAnimating(false);
    }, 500);
  }, [isAnimating, items.length]);

  const goToSlide = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    
    setIsAnimating(true);
    setDirection(index > currentIndex ? 'left' : 'right');
    
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setTouchStart(null);
    }
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    
    if (autoPlay) {
      intervalId = setInterval(goToNext, interval);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [autoPlay, goToNext, interval]);

  return (
    <div 
      className={cn('carousel-container w-full max-w-full aspect-[16/9]', className)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {items.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            'carousel-slide absolute inset-0 w-full h-full opacity-0',
            index === currentIndex && 'opacity-100',
            direction === 'left' && index === currentIndex && 'animate-slide-left',
            direction === 'right' && index === currentIndex && 'animate-slide-right'
          )}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
            width={1000}
            height={500}
          />
          
          {showCaptions && (
            <div className="carousel-caption animate-fade-in">
              {/* <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-primary/80 rounded-md">
                {`${index + 1}/${items.length}`}
              </span> */}
              {/* <h3 className="text-2xl font-medium mb-2">{item.title}</h3> */}
              {item.description && (
                <p className="text-sm text-white/80">{item.description}</p>
              )}
            </div>
          )}
        </div>
      ))}

      {showControls && (
        <>
          <button
            onClick={goToPrev}
            className="carousel-control left-4"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="carousel-control right-4"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {showIndicators && items.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                'carousel-indicator',
                index === currentIndex && 'active'
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;