import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import contactUsBg from "../Images/contactBanter.jpeg";
import DownloadFile from "../component/DownloadFile";
import Map from "../Images/map.jpeg"
import "../styles/ContactUs.css";

function ContactUs() {
  const [messageSent, setMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Replace this with your actual form submission logic (e.g., sending an email)
    console.log(data);
    setMessageSent(true);
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
            <h2>CONTACT FORM</h2>

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
              <input type="tel" id="fax" {...register("fax")}
                placeholder="เเฟกซ์" />
            

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
            <p className="thankYou">Thanks for your message! We'll get back to you soon.</p>
          )}
        </div>

        <div className="Contact-info">
          <h2>Plan at Well Engineering Service Co., Ltd. </h2>
         
          <div className="contact-details">
            <div className="contact-address-eng">
                <h3>HEAD OFFICE</h3>
              <p>
              
                98 m.11 Bangna-Trad Rd.-ตราด (Km23)
                Bangsaothong Bangsaothong Samuiprakarn 10570
              </p>
              <p>
                <b>Phone:</b> 0 2397932 4
              </p>
              <p>
                <b>Fax:</b> 0 2397 9330
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
            </div>
          </div>
          <img src={Map} alt=""  />
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


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Banner from "../component/Banner";
// import Footer from "../component/Footer";
// import Navbar from "../component/Navbar";
// import contactUsBg from "../Images/contactBanter.jpeg";
// import Map from "../Images/map.jpeg"
// import "../styles/ContactUs.css";

// import ReCAPTCHA from "react-google-recaptcha";


// function ContactUs() {
//   const [messageSent, setMessageSent] = useState(false);
//   const [captchaValue, setCaptchaValue] = useState(null);
  

//   const onSubmit = (data) => {
//     if (!captchaValue) {
//         alert("Please complete the reCAPTCHA verification.");
//         return;
//       }
  
//       // Replace this with your actual form submission logic (e.g., sending an email)
//       console.log(data);
//       setMessageSent(true);
  
//       // Reset the form and reCAPTCHA after successful submission
//       reset();
//       setCaptchaValue(null);
//   };
//   const handleCaptchaChange = (value) => {
//     setCaptchaValue(value);
//   };
//   const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
//   const RECAPTCHA_SITE_KEY = "6LfCdjUpAAAAAGRIRnYIWsc3huRxsXaM-_PLQ-_s";

//   const homeBanter = [contactUsBg];

//   return (
//     <div className="Contact-container">
//       <div className="NavBar">
//         <Navbar />
//       </div>
//       <div className="Banner">
//         <Banner images={homeBanter} />
//       </div>
//       <div className="Contact-text">
//         <div className="Contact-form">
//             <div className="Contact-form-text">
//             <h2>CONTACT FORM</h2>

//             </div>
         
//           {!messageSent && (
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <label htmlFor="name">
//                 Name<sup>*</sup>
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 {...register("name", { required: true })}
//                 placeholder="ชื่อ"
//               />
//               {errors.name && <p>{errors.name.message}</p>}

//               <label htmlFor="email">
//                 Email<sup>*</sup>
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 {...register("email", { required: true })}
//                 placeholder="อีเมล"
//               />
//               {errors.email && <p>{errors.email.message}</p>}

//               <label htmlFor="phone">
//                 Phone Number<sup>*</sup>
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 {...register("phone", { required: true })}
//                 placeholder="โทร"
//               />
//               {errors.phone && <p>{errors.phone.message}</p>}

//               <label htmlFor="fax">Fax Number</label>
//               <input type="tel" id="fax" {...register("fax")}
//                 placeholder="เเฟกซ์" />
            

//               <label htmlFor="topic">
//                 Topic<sup>*</sup>
//               </label>
//               <input
//                 type="text"
//                 id="topic"
//                 {...register("topic", { required: true })}
//                 placeholder="หัวข้อ"
//               />
//               {errors.topic && <p>{errors.topic.message}</p>}

//               <label htmlFor="message">
//                 Message<sup>*</sup>
//               </label>
//               <textarea
//                 id="message"
//                 {...register("message", { required: true })}
//                 placeholder="ข้อความ"
//               />
//              <ReCAPTCHA
//               sitekey={RECAPTCHA_SITE_KEY}
//               onChange={handleCaptchaChange}
//             />
//             {errors.captcha && <p>{errors.captcha.message}</p>}

//               <button type="submit">Send message</button>
//             </form>
//           )}
//           {messageSent && (
//             <p>Thanks for your message! We'll get back to you soon.</p>
//           )}
//         </div>

//         <div className="Contact-info">
//           <h2>Plan at Well Engineering Service Co., Ltd. </h2>
         
//           <div className="contact-details">
//             <div className="contact-address-eng">
//                 <h3>HEAD OFFICE</h3>
//               <p>
              
//                 98 m.11 Bangna-Trad Rd.-ตราด (Km23)
//                 Bangsaothong Bangsaothong Samuiprakarn 10570
//               </p>
//               <p>
//                 <b>Phone:</b> 0 2397932 4
//               </p>
//               <p>
//                 <b>Fax:</b> 0 2397 9330
//               </p>
//             </div>

//             <div className="contact-address-thai">
//               <h3>สำนักงานใหญ่</h3>
//               <p>
//                 98 หมู่ 11 ถ.บางนา-ตราด กม23 ต. บางเสาธง อ.บางเสาธง
//                 จ.สมุทรปราการ 10570
//               </p>
//               <p>
//                 <b>โทร:</b> 0 2397932 4
//               </p>
//               <p>
//                 <b>เเฟกซ์:</b> 0 2397 9330
//               </p>
//             </div>
//           </div>
//           <img src={Map} alt=""  />
//         </div>
//       </div>

//       <div className="Footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
