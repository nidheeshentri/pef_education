import Image from "next/image";
import React from "react";

const programCategories = [
  {
    title: "Medical & Healthcare",
    image: "/images/medical.png",
  },
  {
    title: "Engineering & Technology",
    image: "/images/engineering.png",
  },
  {
    title: "Business & Management",
    image: "/images/business.png",
  },
  {
    title: "Short-Term & Vocational",
    image: "/images/vocational.png",
  },
];

const academicPrograms = [
  {
    title: "Undergraduate Programs",
    description:
      "Bachelor’s degree programs in various fields, such as business, engineering, arts and sciences.",
    details: [
      "Earn an internationally recognized degree",
      "Study at top universities worldwide",
      "Gain cultural and global exposure",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Graduate Programs",
    description:
      "Master’s and Ph.D. programs in specialized fields such as business, law, medicine, and engineering.",
    details: [
      "Advance your career with a higher degree",
      "Learn from top faculty and industry experts",
      "Research opportunities in leading institutions",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Exchange Programs",
    description:
      "Short-term programs that allow students to study abroad for a semester or academic year.",
    details: [
      "Experience different education systems",
      "Transfer credits to your home university",
      "Cultural exchange and networking",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Language Programs",
    description:
      "Programs that focus on language learning and cultural immersion.",
    details: [
      "Learn from native-speaking instructors",
      "Practice in real-world environments",
      "Experience full cultural immersion",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Internship Programs",
    description: "Programs that combine study with practical work experience.",
    details: [
      "Gain hands-on industry experience",
      "Build your international career network",
      "Boost employability with global exposure",
    ],
    duration: "Duration: 3-4 years",
  },
  {
    title: "Pathway Programs",
    description:
      "Preparatory programs designed to help students transition into undergraduate or graduate studies.",
    details: [
      "Improve academic and language skills",
      "Meet entry requirements for universities",
      "Smooth transition into degree programs",
    ],
    duration: "Duration: 3-4 years",
  },
];

const Programs = () => {
  return (
    <>
      <section id = "programs-hero-section">
        <div className = "container">
          <div className="program-container">
            <div className="program-title">
              <h1 className = "mb-32">
                Your Future, Your <span>Program</span> Find It Today
              </h1>
              <p className="p">
                Find the right program that fits your career goals. Browse through
                our categories and discover opportunities worldwide.
              </p>
            </div>

            <div className="search-container mb-80">
              <input
                type="text"
                placeholder="Find programs by name, country, or category..."
                className="search-input"
              />
              <button>Search</button>
            </div>
            <div className="category-grid mb-64">
              {programCategories.map((category, index) => (
                <div className="category-card" key={index}>
                  <Image
                    className="program-image"
                    src={category.image}
                    alt={category.title}
                    height={100}
                    width={100}
                  />
                  <h5>{category.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section className="mb-80">
          <div className="opportunities-container">
            <div className="opportunity-title mb-24">
              <h2 className="text-center mb-24">
                Explore Your Academic <span>Opportunities</span>
              </h2>
              <p className="text-center">
                Explore diverse academic programs, each designed to enrich your
                education, broaden your perspective, and immerse you in new
                cultures.
              </p>
            </div>
            <div className="programs-cards">
              {academicPrograms.map((program, index) => (
                <div className="program-card" key={index}>
                  <h2 className="h4">{program.title}</h2>
                  <p>{program.description}</p>
                  <div className="duration">
                    <Image src="/images/icons/calender.png" alt="calender" height={18} width={18}/>
                    <span>{program.duration}</span>
                  </div>
                  <ul>
                    {program.details.map((item, idx) => (
                      <div className="duration" key = {idx}>
                        <Image src="/images/icons/Vector.png" alt="tick" height={18} width={18}/>
                        <li key={idx}>{item}</li>
                      </div>
                    ))}
                  </ul>
                  <button>+ More Details</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-80">
            <div className="medical-section-content">
              <div className="section-image">
                <Image
                className="medical-image"
                  src="/images/medical.png"
                  alt="Medical & Healthcare"
                  width={280}
                  height={180}
                />
              </div>
              <div className="section-details">
                <h2>
                  <span>Medical</span> & Health care
                </h2>
                <p className = "mb-24">
                  Looking to build a career in medicine and healthcare? Studying
                  abroad gives you access to top universities, advanced
                  facilities, and global career opportunities.
                </p>
                <h3>We offer programs in :</h3>
                <ul className="program-list">
                  <li>Medicine & Surgery (MBBS, MD, BDS)</li>
                  <li>Nursing (BSc, MSc)</li>
                  <li>Pharmacy (BPharm, PharmD)</li>
                  <li>
                    Allied Health Sciences (Physiotherapy, Radiology, Lab
                    Technology)
                  </li>
                  <li>Public Health & Healthcare Management (MPH, MHA)</li>
                  <li>Public Health & Healthcare Management (MPH, MHA)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-80">
            <div className="medical-section-content">
              <div className="section-details">
                <h2>
                  Engineering & <span className = "highlight2">Technology</span>
                </h2>
                <p className = "mb-24">
                  Want a career in engineering and technology? Study abroad for top universities, advanced labs, and global opportunities!
                </p>
                <h3>We offer programs in :</h3>
                <ul className="program-list">
                  <li>Computer Science & IT</li>
                  <li>Mechanical Engineering</li>
                  <li>Electrical & Electronics Engineering</li>
                  <li>Civil & Structural Engineering</li>
                  <li>Chemical & Environmental Engineering</li>
                  <li>Biomedical Engineering</li>
                </ul>
              </div>
              <div className="section-image mob-order-1">
                <Image
                className="medical-image"
                  src="/images/engineering.png"
                  alt="Medical & Healthcare"
                  width={280}
                  height={180}
                />
              </div>
            </div>
          </div>
          <div className="mb-80">
            <div className="medical-section-content">
              <div className="section-image">
                <Image
                className="medical-image"
                  src="/images/business.png"
                  alt="Medical & Healthcare"
                  width={280}
                  height={180}
                />
              </div>
              <div className="section-details">
                <h2>
                  Business & <span className = "highlight2">Management</span>
                </h2>
                <p className = "mb-24">
                  Want a successful business career? Study abroad for top universities, global networking, and industry-leading education!
                </p>
                <h3>We offer programs in :</h3>
                <ul className="program-list">
                  <li>Business Administration (BBA, MBA)</li>
                  <li>Finance & Accounting</li>
                  <li>Marketing & Digital Marketing</li>
                  <li>Human Resource Management (HRM</li>
                  <li>Entrepreneurship & Innovation</li>
                  <li>Supply Chain & Logistics Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-80">
            <div className="medical-section-content">
              <div className="section-details">
                <h2>
                  <span className = "highlight2">Short-Term</span> & Vocational
                </h2>
                <p className = "mb-24">
                  Want industry-specific skills fast? Short-term programs abroad offer hands-on training and job-ready certifications!
                </p>
                <h3>We offer programs in :</h3>
                <ul className="program-list">
                  <li>Culinary Arts & Hospitality</li>
                  <li>Fashion & Design</li>
                  <li>Film & Media Studies</li>
                  <li>Language & Communication</li>
                  <li>Automotive & Mechanical Trades</li>
                  <li>Health & Wellness</li>
                </ul>
              </div>
              <div className="section-image mob-order-1">
                <Image
                className="medical-image"
                  src="/images/vocational.png"
                  alt="Medical & Healthcare"
                  width={280}
                  height={180}
                />
              </div>
            </div>
          </div>
        </section>
    </div>
    </>
  );
};

export default Programs;
