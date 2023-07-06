import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export const Contact = () => {
  // email js start
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86hvrq8",
        "template_8nw6xu8",
        form.current,
        "6CgBgkv3NLOXWGEVa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // email js end

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>get in touch</span>
          <span>contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name:"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email:"
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            cols="50"
            rows="10"
          ></textarea>
          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for contactin me!"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};
