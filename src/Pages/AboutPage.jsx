import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import "./css/AboutPageStyle.css";
import { NavLink } from "react-router-dom";

export default function AboutPage() {
   return (
      <div className="main-about-container-page">
         <Navbar />
         <div className="ab-container">
            <section className="ab-section">
               <div className="ab-content">
                  <h2>About Aumni Management Services</h2>
                  <p>
                     Aumni Management Services is a premier provider of manpower
                     outsourcing solutions, dedicated to delivering high-quality
                     staffing services tailored to meet the unique needs of
                     businesses. With a commitment to excellence and
                     professionalism, we strive to help organizations streamline
                     their operations and achieve their goals.
                  </p>
                  <p>
                     Our team of experts specializes in temporary staffing,
                     permanent staffing, contract staffing, and recruitment
                     process outsourcing. We understand the importance of
                     finding the right talent for your projects and are
                     committed to providing efficient and effective staffing
                     solutions.
                  </p>
               </div>
               <div className="ab-image">
                  <img src="/aumni.jpg" alt="ab Us" />
               </div>
            </section>

            <section className="team-section">
               <h2>Our Team</h2>
               <div className="team-members">
               <NavLink to="../vishakha">
                     <div className="team-member">
                        <div className="team-pfp">
                           <img src="/4x6gvihu" alt="Team Member 4" />
                        </div>{" "}
                        <h3>Vishakha</h3>
                        <p>Director</p>
                     </div>
                  </NavLink>
                  <NavLink to="../urvashi">
                     <div className="team-member">
                        <div className="team-pfp">
                           <img src="/urvashi_pfp.png" alt="Team Member 2" />
                        </div>{" "}
                        <h3>Urvashi Saini</h3>
                        <p>Managing Director</p>
                     </div>
                  </NavLink>
                  <NavLink to="../dev">
                     <div className="team-member">
                        <div className="team-pfp">
                           <img src="/dev_pfp.png" alt="Team Member 3" />
                        </div>{" "}
                        <h3>Dev Puri</h3>
                        <p>Financial Advisor</p>
                     </div>
                  </NavLink>
                  
                  <NavLink to="../raj">
                     <div className="team-member">
                        <div className="team-pfp">
                           <img src="/4x6.jpg" alt="Team Member 1" />
                        </div>
                        <h3>Raj Kumar</h3>
                        <p>Operations Manager</p>
                     </div>
                  </NavLink>
                  {/* Add more team member cards here */}
               </div>
            </section>
         </div>
         <Footer />
      </div>
   );
}
