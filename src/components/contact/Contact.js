import React from "react";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div>
      <div className="contact" id="contact">
        <div className="top__contact">
          <div className="line"></div>
          <span>My Contact</span>
        </div>
        <h1>Contact</h1>
        <div className="bottom__contact">
          <div className="all_left">
            <h3>Get in Touch</h3>
            <div className="left__bottom">
              <div className="carts">
                <div className="cart">
                  <MdEmail />
                  <p>joxamuattar@gmail.com</p>
                  <p>Email</p>
                </div>
                <div className="cart">
                  <BsFillTelephoneFill />
                  <p>+998 90 222 05 36</p>
                  <p>Phone</p>
                </div>
              </div>
              <div className="carts">
                <div className="cart">
                  <AiFillInstagram />
                  <p>@joxa_muxa</p>
                  <p>Instagram</p>
                </div>
                <div className="cart">
                  <BsFacebook />
                  <p>Jaxongir Mirhalikov</p>
                  <p>Facebook</p>
                </div>
              </div>
            </div>
          </div>
          <div className="all_right">
            <h3>Contact Form</h3>
            <div className="right_bottom">
              <input type="text" placeholder="Enter Your Fullname*" />
              <input type="email" placeholder="Enter Your Email*" />
              <input type="text" placeholder="Your Subject*" />
              <input type="text" placeholder="Enter Your Message*" />
              <button>Sent</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
