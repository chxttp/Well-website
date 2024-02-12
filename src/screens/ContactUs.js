import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Import EmailJS library
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import contactUsBg from "../Images/contactBanter.jpeg";
import DownloadFile from "../component/DownloadFile";
import Map from "../Images/map.jpeg";
import "../styles/ContactUs.css";
import locales from "../data/locales";

function ContactUs() {
  const currentLanguage = window.location.pathname.split("/")[1] || "th";
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const serviceID = "service_c6y9ggr"; // Replace with your EmailJS service ID
    const templateID = "template_smyh6mo"; // Replace with your EmailJS template ID
    const publicKey = "EYdHhFIN0MllnWphd"; // Replace with your EmailJS user ID

    const templateParams = {
      to_name: "Well-engineering", // Adjust accordingly
      from_name: data.name,
      name: data.name,
      email: data.email,
      phone: data.phone,
      fax: data.fax,
      topic: data.topic,
      message: data.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessageSent(true);
        },
        (err) => {
          console.log("FAILED...", err);
          // Handle errors here
        }
      );
  };

  const homeBanter = [contactUsBg];

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".Contact-container").classList.add("fade-in");
  }, []);

  return (
    <div className="Contact-container">
      <div className="NavBar">
        <Navbar />
      </div>
      <div className="Banner">
        <Banner images={homeBanter} />
      </div>
      <div className="Contact-text">
        <div className="Contact-form">
          <div className="Contact-form-text">
            <h2>{locales[currentLanguage].contactTopic}</h2>
          </div>

          {!messageSent && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="name">
                Name<sup>*</sup>
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
                placeholder="ชื่อ"
              />
              {errors.name && <p>{errors.name.message}</p>}

              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                placeholder="อีเมล"
              />
              {errors.email && <p>{errors.email.message}</p>}

              <label htmlFor="phone">
                Phone Number<sup>*</sup>
              </label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: true })}
                placeholder="โทร"
              />
              {errors.phone && <p>{errors.phone.message}</p>}

              <label htmlFor="fax">Fax Number</label>
              <input
                type="tel"
                id="fax"
                {...register("fax")}
                placeholder="เเฟกซ์"
              />

              <label htmlFor="topic">
                Topic<sup>*</sup>
              </label>
              <input
                type="text"
                id="topic"
                {...register("topic", { required: true })}
                placeholder="หัวข้อ"
              />
              {errors.topic && <p>{errors.topic.message}</p>}

              <label htmlFor="message">
                Message<sup>*</sup>
              </label>
              <textarea
                id="message"
                {...register("message", { required: true })}
                placeholder="ข้อความ"
              />

              <button type="submit">Send message</button>
            </form>
          )}
          {messageSent && (
            <p className="thankYou">
              Thanks for your message! We'll get back to you soon.
            </p>
          )}
        </div>

        <div className="Contact-info">
          <h2>Well Engineering Service Co., Ltd. </h2>

          <div className="contact-details">
            <div className="contact-address-eng">
              <h3>HEAD OFFICE</h3>
              <p>
                98 m.11 Bangna-Trad Rd. (Km23) Bangsaothong Bangsaothong
                Samutprakarn 10570
              </p>
              <p>
                <b>Phone:</b> 0 2397932 4
              </p>
              <p>
                <b>Fax:</b> 0 2397 9330
              </p>
              <p>
                <b>Email:</b> well@well-engineering.com
              </p>
            </div>

            <div className="contact-address-thai">
              <h3>สำนักงานใหญ่</h3>
              <p>
                98 หมู่ 11 ถ.บางนา-ตราด กม23 ต. บางเสาธง อ.บางเสาธง
                จ.สมุทรปราการ 10570
              </p>
              <p>
                <b>โทร:</b> 0 2397932 4
              </p>
              <p>
                <b>เเฟกซ์:</b> 0 2397 9330
              </p>
              <p>
                <b>อีเมล:</b> well@well-engineering.com
              </p>
            </div>
          </div>
          <img src={Map} alt="" />
        </div>
      </div>
      <div className="download-section">
        <DownloadFile />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default ContactUs;
