import React, { useState } from "react";
import "./css/ContactModal.css";
import { IoMdClose } from "react-icons/io";

export default function ContactModal() {
   const [modal, setModal] = useState(false);

   const toggleModal = () => {
      setModal(!modal);
   };

   if (modal) {
      document.body.classList.add("active-modal");
   } else {
      document.body.classList.remove("active-modal");
   }

   return (
      <>
         <button onClick={toggleModal} className="btn-modal">
            Contact Us
         </button>

         {modal && (
            <div className="modal">
               <div onClick={toggleModal} className="overlay"></div>
               <div className="modal-content">
                  <h2>
                     Let's talk about how your business can benefit from Aumni's
                     services!
                  </h2>
                  <div className="contact-modal-main">
                     <div className="contact-modal-illustration">
                        <img src="/sales-representative.svg" alt="About Us" />
                     </div>
                     <div className="contact-modal-static-contact">
                        <p>
                           Call us at: <br />
                           +91 8800279748 <br /> <br />
                           Or have us reach out to you by filling the form. We
                           guarantee that one of our representatives would
                           contact you within one business days
                        </p>
                     </div>
                     <div className="contact-modal-form">
                        <div id="form-main">
                           <div id="form-div">
                              <form class="form" id="form1">
                                 <p class="name">
                                    <input
                                       name="name"
                                       type="text"
                                       class="validate[required,custom[onlyLetter],length[0,100]] feedback-input"
                                       placeholder="Name"
                                       id="name"
                                    />
                                 </p>

                                 <p class="email">
                                    <input
                                       name="email"
                                       type="text"
                                       class="validate[required,custom[email]] feedback-input"
                                       id="email"
                                       placeholder="Email"
                                    />
                                 </p>

                                 <p class="text">
                                    <textarea
                                       name="text"
                                       class="validate[required,length[6,300]] feedback-input"
                                       id="comment"
                                       placeholder="Anything you would like to let us know before we contact you?"
                                    ></textarea>
                                 </p>

                                 <div class="submit">
                                    <input
                                       type="submit"
                                       value="Let's Talk"
                                       id="button-blue"
                                    />
                                    <div class="ease"></div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                     <button className="close-modal" onClick={toggleModal}>
                        <IoMdClose />
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}
