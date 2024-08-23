import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import ComingSoon from "../../Component/ComingSoon";
import { Helmet } from "react-helmet-async";
import "../css/Profile.css";

export default function RajProfile() {
   return (
      <>
      <Helmet>
         <title>Aumni -Raj</title>
      </Helmet> 
      <div className="main-profile-page">
         <Navbar />
         <div className="profile-main">
            <div className="heading-container">
               <h1> Raj Kumar</h1>
               <hr />
            </div>
         </div>
      </div>
      <ComingSoon />
      <Footer />
      </>
   );
}
