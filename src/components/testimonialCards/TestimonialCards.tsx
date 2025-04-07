"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import "./testimonialCards-min.css"

const TestimonialCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    
const testimonials = [
    {
      id: 1,
      quote:
        "I was nervous about studying abroad, but their team made it feel so easy. They guided me through every step—from choosing the right university to securing my visa. Now, I'm living my dream in Canada!",
      name: "Full Name",
      abroadChoice: "Canada",
      image: "/images/testimonial.png",
    },
    {
      id: 2,
      quote:
        "The application process seemed overwhelming at first, but with their expert guidance, I was able to navigate it smoothly. My experience studying in Australia has been life-changing!",
      name: "Jane Smith",
      abroadChoice: "Australia",
      image: "/images/testimonial.png",
    },
    {
      id: 3,
      quote:
        "Their personalized approach made all the difference. They helped me find a program that perfectly matched my career goals, and now I'm thriving in my studies abroad!",
      name: "John Davis",
      abroadChoice: "United Kingdom",
      image: "/images/testimonial.png",
    },
  ];
  

  const handlePrevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  return (
    <section className="testimonials">
        <div className="section-content" style = {{width: "100%", overflowX: "hidden"}}>
          <div className="testimonial-stack">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${
                  index === activeIndex
                    ? "active"
                    : index === (activeIndex + 1) % testimonials.length
                    ? "next-card"
                    : index === (activeIndex + 2) % testimonials.length
                    ? "third-card"
                    : "hidden-card"
                }`}
              >
                <h2>
                  See How Others Made It <span>Happen</span>
                </h2>
                <div className="testimonial-grid">
                  <div className="quote-container">
                    <button
                      className="nav-button prev"
                      aria-label="Previous testimonial"
                      onClick={handlePrevClick}
                    >
                      ← 
                    </button>
                    <button
                      className="nav-button next"
                      aria-label="Next testimonial"
                      onClick={handleNextClick}
                    >
                      →
                    </button>

                    <div className="quote-content">
                      <blockquote>&quot;{testimonial.quote}&quot;</blockquote>
                    </div>
                  </div>

                  {/* Right side - Profile */}
                  <div className="profile-container">
                    <div className="testimonial-label">
                      <span>Testimonial</span>
                    </div>

                    <div className="profile-content">
                      <div className="profile-image-wrapper">
                        <div className="image-border"></div>
                        <div className="profile-image">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={160}
                            height={160}
                          />
                        </div>
                      </div>

                      <div className="profile-details">
                        <div className="detail-item">
                          <div className="detail-label">Name</div>
                          <div className="detail-value">{testimonial.name}</div>
                        </div>

                        <div className="detail-item">
                          <div className="detail-label">Abroad Choice</div>
                          <div className="detail-value">
                            {testimonial.abroadChoice}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestimonialCards