import Image from "next/image";
import Link from "next/link";
import React from "react";

const programCategories = [
  {
    title: "Medical & Healthcare",
    image: "/images/Medical.jpeg",
    link: "/programs/#medical",
  },
  {
    title: "Engineering & Technology",
    image: "/images/engineering.jpeg",
    link: "/programs/#engineering",
  },
  {
    title: "Business & Management",
    image: "/images/business.jpeg",
    link: "/programs/#business",
  },
  {
    title: "Short-Term & Vocational",
    image: "/images/short_term.jpeg",
    link: "/programs/#vocational",
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
    id: "undergraduate"
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
    id: "graduate"
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
    id: "exchange"
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
    id: "language"
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
    id: "internship"
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
                Your Future, Your <span>Program</span> <br />Find It Today
              </h1>
              <p className="p">
                Find the right program that fits your career goals. Browse through
                our categories and discover opportunities worldwide.
              </p>
            </div>

            <div className="search-container mb-80">
              <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'><button className="mb-24">
                Book free Consultation
              </button></Link>
            </div>
            <div className="category-grid mb-64">
              {programCategories.map((category, index) => (
                <div className="category-card" key={index}>
                  <Link href = {category.link}>
                    <Image
                      className="program-image"
                      src={category.image}
                      alt={category.title}
                      height={1000}
                      width={1000}
                    />
                  </Link>
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
                <div className="program-card" key={index} id = {program.id}>
                  <h2 className="h4 mb-20">{program.title}</h2>
                  <p className="program-description mb-20">{program.description}</p>
                  <p className="duration">
                    <Image src="/images/icons/calender.png" alt="calender" height={18} width={18}/>
                    <span>{program.duration}</span>
                  </p>
                  <ul>
                    {program.details.map((item, idx) => (
                      <div className="duration" key = {idx}>
                        <Image src="/images/icons/Vector.png" alt="tick" height={18} width={18}/>
                        <li key={idx}>
                          <p>{item}</p></li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="mb-80" id = "medical">
            <div className="medical-section-content">
              <div className="section-image">
                <Image
                className="medical-image"
                  src="/images/Medical.jpeg"
                  alt="Medical & Healthcare"
                  height={1000}
                    width={1000}
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
                  <li><p>Medicine & Surgery (MBBS, MD, BDS)</p></li>
                  <li><p>Nursing (BSc, MSc)</p></li>
                  <li><p>Pharmacy (BPharm, PharmD)</p></li>
                  <li><p>
                    Allied Health Sciences (Physiotherapy, Radiology, Lab
                    Technology)
                  </p></li>
                  <li><p>Public Health & Healthcare Management (MPH, MHA)</p></li>
                  <li><p>Public Health & Healthcare Management (MPH, MHA)</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-80" id = "engineering">
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
                  <li><p>Computer Science & IT</p></li>
                  <li><p>Mechanical Engineering</p></li>
                  <li><p>Electrical & Electronics Engineering</p></li>
                  <li><p>Civil & Structural Engineering</p></li>
                  <li><p>Chemical & Environmental Engineering</p></li>
                  <li><p>Biomedical Engineering</p></li>
                </ul>
              </div>
              <div className="section-image mob-order-1">
                <Image
                className="medical-image"
                  src="/images/engineering.jpeg"
                  alt="Medical & Healthcare"
                  height={1000}
                    width={1000}
                />
              </div>
            </div>
          </div>
          <div className="mb-80" id = "business">
            <div className="medical-section-content">
              <div className="section-image">
                <Image
                className="medical-image"
                  src="/images/business.jpeg"
                  alt="Medical & Healthcare"
                  height={1000}
                    width={1000}
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
                  <li><p>Business Administration (BBA, MBA)</p></li>
                  <li><p>Finance & Accounting</p></li>
                  <li><p>Marketing & Digital Marketing</p></li>
                  <li><p>Human Resource Management (HRM)</p></li>
                  <li><p>Entrepreneurship & Innovation</p></li>
                  <li><p>Supply Chain & Logistics Management</p></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-80" id = "vocational">
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
                  <li><p>Culinary Arts & Hospitality</p></li>
                  <li><p>Fashion & Design</p></li>
                  <li><p>Film & Media Studies</p></li>
                  <li><p>Language & Communication</p></li>
                  <li><p>Automotive & Mechanical Trades</p></li>
                  <li><p>Health & Wellness</p></li>
                </ul>
              </div>
              <div className="section-image mob-order-1">
                <Image
                  className="medical-image"
                  src="/images/short_term.jpeg"
                  alt="Medical & Healthcare"
                  height={1000}
                    width={1000}
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
