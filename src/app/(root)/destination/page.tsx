import Image from "next/image";
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
      name: 'United States',
      flag: '/images/flags/usa_flag.jpeg',
      image: '/images/destinations/usa.jpeg',
      altText: 'United States skyline',
      additionalInfo: {
        entryRequirement: 'Entry Requirement',
        ielts: 'IELTS 6.0 - 7.5',
        tuitionFees: '₹16-42 lakh per year',
        intakes: 'Aug/Sep, Jan, May',
        workOpportunity: 'Upto 20 hrs/week'
      }
    },
    {
      id: 2,
      name: 'Germany',
      flag: '/images/flags/germany_flag.png',
      image: '/images/destinations/germany.jpeg',
      altText: 'Germany castle',
      additionalInfo: {
        entryRequirement: 'Entry Requirement',
        ielts: 'IELTS 6.5 - 7.0',
        tuitionFees: '€10-15k per year',
        intakes: 'Oct, Apr',
        workOpportunity: 'Upto 20 hrs/week'
      }
    },
    {
      id: 3,
      name: 'United Kingdom',
      flag: '/images/flags/uk_flag.png',
      image: '/images/destinations/UK.jpeg',
      altText: 'United Kingdom cityscape',
      additionalInfo: {
        entryRequirement: 'Entry Requirement',
        ielts: 'IELTS 6.0 - 7.0',
        tuitionFees: '£15-25k per year',
        intakes: 'Sep, Jan',
        workOpportunity: 'Upto 20 hrs/week'
      }
    },
    {
      id: 4,
      name: 'Australia',
      flag: '/images/flags/australia_flag.jpeg',
      image: '/images/destinations/australia.jpeg',
      altText: 'Sydney Opera House',
      additionalInfo: {
        entryRequirement: 'Entry Requirement',
        ielts: 'IELTS 6.0 - 7.0',
        tuitionFees: 'A$20-45k per year',
        intakes: 'Feb, Jul',
        workOpportunity: 'Upto 40 hrs/fortnight'
      }
    },
    {
      id: 5,
      name: 'Canada',
      flag: '/images/flags/canada_flag.png',
      image: '/images/destinations/canada.jpeg',
      altText: 'Canadian university',
      additionalInfo: {
        entryRequirement: 'Entry Requirement',
        ielts: 'IELTS 6.0 - 6.5',
        tuitionFees: 'C$15-35k per year',
        intakes: 'Sep, Jan, May',
        workOpportunity: 'Upto 20 hrs/week'
      }
    }
  ];

const Destination = () => {
  return (
    <>
    <div  className="container">
      <div id = "destination-hero-section">
        <section>
          <div>
            <div className="destination">
              <h1 className="mb-24">
                Explore Study Destinations <span>Worldwide</span>
              </h1>
              <p className="mb-24">
                Find the ideal country for your studies and take the first step
                toward a world-class education and global <br /> career opportunities!
              </p>
              <button className="mb-24">Book Free Consultation</button>
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
                    width={300}
                    height={400}
                    className="destination-img"
                  />
                </div>
                
                {/* Details panel that slides up on hover */}
                <div className="details-panel">
                  <h3 className="detail-title">{destination.additionalInfo.entryRequirement}</h3>
                  <p className="detail-value">{destination.additionalInfo.ielts}</p>
                  
                  <h3 className="detail-title">Tuition Fees</h3>
                  <p className="detail-value">{destination.additionalInfo.tuitionFees}</p>
                  
                  <h3 className="detail-title">Intakes</h3>
                  <p className="detail-value">{destination.additionalInfo.intakes}</p>
                  
                  <h3 className="detail-title">Work Opportunity</h3>
                  <p className="detail-value">{destination.additionalInfo.workOpportunity}</p>
                </div>
                
                {/* Country info centered at bottom, moves to top on hover */}
                <div className="card-content">
                  <div className="country-info">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section>
        <div className="abroad-destination">
          <div>
            <h1>
              How to Choose the Right Study <span>Abroad Destination</span> ?
            </h1>
          </div>
          <div className="abroad-destination-section">
            <div className="mb-24">
                <Image
                className="abroad-image"
                src="/images/abroad.png"
                alt="abroad"
                height={100}
                width={100}
                />
            </div>
            <div>
                <ul className="program-list">
                <li>
                    <h5>Language</h5>Consider the language spoken in the country and
                    whether you’ll need to learn a new language
                </li>
                <li>
                    <h5>Culture</h5>Compare the cost of living in different countries
                    including tuition fees, accommodation and living expenses
                </li>
                <li>
                    <h5>Cost of living</h5>Compare the cost of living in different
                    countries including tuition fees, accommodation and living
                    expenses
                </li>
                <li>
                    <h5>Climate</h5>
                    Consider the climate and whether it suits your preferences
                </li>
                <li>
                    <h5>Safety</h5>Research the safety and security situation in
                    country
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
            Looking for the Best <span>Study Abroad </span><br />
            Experience?
          </h1>
          <button>Book Consultation</button>
        </div>
      </section>
      </>
  );
};

export default Destination;
