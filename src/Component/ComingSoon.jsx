import "./css/ComingSoon.css";
import { NavLink } from "react-router-dom";

export default function ComingSoon() {
   return (
      <div className="main-container">
         <div className="image-container">
            <img src="/work-pending.png" alt="" />
         </div>
         <div className="main-text">
            <h1> We are working on this part of the website. </h1>
            <p> Check out other pages of the website and come back here later! </p>
         </div>
      </div>
   );
}
