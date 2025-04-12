import Image from "next/image";
import Link from "next/link";
import React from "react";

type Destination = {
  id: number;
  name: string;
  flag: string;
  image: string;
  altText: string;
  additionalInfo: {
    entryRequirement: string;
    ielts: string;
    tuitionFees: string;
    intakes: string;
    workOpportunity: string;
  };
};

const destinations: Destination[] = [
  {
    id: 1,
    name: "United States",
    flag: "/images/flags/usa_flag.jpeg",
    image: "/images/US.jpeg",
    altText: "United States skyline",
    additionalInfo: {
      entryRequirement: "Entry Requirement",
      ielts: "IELTS 6.0 - 7.5",
      tuitionFees: "₹16-42 lakh per year",
      intakes: "Aug/Sep, Jan, May",
      workOpportunity: "Upto 20 hrs/week",
    },
  },
  {
    id: 2,
    name: "Germany",
    flag: "/images/flags/germany_flag.png",
    image: "/images/Germany.jpeg",
    altText: "Germany castle",
    additionalInfo: {
      entryRequirement: "Entry Requirement",
      ielts: "IELTS 6.5 - 7.0",
      tuitionFees: "€10-15k per year",
      intakes: "Oct, Apr",
      workOpportunity: "Upto 20 hrs/week",
    },
  },
  {
    id: 3,
    name: "United Kingdom",
    flag: "/images/flags/uk_flag.png",
    image: "/images/Uk.jpeg",
    altText: "United Kingdom cityscape",
    additionalInfo: {
      entryRequirement: "Entry Requirement",
      ielts: "IELTS 6.0 - 7.0",
      tuitionFees: "£15-25k per year",
      intakes: "Sep, Jan",
      workOpportunity: "Upto 20 hrs/week",
    },
  },
  {
    id: 4,
    name: "Australia",
    flag: "/images/flags/australia_flag.jpeg",
    image: "/images/Australia.jpeg",
    altText: "Sydney Opera House",
    additionalInfo: {
      entryRequirement: "Entry Requirement",
      ielts: "IELTS 6.0 - 7.0",
      tuitionFees: "A$20-45k per year",
      intakes: "Feb, Jul",
      workOpportunity: "Upto 40 hrs/fortnight",
    },
  },
  {
    id: 5,
    name: "Canada",
    flag: "/images/flags/canada_flag.png",
    image: "/images/Canada.jpeg",
    altText: "Canadian university",
    additionalInfo: {
      entryRequirement: "Entry Requirement",
      ielts: "IELTS 6.0 - 6.5",
      tuitionFees: "C$15-35k per year",
      intakes: "Sep, Jan, May",
      workOpportunity: "Upto 20 hrs/week",
    },
  },
];

const Destination = () => {
  return (
    <>
      <div>
        <div id="destination-hero-section" className = " mb-140">
          <section>
            <div className="container">
              <div className="destination">
                <h1 className="mb-24">
                  Explore Study Destinations <span>Worldwide</span>
                </h1>
                <p className="mb-24">
                  Find the ideal country for your studies and take the first
                  step toward a world-class education and global <br /> career
                  opportunities!
                </p>
                <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'><button className="mb-24">
                  Book free Consultation
                </button></Link>
              </div>
            </div>
          </section>
          <section>
            <div className="destinations-grid">
              {destinations.map((destination) => (
                <div key={destination.id} className="destination-card">
                  <div className="card-image">
                    <Image
                      src={destination.image}
                      alt={destination.altText}
                      width={500}
                      height={500}
                      className="destination-img"
                    />
                  </div>

                  {/* Details panel that slides up on hover */}
                  <div className="details-panel">
                    <h3 className="detail-title">
                      {destination.additionalInfo.entryRequirement}
                    </h3>
                    <p className="detail-value">
                      {destination.additionalInfo.ielts}
                    </p>

                    <h3 className="detail-title">Tuition Fees</h3>
                    <p className="detail-value">
                      {destination.additionalInfo.tuitionFees}
                    </p>

                    <h3 className="detail-title">Intakes</h3>
                    <p className="detail-value">
                      {destination.additionalInfo.intakes}
                    </p>

                    <h3 className="detail-title">Work Opportunity</h3>
                    <p className="detail-value">
                      {destination.additionalInfo.workOpportunity}
                    </p>
                  </div>

                  {/* Country info centered at bottom, moves to top on hover */}
                  <div className="card-content">
                    <p className="country-info">
                      <span className="flag-container">
                        <Image
                          src={destination.flag}
                          alt={`${destination.name} flag`}
                          width={24}
                          height={24}
                          className="flag-img"
                        />
                      </span>
                      <span className="country-name">{destination.name}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className=" mb-140">
          <div className="abroad-destination container">
            <div>
              <h2>
                How to Choose the Right Study <span>Abroad Destination</span> ?
              </h2>
            </div>
            <div className="abroad-destination-section">
              <div>
                <Image
                  className="abroad-image"
                  src="/images/abroad.png"
                  alt="abroad"
                  height={1500}
                  width={1500}
                />
              </div>
              <div>
                <ul className="program-list">
                  <li>
                    <h5 className="mb-16">Language</h5>
                    <p>
                      Consider the language spoken in the country and whether
                      you’ll need to learn a new language
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-16">Culture</h5>
                    <p>
                      Compare the cost of living in different countries
                      including tuition fees, accommodation and living expenses
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-16">Cost of living</h5>
                    <p>
                      Compare the cost of living in different countries
                      including tuition fees, accommodation and living expenses
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-16">Climate</h5>
                    <p>
                      Consider the climate and whether it suits your preferences
                    </p>
                  </li>
                  <li>
                    <h5 className="mb-16">Safety</h5>
                    <p>Research the safety and security situation in country</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="experience">
          <h1>
            Looking for the Best <span>Study Abroad </span>
            <br />
            Experience?
          </h1>
          <Link href="//api.whatsapp.com/send?phone=919895101101&text=Hi" target='_blank'><button>
            Book Consultation
          </button></Link>
        </div>
      </section>
    </>
  );
};

export default Destination;
