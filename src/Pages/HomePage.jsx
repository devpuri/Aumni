import "../App.css";
import Navbar from "../Component/Navbar";
import "./css/HomePageCSS/about-section.css";
import "./css/HomePageCSS/services-section.css";
import "./css/HomePageCSS/testimonial-section.css";
import "./css/HomePageCSS/contact-section.css";
import Footer from "../Component/Footer";
import { NavLink } from "react-router-dom";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function HomePage() {
   const testimonials = [
      {
         id: 1,
         text: "As the Operations Manager at Qaizen, I can confidently say that their housekeeping and security staff services have exceeded our expectations. The team they provided was professional, efficient, and incredibly reliable. Our facilities have never looked better, and our employees feel safer than ever before. Aumni Management Services has truly elevated our standards when it comes to staffing solutions. Highly recommended",
         clientName: "Anup Sharma",
         clientPos: "Finance and Admin Head at Qaizen.",
      },
      {
         id: 2,
         text: "Choosing Aumni Management Services for our staffing needs at DIT (Dehradun Institute of Technology) has been a decision we've never regretted. Their dedication to providing top-notch talent for our institution has been commendable. From administrative support to specialized roles, their team has consistently delivered high-quality staffing solutions. We highly appreciate their professionalism and commitment to excellence. Thank you, Aumni Management Services, for being an invaluable partner in our journey.",
         clientName: "Sourabh Kumar",
         clientPos: "Administration team at DIT.",
      },
      // Add more testimonials as needed
   ];

   return (
      <>
         <div className="homepage-container">
            <div className=" spacer layer1">
               <header>
                  <Navbar />
               </header>
               <section className="hero-section">
                  <div className="hero-content">
                     <h1 className="hero-tagline">
                        You Manage Your Work, <br></br>
                        We Manage Your Workplace
                     </h1>
                     <p className="longer-tagline">
                        {" "}
                        You need reliable talent and a staffing partner who
                        understands your business. When you partner with Aumni,
                        You will receive:
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
                              <FaRegSquareCheck /> Flexible and scalable
                              workforce solutions
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
                        Aumni Management Services is a leading provider of
                        manpower outsourcing solutions, dedicated to helping
                        businesses streamline their operations and achieve their
                        goals. Aumni Management Services is a leading provider
                        of manpower outsourcing solutions, dedicated to helping
                        businesses streamline their operations and achieve their
                        goals.
                     </p>
                  </div>
                  <div className="about-image">
                     <img src="/Management-illustration.svg" alt="About Us" />
                  </div>
               </div>
            </section>
            <section id="services" className="services-section">
               <h2>Our Services</h2>
               <div className="services-container">
                  <NavLink to="/services">
                  <div className="services-card">
                     <div className="services-card-inner">
                        <p className="services-card-title">
                           Temporary Staffing
                        </p>
                        <p className="services-card-data">
                           Access skilled professionals on a temporary basis to
                           meet short-term staffing needs, cover seasonal
                           demands, or complete special projects.
                        </p>
                        {/* <ul className="services-card-ptr">
                              <li>
                              <span className="ptr-icon">
                                 <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                    fill="currentColor"
                                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                    ></path>
                                 </svg>
                              </span>
                              <span>Point one</span>
                              </li>
                           </ul> */}
                        <div className="sc-button">
                           <a className="sc-button-link" href="#">
                              Learn more
                           </a>
                        </div>
                     </div>
                  </div>
                  </NavLink>
                  <NavLink to="/services">
                  <div className="services-card">
                     <div className="services-card-inner">
                        <p className="services-card-title">
                           Permanent Staffing
                        </p>
                        <p className="services-card-data">
                           Find the right talent for your long-term staffing
                           requirements with our customized permanent placement
                           solutions, including executive search and recruitment
                           services.
                        </p>
                        <div className="sc-button">
                           <a className="sc-button-link" href="#">
                              Learn more
                           </a>
                        </div>
                     </div>
                  </div>
                  </NavLink>
                  <NavLink to="/services">
                  <div className="services-card">
                     <div className="services-card-inner">
                        <p className="services-card-title">
                           On-Site Managed Services
                        </p>
                        <p className="services-card-data">
                           Streamline your workforce management processes with
                           our on-site managed services, providing dedicated
                           support and resources tailored to your organization's
                           needs.
                        </p>
                        <div className="sc-button">
                           <a className="sc-button-link" href="#">
                              Learn more
                           </a>
                        </div>
                     </div>
                  </div>
                  </NavLink>
                  <NavLink to="../services">
                  <div className="services-card">
                     <div className="services-card-inner">
                        <p className="services-card-title">
                           Specialized Industry Expertise
                        </p>
                        <p className="services-card-data">
                           Benefit from our industry-specific knowledge and
                           experience across various sectors, including
                           healthcare, technology, finance, hospitality,
                           manufacturing and more.
                        </p>
                        <div className="sc-button">
                           <a className="sc-button-link" href="#">
                              Learn more
                           </a>
                        </div>
                     </div>
                  </div>
                  </NavLink>
                  {/* <div className="services-card">
              <div className="services-card-inner">
                <p className="services-card-title">Card header</p>
                <p className="services-card-data">
                  This card is talking about services offered by aumni management
                </p>
                <div className="sc-button">
                  <a className="sc-button-link" href="#">
                    Button
                  </a>
                </div>
              </div>
            </div> */}
               </div>
            </section>
            <section id="testimonials" className="testimonials-section">
               <h2>Client Testimonials</h2>
               <div className="testimonial-carousel">
                  {testimonials.map((testimonial) => (
                     <div className="testimonial-card" key={testimonial.id}>
                        <div className="quote-icon-top">
                           <FaQuoteLeft />
                        </div>
                        <p className="testimonial-text">{testimonial.text}</p>
                        <div className="quote-icon-bottom">
                           <FaQuoteRight />
                        </div>
                        <div className="client-dtl">
                           <p className="client-name">
                              {testimonial.clientName}
                           </p>
                           <p className="client-pos">{testimonial.clientPos}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
            <section id="contact" className="contact-section-bg">
               {/* <h2>Contact Us</h2>
          <p>Email: info@aumnimanagement.com</p>
          <p>Phone: +91 8800279748</p> */}

               <div className="section-contact">
                  <div className="row justify-content-center">
                     <div className="col-12 col-lg-10 col-xl-8">
                        <div className="header-section text-center">
                           <h2 className="title">
                              Get In Touch
                              <span className="dot"></span>
                              <span className="big-title">CONTACT</span>
                           </h2>
                           <p className="description">
                              Have a question or need more information about our
                              services? Feel free to reach out to us! Our
                              dedicated team is here to assit you and provide
                              personalized solutions tailored to your needs. You
                              can reach us at info@aumnimanagement.com or
                              +91-8800279748. You can also use the form below to
                              send us a message directly and we'll get back to
                              you as soon as possible.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="form-contact">
                     <form>
                        <div className="row">
                           <div className="col-md-6">
                              <div className="single-input">
                                 <i className="fas fa-user"></i>
                                 <input
                                    type="text"
                                    name="name"
                                    placeholder="ENTER YOUR NAME"
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="single-input">
                                 <i className="fas fa-envelope"></i>
                                 <input
                                    type="text"
                                    name="email"
                                    placeholder="ENTER YOUR EMAIL"
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="single-input">
                                 <i className="fas fa-phone"></i>
                                 <input
                                    type="text"
                                    name="phoneNumber"
                                    placeholder="ENTER YOUR PHONE NUMBER"
                                 />
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="single-input">
                                 <i className="fas fa-check"></i>
                                 <input
                                    type="text"
                                    name="subject"
                                    placeholder="ENTER YOUR SUBJECT"
                                 />
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="single-input">
                                 <i className="fas fa-comment-dots"></i>
                                 <textarea placeholder="ENTER YOUR MESSAGE"></textarea>
                              </div>
                           </div>
                           <div className="col-12">
                              <div className="submit-input text-center">
                                 <input
                                    type="submit"
                                    name="submit"
                                    value="SUBMIT NOW"
                                 />
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </section>
            <Footer />
         </div>
      </>
   );
}
