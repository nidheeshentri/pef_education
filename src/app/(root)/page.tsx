import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="mb-40">
        <div className = "container home-hero-section">
          <div>
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
        <div className="container">
          <div>
            <div className = "d-flex justify-content-between flex-wrap gap-10">
              <div className = "trustedby-text">
                <h2>Trusted By </h2>
                <h2 className="highlight2">Students Worldwide</h2>
              </div>
              <div>
                <h2>5000+</h2>
                <p>Students Worldwide</p>
              </div>
              <div>
                <h2>95%</h2>
                <p>Visa Success Rate</p>
              </div>
              <div>
                <h2>30+</h2>
                <p>University partnership</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id = "home-mbbs">
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
    </div>
  );
}
