import React, { useRef } from "react";
import "../../styles/Contacto/main.css";
import emailjs from "@emailjs/browser";
// import { FaEnvelope } from "react-icons/fa"
// import { FaPhoneAlt } from "react-icons/fa"

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("mensaje enviado")

    emailjs
      .sendForm(
        "service_3s8jr6r",
        "template_c2f3q5r",
        form.current,
        "VqbUrFiwSZvbVGM4i"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" /> */}
        
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" name="user_name" />
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input type="email" class="form-control" name="user_email" />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
           Message
          </label>
          <textarea
            class="form-control"
            name="message" 
            rows="3"
          ></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="Send"/>
      </form>
    </>
  );
};

export default Contacto;
