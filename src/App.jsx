import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  FaUsers,
  FaHandshake,
  FaClipboardList,
  FaBriefcase,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

function App() {
  const testimonials = [
    {
      id: 1,
      text: "As the Operations Manager at Qaizen, I can confidently say that their housekeeping and security staff services have exceeded our expectations. The team they provided was professional, efficient, and incredibly reliable. Our facilities have never looked better, and our employees feel safer than ever before. Aumni Management Services has truly elevated our standards when it comes to staffing solutions. Highly recommended",
      client: "Anup Sharma, Operations Manager at Qaizen.",
    },
    {
      id: 2,
      text: "Choosing Aumni Management Services for our staffing needs at DIT (Dehradun Institute of Technology) has been a decision we've never regretted. Their dedication to providing top-notch talent for our institution has been commendable. From administrative support to specialized roles, their team has consistently delivered high-quality staffing solutions. We highly appreciate their professionalism and commitment to excellence. Thank you, Aumni Management Services, for being an invaluable partner in our journey.",
      client: "Sourabh, Administration team at DIT.",
    },
    // Add more testimonials as needed
  ];

  return (
    <>
      <div className="responsiveness-not-working">
        <h1>We are currently working on improving the responsiveness of the website. Come back later or Checkout the website on a laptop or desktop</h1>
      </div>
      <div className="homepage-container">
        <div className=" spacer layer1">
          <header>
            <nav>
              <div className="logo">AUMNI</div>
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </header>
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-tagline">
                You Manage Your Work, <br></br>
                We Manage Your Workplace
              </h1>
              <p className="longer-tagline">
                {" "}
                You need reliable talent and a staffing partner who understands
                your business. When you partner with Aumni, You will receive:
              </p>
              <ul className="tagline-usp">
                <li className="tagline-usp-list">
                  <p>
                    {" "}
                    <FaRegSquareCheck /> Access to top Talent
                  </p>
                </li>
                <li className="tagline-usp-list">
                  <p>
                    {" "}
                    <FaRegSquareCheck /> Flexible and scalable workforce
                    solutions
                  </p>
                </li>
                <li className="tagline-usp-list">
                  <p>
                    {" "}
                    <FaRegSquareCheck /> Responsive account management
                  </p>
                </li>
              </ul>
              <a href="#contact" className="cta-button">
                Get in Touch!
              </a>
            </div>
          </section>
        </div>

        <section id="about" className="about-section">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                Aumni Management Services is a leading provider of manpower
                outsourcing solutions, dedicated to helping businesses
                streamline their operations and achieve their goals. Aumni Management Services is a leading provider of manpower
                outsourcing solutions, dedicated to helping businesses
                streamline their operations and achieve their goals.
              </p>
            </div>
            <div className="about-image">
              <img src="../public/Management-illustration.svg" alt="About Us" />
            </div>
          </div>
        </section>
        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <div className="service-title">Temporary Staffing</div>
              <div className="service-description">
              Access skilled professionals on a temporary basis to meet short-term staffing needs, cover seasonal demands, or complete special projects.
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaHandshake />
              </div>
              <div className="service-title">Permanent Staffing</div>
              <div className="service-description">
              Find the right talent for your long-term staffing requirements with our customized permanent placement solutions, including executive search and recruitment services.
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaClipboardList />
              </div>
              <div className="service-title">On-site Managed Services</div>
              <div className="service-description">
              Streamline your workforce management processes with our on-site managed services, providing dedicated support and resources tailored to your organization's needs.
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FaBriefcase />
              </div>
              <div className="service-title">
              Specialized Industry Expertise
              </div>
              <div className="service-description">
              Benefit from our industry-specific knowledge and experience across various sectors, including healthcare, technology, finance, hospitality, manufacturing, and more.
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials-section">
          <h2>Client Testimonials</h2>
          <div className="testimonial-carousel">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.id}>
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <p className="client-name">{testimonial.client}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>Email: info@aumnimanagement.com</p>
          <p>Phone: +91 8800279748</p>
        </section>
        <footer className="footer">
          <p>&copy; 2024 Aumni Management Services Pvt. Lmt. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
