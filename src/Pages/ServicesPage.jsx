import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import USP from "../Component/USP";
import "./css/ServicesPgStyle.css";

export default function ServicesPage() {
   return (
      <div className="main-service-page">
         <Navbar />
         <div className="services-main">
            <div className="heading-container">
               <h1> Our Services</h1>
               <hr />
            </div>
            <USP />
            <div className="service-container service-container1">
               <div id="embenefit" className="main-service-content">
                  <h1>Employee Benefits</h1>
                  <p>
                     At Aumni, we understand the importance of prioritizing
                     employee well-being and satisfaction. Our comprehensive
                     employee benefit services are designed to enhance the
                     overall experience of your workforce, ensuring they feel
                     valued and motivated. From healthcare and insurance plans
                     to retirement benefits and wellness programs, we offer a
                     range of solutions tailored to meet the diverse needs of
                     your employees. By providing competitive and attractive
                     benefits packages, we help you attract top talent, boost
                     employee morale, and foster a positive work culture. Invest
                     in your employees' future and strengthen your company's
                     success with our employee benefit services.
                  </p>
               </div>
               <img src="/employee-benefit.svg" alt="" />
            </div>
            <div id="hradmin" className="service-container service-container2">
               <img src="/payroll.svg" alt="" />
               <div className="main-service-content">
                  <h1>HR admin and payroll</h1>
                  <p>
                     At Aumni, we specialize in providing comprehensive HR
                     administration and payroll solutions tailored to the unique
                     needs of businesses in India. Our experienced team of HR
                     professionals takes care of all aspects of human resource
                     management, from onboarding and employee records management
                     to payroll processing and compliance. By outsourcing your
                     HR administration and payroll functions to us, you can
                     streamline your operations, reduce administrative burdens,
                     and ensure accuracy and compliance with local regulations.
                     Let us handle the complexities of HR management so you can
                     focus on growing your business and achieving your goals
                     effectively.
                  </p>
               </div>
            </div>
            <div
               id="riskmanagement"
               className="service-container service-container1"
            >
               <div className="main-service-content">
                  <h1>Risk Management</h1>
                  <p>
                     In the dynamic landscape of business operations in India,
                     mitigating employer liability and managing the risk of
                     staff shortage are paramount concerns for organizations. At
                     Aumni, we specialize in comprehensive Risk Management
                     solutions tailored to address these challenges head-on. By
                     partnering with us, businesses can minimize exposure to
                     legal liabilities, ensure compliance with regulations, and
                     safeguard against the unpredictable fluctuations in
                     workforce availability. With our expertise in risk
                     assessment and mitigation strategies, we empower
                     organizations to navigate the complexities of employment
                     laws and optimize their operational resilience in the face
                     of staffing uncertainties.
                  </p>
               </div>
               <img src="/risk-management.svg" alt="" />
            </div>
            <div
               id="hrcompliance"
               className="service-container service-container2"
            >
               <img src="/staffing-illustration1.svg" alt="" />
               <div className="main-service-content">
               <h1>Talent Management</h1>
                  <p>
                     At Aumni, we specialize in talent management solutions
                     tailored to the dynamic landscape of the Indian market. Our
                     comprehensive talent management services encompass the
                     entire employee lifecycle, from recruitment and onboarding
                     to development and retention. Leveraging our extensive
                     industry expertise and local market knowledge, we assist
                     organizations in identifying, attracting, and nurturing top
                     talent that aligns with their strategic objectives. Through
                     innovative recruitment strategies, personalized training
                     programs, and performance management initiatives, we
                     empower businesses to build high-performing teams capable
                     of driving growth and innovation in the competitive Indian
                     market. Partner with us to unlock the full potential of
                     your workforce and achieve sustainable success.
                  </p>
               </div>
            </div>
            <div
               id="talentmanagement"
               className="service-container service-container1"
            >
               <div className="main-service-content">
                  <h1>HR-related Compliance</h1>
                  <p>
                     At Aumni, we recognize the importance of adhering to
                     HR-related compliance regulations in India. Our dedicated
                     team of experts specializes in navigating the complex
                     landscape of labor laws and regulations, ensuring your
                     organization remains compliant with all statutory
                     requirements. From payroll processing and employee
                     documentation to labor law audits and compliance training,
                     we provide comprehensive HR-related compliance solutions
                     tailored to the specific needs of your business. With our
                     expertise, you can mitigate risks, avoid legal pitfalls,
                     and focus on driving your business forward with confidence
                  </p>
               </div>
               <img src="/hr-compliance.jpg" alt="" />
            </div>
            <div
               id="hrsupport"
               className="service-container service-container2"
            >
               <img src="/support.svg" alt="" />
               <div className="main-service-content">
                  <h1>HR support and technology</h1>
                  <p>
                     Keep a pulse on payroll with secure online verification and
                     approval. Manage enrollment, onboarding and employee
                     benefits online, all in one place. Our dedicated service
                     team with 12-plus years of experience does more than just
                     answer the phone. We’re proactive and personable, and
                     deliver unmatched follow-through. Backed by our team of
                     specialists, Insperity’s all-in-one HR technology platform
                     scales as your business grows.
                  </p>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
}
