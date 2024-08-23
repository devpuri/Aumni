import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import ComingSoon from "../../Component/ComingSoon";
import { Helmet } from "react-helmet-async";

import USP from "../../Component/USP";
import "../css/Profile.css";


export default function RajProfile() {
   return (
      <>
      <Helmet>
         <title>Aumni -Vishakha</title>
      </Helmet> 
      <div className="main-profile-page">
         <Navbar />
         <div className="profile-main">
            <div className="heading-container">
               <h1> Vishakha P.</h1>
               <hr />
            </div>
         </div>
      </div>
      <ComingSoon />
      <Footer />
      </>
   );
}
