import React from "react";
import iconMail from "../../img/icon-mail.svg";
import "./style.css";

const Contact = () => {
    return (
        <section className="coopers-contact">
            <div className="container contact-container">
                <div className="d-flex gap-1 items-center">
                    <div className="icon-mail">
                        <img src={iconMail} alt="Email" />
                    </div>
                    <div className="contact-title">
                        <h3>GET IN</h3>
                        <h3 className="span">TOUCH</h3>
                    </div>
                </div>

                <form className="contact-form" method="POST">
                    <div className="input-box">
                        <label for="your-name">Your Name</label><br />
                        <input className="w-full" id="your-name" placeholder="type your name here..." />
                    </div>

                    <div className="d-flex gap-1">
                        <div className="input-box">
                            <label for="your-email">Email*</label><br />
                            <input id="your-email" required placeholder="example@example.com" />
                        </div>
                        <div className="input-box">
                            <label for="your-phone">Telephone*</label><br />
                            <input id="your-phone" required placeholder="(  ) ____-____" />
                        </div>
                    </div>

                    <div className="input-box">
                        <label for="your-message">Message*</label><br />
                        <textarea id="your-message" class="textarea w-full" placeholder="Type what you want to say to us" />
                    </div>

                    <button className="btn-green w-full">Send Now</button>

                </form>


            </div>
        </section >
    )
}
export default Contact;