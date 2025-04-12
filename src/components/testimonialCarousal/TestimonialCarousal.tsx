"use client"

import React, { useState, useRef } from 'react';
import './OverlappingCarousel-min.css';
import Image from 'next/image';

const OverlappingCarousel = () => {

        

  const slidesRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function updateSlides(direction: 'next' | 'prev') {
    if (isAnimating) return;
    
    const slides = slidesRef.current?.querySelectorAll('.carousel-slide');
    if (!slides || !slides.length) {
      return;
    }
    
    setIsAnimating(true);
    const totalSlides = slides.length;
    const prevIndex = currentIndex;
    const outgoingSlide = slides[prevIndex];
    
    const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    
    outgoingSlide?.classList.add(direction === 'next' ? 'transition-out' : 'transition-in');
    
    setTimeout(() => {
      slides.forEach((slide, index) => {
        slide.classList.remove('active', 'next', 'prev', 'transition-out', 'transition-in');
        
        if (index === newIndex) {
          slide.classList.add('active');
        } else if (index === (newIndex + 1) % totalSlides) {
          slide.classList.add('next');
        } else {
          slide.classList.add('prev');
        }
      });
      setIsAnimating(false);
    }, 400);
  }

  return (
    <div>
      <div className="carousel-container">
        <div className="carousel" ref={slidesRef}>
          <div className="carousel-slide active">
            <div className='carousal-slide-outer'>
                <div className="slide-content">
                    <div className="testimonial-title mb-20">
                        <h2 className="slide-header mb-32">See How Others Made It Happen.</h2>
                        <p className="testimonial-para">
                        &quot;I was nervous about studying abroad, but their team made it feel so easy. They guided me through every step — from choosing the right university to securing my visa. Now I&apos;m living my dream in Canada!&quot;
                        </p>
                    </div>
                </div>
                <div className='testimonialBtnGroup hide-lg mb-20'>
                    <button className="carousel-button prev" onClick={() => updateSlides('prev')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                    <button className="carousel-button next" onClick={() => updateSlides('next')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                </div>
                <div className = "p-with-line mb-20">
                    <div className="testimonial-line"></div>
                    <p>Testimonial</p>
                    <div className="testimonial-line"></div>
                </div>
                <div className = "slide-form">
                  <div  className='lg-testimonial-text'>
                    <p>Testimonial</p>
                  </div>
                    <div className="profile-image-wrapper">
                        <div className="image-border"></div>
                            <div className="profile-image">
                                <Image
                                src="/images/testimonial.png"
                                alt="form image"
                                width={160}
                                height={160}
                                />
                            </div>
                    </div>
                    <div className="profile-details">
                        <div className="detail-item">
                          <div className="detail-label">Name</div>
                          <div className="detail-value">Elena Rossi</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">Abroad Choice</div>
                          <div className="detail-value">
                            Canada
                          </div>
                        </div>
                      </div>
                </div>
            </div>
          </div>
          
          <div className="carousel-slide next">
          <div className='carousal-slide-outer'>
                <div className="slide-content">
                    <div className="testimonial-title mb-20">
                        <h2 className="slide-header mb-32">See How Others Made It Happen</h2>
                        <p className="testimonial-para">
                        &quot;The application process seemed overwhelming at first, but with their expert guidance, I was able to navigate it smoothly. My experience studying in Australia has been life-changing!&quot;
                        </p>
                    </div>
                </div>
                <div className='testimonialBtnGroup hide-lg mb-20'>
                    <button className="carousel-button prev" onClick={() => updateSlides('prev')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                    <button className="carousel-button next" onClick={() => updateSlides('next')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                </div>
                <div className = "p-with-line mb-20">
                    <div className="testimonial-line"></div>
                    <p>Testimonial</p>
                    <div className="testimonial-line"></div>
                </div>
                <div className = "slide-form">
                  <div  className='lg-testimonial-text'>
                    <p>Testimonial</p>
                  </div>
                    <div className="profile-image-wrapper">
                        <div className="image-border"></div>
                            <div className="profile-image">
                                <Image
                                src="/images/testimonial.png"
                                alt="form image"
                                width={160}
                                height={160}
                                />
                            </div>
                    </div>
                    <div className="profile-details">
                        <div className="detail-item">
                          <div className="detail-label">Name</div>
                          <div className="detail-value">Jane Smith</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">Abroad Choice</div>
                          <div className="detail-value">
                            Australia
                          </div>
                        </div>
                      </div>
                </div>
            </div>
          </div>
          
          <div className="carousel-slide prev">
          <div className='carousal-slide-outer'>
                <div className="slide-content">
                    <div className="testimonial-title mb-20">
                        <h2 className="slide-header mb-32">See How Others Made It Happen</h2>
                        <p className="testimonial-para">
                        &quot;Their personalized approach made all the difference. They helped me find a program that perfectly matched my career goals, and now I&apos;m thriving in my studies abroad!&quot;
                        </p>
                    </div>
                </div>
                <div className='testimonialBtnGroup hide-lg mb-20'>
                    <button className="carousel-button prev" onClick={() => updateSlides('prev')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                    <button className="carousel-button next" onClick={() => updateSlides('next')}>
                        <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
                    </button>
                </div>
                <div className = "p-with-line mb-20">
                    <div className="testimonial-line"></div>
                    <p>Testimonial</p>
                    <div className="testimonial-line"></div>
                </div>
                <div className = "slide-form">
                  <div  className='lg-testimonial-text'>
                    <p>Testimonial</p>
                  </div>
                    <div className="profile-image-wrapper">
                        <div className="image-border"></div>
                            <div className="profile-image">
                                <Image
                                src="/images/testimonial.png"
                                alt="form image"
                                width={160}
                                height={160}
                                />
                            </div>
                    </div>
                    <div className="profile-details">
                        <div className="detail-item">
                          <div className="detail-label">Name</div>
                          <div className="detail-value">John Davis</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">Abroad Choice</div>
                          <div className="detail-value">
                            United Kingdom
                          </div>
                        </div>
                      </div>
                </div>
            </div>
          </div>
        </div>
        
        <div className="carousel-controls visible-lg">
          <button className="carousel-button prev" onClick={() => updateSlides('prev')}>
            <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
          </button>
          <button className="carousel-button next" onClick={() => updateSlides('next')}>
            <Image src = "/images/icons/leftArrow.png" height={18} width={18} alt = "left arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverlappingCarousel;