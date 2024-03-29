import "./css/USP.css";
import { NavLink } from "react-router-dom";

export default function USP() {
   return (
      <div className="top-services-container">
         <a href="#embenefit">
            <div className="serv-container container-one">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-institution.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>Employee Benefits</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>

         <a href="#hradmin">
            <div className="serv-container container-two">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-help-desk.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>HR admin and payroll</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>
         <a href="#riskmanagement">
            <div className="serv-container container-three">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-medical.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>Risk Management</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>
         <a href="#hrcompliance">
            <div className="serv-container container-four">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-money.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>HR-related Compliance</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>
         <a href="#talentmanagement">
            <div className="serv-container container-five">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-shield.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>Talent Management</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>
         <a href="#hrsupport">
            <div className="serv-container container-six">
               <div className="serv-cont-img">
                  <img src="/USP-Icon-customer-serv.png" alt="" srcset="" />
               </div>
               <div className="serv-cont-head">
                  <h2>HR support and technology</h2>
               </div>
               <div className="serv-cont-desc"></div>
            </div>
         </a>
      </div>
   );
}
