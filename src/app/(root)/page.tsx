"use client"

import DestinationSlider from "@/components/destinationCarousal/DestinationSlider";
import TestimonialCards from "@/components/testimonialCards/TestimonialCards";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef  } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  const target1 = 5000;
  const target2 = 95;
  const target3 = 30;
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      const easeOutQuad = (t: number): number => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      setCount1(Math.floor(easedProgress * target1));
      setCount2(Math.floor(easedProgress * target2));
      setCount3(Math.floor(easedProgress * target3));
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount1(target1);
        setCount2(target2);
        setCount3(target3);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isVisible]);

  const faqs = [
    {
      title: "How do I apply for a study abroad program?",
      answer: "Answer for How do I apply for a study abroad program"
    },
    {
      title: "What if my visa gets rejected?",
      answer: "Answer for What if my visa gets rejected?"
    },
    {
      title: "Are scholarships available?",
      answer: "Answer for Are scholarships available?"
    },
    {
      title: "How much does it cost to study abroad?",
      answer: "Answer for How much does it cost to study abroad?"
    },
    {
      title: "Will I get support after I arrive?",
      answer: "Answer for Will I get support after I arrive?"
    },
  ]

  const [activeFaq, setActiveFaq] = useState(-1)
  const companyLogos = [
    '/images/companies/company1.png',
    '/images/companies/company2.png',
    '/images/companies/company3.png',
    '/images/companies/company4.png',
    '/images/companies/company5.png',
    '/images/companies/company6.png',
    '/images/companies/company7.png',
    '/images/companies/company1.png',
    '/images/companies/company2.png',
    '/images/companies/company3.png',
    '/images/companies/company4.png',
    '/images/companies/company5.png',
    '/images/companies/company6.png',
    '/images/companies/company7.png',
  ];
  
  return (
    <React.Fragment>
      <section className="mb-40">
        <div className = "container home-hero-section">
          <div className = "hero-title">
            <h1 className = "mb-24">Why Just Dream? Study & succeed Now!</h1>
            <p className = "mb-40">From dreaming to doing- your global education journey starts here! Study beyond borders, learn beyond limits</p>
            <button className="mb-24">Book free Consultation</button>
            <div className = "d-flex">
              <Image src = "/images/icons/students-stack.png" height = {36} width = {68} alt = "students stack"/>
              <p>
                <span className = "highlight1">14,000+</span> Students Trust Us
              </p>
            </div>
          </div>
          <div className="hero-img-container">
            <Image className="hero-img" src = "/images/home-hero.jpg" width={600} height={662} alt = "PEF education students"/>
          </div>
        </div>
        <div className="container"  ref={sectionRef}>
          <div className="relative">
            <div className = "d-flex justify-content-between flex-wrap gap-10">
              <div className = "trustedby-text">
                <h2>Trusted By </h2>
                <h2 className="highlight2">Students Worldwide</h2>
              </div>
              <div>
                <h2>{count1}+</h2>
                <p>Students Worldwide</p>
              </div>
              <div>
                <h2>{count2}%</h2>
                <p>Visa Success Rate</p>
              </div>
              <div>
                <h2>{count3}+</h2>
                <p>University partnership</p>
              </div>
            </div>
            <Image src = "/images/deg_cap.png" className = "deg-cap" height={157} width={285} alt = "cap image" />
          </div>
        </div>
      </section>
      <section id = "home-mbbs">
        <div className="relative">
          <div className = "container">
            <div className = "d-flex justify-content-center mb-24 gap-10 flex-wrap">
              <h2>Looking for the Best</h2>
              <Image src = "/images/icons/mbbs_icon.png" height= {56} width = {100} alt = "PEF education MBBS"/>
              <h2><span className = "highlight2">MBBS</span> Options?</h2>
            </div>
            <p className = "mb-24">Find the perfect MBBS program in India or abroad with expert support, smooth admissions, and scholarship assistance tailored for you.</p>
            <div className="text-center">
              <button className = "button2">Enquire</button>
            </div>
          </div>
          <Image src = "/images/cloud_left.png" className = "cloud-left" height={100} width={100} alt = "cloud left" />
          <Image src = "/images/cloud_right.png" className = "cloud-right" height={100} width={100} alt = "cloud left" />
        </div>
      </section>

      <section id = "home-features" className="mb-80">
        <div className="container">
          <div className = "features-cards">
            <div className = "features-card">
              <div className="features-icon-container">
                <Image src = "/images/icons/career.png" height={48} width={48} alt = "career icon" className="features-icon"/>
              </div>
              <h3 className = "h4">Top Universities</h3>
              <p>Learn from the best medical schools, globally recognized and trusted</p>
            </div>
            <div className = "features-card">
              <div className="features-icon-container">
                <Image src = "/images/icons/form.png" height={48} width={48} alt = "career icon" className="features-icon"/>
              </div>
              <h3 className = "h4">Seamless Admissions</h3>
              <p>We simplify your MBBS journey with expert guidance and easy applications</p>
            </div>
            <div className = "features-card">
              <div className="features-icon-container">
                <Image src = "/images/icons/certificate.png" height={48} width={48} alt = "career icon" className="features-icon"/>
              </div>
              <h3 className = "h4">Scholarship Support</h3>
              <p>Explore financial aid options to make your medical education stress-free</p>
            </div>
          </div>
        </div>
      </section>
      <section id = "home-journey">
        <div className="container">
          <div className = "d-flex journey-container">
            <div>
              <h2 className = "mb-40">Supporting Your <span  className = "highlight2">Journey</span> Every Step</h2>
              <p>At PEF Education, our mission is to compassionately tailor the educational journey for each student, irrespective of their chosen direction, academic pursuits, or desired institution. With a team of seasoned professionals at the helm, we provide personalized guidance and unwavering support throughout the entire application process. Our comprehensive suite of services spans from empathetic counseling and meticulous course selection to seamless admissions</p>
            </div>
            <div>
              <Image src = "/images/journey.png" height = {310} width = {410} alt = "journey image" />
            </div>
          </div>
        </div>
      </section>
      <div style = {{width: "100%", overflow: "hidden"}}>
        <DestinationSlider />
      </div>
      <section className = "mb-80" id = "about-us">
        <div className="container">
          <div className = "home-programs-container">
            <div className = "mb-24">
              <p className = "mb-16">Our Programs</p>
              <h2>Find the<br/>
              <span className="highlight1">Right Program</span> for You</h2>
            </div>
            <ul className="home-programs">
              <li>
                <Link href = "/programs" className="programs-li-title h4">Undergraduate Programs 
                  <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                </Link>
                <p>Earn your degree from top universities in <span className = "bold">25+ countries</span> with expert guidance, career-focused learning, and global connections.</p>
              </li>
              <li>
                <Link href = "/programs" className="programs-li-title h4 mb-20">Graduate Programs 
                  <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                </Link>
                <p>Pursue a master&apos;s degree from leading universities in <span className = "bold">20+ countries</span>. We handle the admissions, provide expert career advice, and connect you with industry opportunities for a successful future.</p>
              </li>
              <li>
                <Link href = "/programs" className="programs-li-title h4 mb-20">Exchange Programs 
                  <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                </Link>
                <p>Study abroad in <span className = "bold">15+ countries</span> with complete support on visas, housing, and credits for a smooth experience.</p>
              </li>
              <li>
                <Link href = "/programs" className="programs-li-title h4 mb-20">Language Programs 
                  <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                </Link>
                <p>Master new languages in <span className = "bold">10+ countries</span> through immersive learning, expert guidance, and real-world communication practice.</p>
              </li>
              <li>
                <Link href = "/programs" className="programs-li-title h4 mb-20">Internship Programs 
                  <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                </Link>
                <p>Programs that blend academic learning with hands-on work experience for a career-ready education.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mb-80" id = "services">
        <div className="container">
          <div className = "home-services-container">
            <div className="home-services-title">
              <p className = "mb-16">Our Services</p>
              <h2 className="mb-24">
                Get <span className="highlight1">Complete Support </span><br/>
                For Studying Abroad
              </h2>
              <div>
                <Image src = "/images/services.png" height = {396} width = {396} alt = "services image"/>
              </div>
            </div>
            <div className="mb-24">
              <div>
                <p className = "show-lg">Our Services</p>
              </div>
              <h2 className = "show-lg">Get <span className="highlight1">Complete Support </span><br/>
              For Studying Abroad</h2>
              <ul className="home-services">
                <li>
                  <Link href = "#" className="programs-li-title h4">Expert Language Training 
                    <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                  </Link>
                  <p>Learn IELTS, German, and French with professional training to enhance your study and career opportunities abroad.</p>
                </li>
                <li>
                  <Link href = "#" className="programs-li-title h4 mb-20">Hassle-Free University Admissions 
                    <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                  </Link>
                  <p>Get step-by-step guidance for domestic and international admissions, ensuring a smooth and successful application process.</p>
                </li>
                <li>
                  <Link href = "#" className="programs-li-title h4 mb-20">Career Guidance with AI Assessment
                    <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                  </Link>
                  <p>Find the right career path with AI-driven assessments and psychometric tests for informed academic and professional decisions.</p>
                </li>
                <li>
                  <Link href = "#" className="programs-li-title h4 mb-20">Global Vocational & Pathway Programs
                    <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                  </Link>
                  <p>Gain practical skills through vocational and pathway programs in the USA, Spain, Ireland, and Europe.</p>
                </li>
                <li>
                  <Link href = "#" className="programs-li-title h4 mb-20">Scholarship & Loan Assistance
                    <Image src = "/images/icons/redirect.png" height = {14} width = {14} alt="redirect icon" />
                  </Link>
                  <p>Get expert support for scholarships and education loans to make studying abroad more affordable and accessible.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id = "universities" className = "mb-80">
        <div className="container">
          <h2 className = "text-center mb-24">Partnered with 30+ Top Universities</h2>
          <p className = "text-center mb-40">We&apos;ve partnered with 30+ top universities to help you secure a successful future with global opportunities.</p>
        </div>
          <div className="d-flex">
          <div className="marqueeContainer">
            <div className="marquee">
              {companyLogos.map((logo, index) => (
                <div key={`logo-${index}`} className="logoWrapper">
                  <Image 
                    src={logo} 
                    height={50} 
                    width={50} 
                    alt={`Company logo ${index + 1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
          </div>
      </section>
      <section className="mb-80">
        <div className = "container">
          <h2 className = "text-center mb-40">Start Your Journey in <span className = "highlight1">3 Easy Steps</span></h2>
          <div className = "journey-steps-container mb-80">
            <div className = "journey-item">
              <h1 className="text-center">01</h1>
              <h4 className="highlight1 text-center">Expert Consultation</h4>
              <p className = "text-center">Our experienced counselors will listen to your goals and guide you toward the best study options.</p>
            </div>
            <div className = "journey-item">
              <h1 className="text-center">02</h1>
              <h4 className="highlight1 text-center">Hassle-Free Application</h4>
              <p className = "text-center">We&apos;ll handle the paperwork, applications, and follow-ups — making the process smooth and stress-free.</p>
            </div>
            <div className = "journey-item">
              <h1 className="text-center">03</h1>
              <h4 className="highlight1 text-center">Visa & Departure Support</h4>
              <p className = "text-center">From visa approval to travel and accommodation, we&apos;ll ensure you&apos;re fully prepared for your new journey.</p>
            </div>
          </div>
          <div className = "text-center">
            <button className = "button2">Start Now</button>
          </div>
        </div>
      </section>
      <div className = "mb-80">
        <TestimonialCards />
      </div>
      <section className = "mb-80">
        <div className="container">
          <div className = "faq-container">
            <div className = "faq-title mb-40">
              <h2 className = "mb-20">Have Questions?<br />
              We&apos;ve Got <span className = "highlight1">Answers</span></h2>
              <p className="mb-40">Get clear, honest answers to all your study abroad concerns — no confusion, just solutions.</p>
              <button className = "button2">Ask More</button>
            </div>
            <ul className = "faqs">
              {faqs.map((faq, index) => {
                return(
                  <li className = "mb-20" key = {index}>
                    <div className = "mb-20 d-flex justify-content-between">
                      <p className="bold">
                        {faq.title}
                      </p>
                      <Image src = "/images/icons/plus.png" alt = "plus icon" height={20} width={20} className = {`${activeFaq === index && "rotate-45"}`} onClick = {()=>setActiveFaq(activeFaq === index?-1:index)}/>
                    </div>
                    {activeFaq === index && <p className="mb-20">{faq.answer}</p>}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="experience">
          <h1 className="mb-24">
            Looking for the Best <span>Study Abroad </span><br />
            Experience?
          </h1>
          <button>Book Consultation</button>
        </div>
      </section>
    </React.Fragment>
  );
}
