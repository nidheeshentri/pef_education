"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './DestinationSlider-min.css';
import Link from 'next/link';
const destinations = [
    {
      id: 1,
      name: 'United States',
      image: '/images/US.jpeg',
      flag: '/images/flags/usa_flag.jpeg',
      description: 'Affordable education & multicultural vibe'
    },
    {
      id: 2,
      name: 'Germany',
      image: '/images/Germany.jpeg',
      flag: '/images/flags/germany_flag.png',
      description: 'Laid-back lifestyle & top research facilities'
    },
    {
      id: 3,
      name: 'UK',
      image: '/images/Uk.jpeg',
      flag: '/images/flags/uk_flag.png',
      description: 'Strong research & vibrant student life'
    },
    {
      id: 4,
      name: 'Australia',
      image: '/images/Australia.jpeg',
      flag: '/images/flags/australia_flag.jpeg',
      description: 'Laid-back lifestyle & top research facilities'
    },
    {
      id: 5,
      name: 'Canada',
      image: '/images/Canada.jpeg',
      flag: '/images/flags/canada_flag.png',
      description: 'Laid-back lifestyle & top research facilities'
    },
    
  ];

const DestinationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handlePrev = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? destinations.length - 1 : prevIndex - 1;
      return newIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match this with the CSS transition duration
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === destinations.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 600); // Match this with the CSS transition duration
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  });

  return (
    <section className="destination-slider">
      <div className="container">
        <div className="slider-header">
          <h2 className = "mb-20">Find Your <span className="highlight1">Perfect</span> Destination</h2>
          <p className="subtitle">Consider language, culture, cost of living, climate, and safety to choose the right study abroad destination for you.</p>
        </div>
        
        <div className="slider-container">
          <button 
            className="slider-arrow prev" 
            onClick={handleNext}
            aria-label="Previous destination"
          >
            <Image src = "/images/Left.svg" alt = "Right arrow" height={18} width={18}/>
          </button>
          
          <div className="cards-wrapper">
            {destinations.map((destination, index) => {
              // Calculate position based on activeIndex
              let position = index - activeIndex;
              
              // Handle wrapping for carousel
              if (position < -1) position += destinations.length;
              if (position > 1) position -= destinations.length;
              
              // Assign class based on position
              let cardClass = 'destination-card';
              if (position === -1) cardClass += ' left';
              if (position === 0) cardClass += ' center';
              if (position === 1) cardClass += ' right';
              
              return (
                <div 
                  key={destination.id} 
                  className={cardClass}
                >
                  <div className="card-image">
                    <Image 
                      src={destination.image} 
                      alt={`${destination.name} image`} 
                      width={300} 
                      height={500}
                      className="destination-img"
                    />
                    <div className="flag-country-container">
                      <div className="flag-container">
                        <Image 
                          src={destination.flag} 
                          alt={`${destination.name} flag`} 
                          width={24} 
                          height={24}
                          className="flag-img"
                        />
                      </div>
                      <p className="country-name-overlay">
                        {destination.name}
                      </p>
                    </div>
                  </div>
                  <div className="card-content">
                    <p className="country-desc">{destination.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button 
            className="slider-arrow next" 
            onClick={handlePrev}
            aria-label="Next destination"
          >
            <Image src = "/images/Left.svg" alt = "Right arrow" height={18} width={18}/>
          </button>
        </div>
        
        <div className="slider-action">
          <Link href = "/destination">
            <button className='button2'>Explore All Destinations</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider; 