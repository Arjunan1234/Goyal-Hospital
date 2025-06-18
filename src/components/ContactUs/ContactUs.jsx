import React, { useState } from "react";
import "./contactUs.scss";
import Input from "../Input/Input";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted: ", formData);
      // Add API or EmailJS integration here
    }
  };

  return (
    <section className="contactSection container">
      <h5 className="sectionSubtitle">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
        >
          <path
            d="M7.5 0.25C7.03587 0.25 6.59075 0.434375 6.26256 0.762563C5.93437 1.09075 5.75 1.53587 5.75 2V5.25H2.5C2.03587 5.25 1.59075 5.43437 1.26256 5.76256C0.934375 6.09075 0.75 6.53587 0.75 7V11C0.75 11.966 1.534 12.75 2.5 12.75H5.75V16C5.75 16.966 6.534 17.75 7.5 17.75H11.5C11.9641 17.75 12.4092 17.5656 12.7374 17.2374C13.0656 16.9092 13.25 16.4641 13.25 16V12.75H16.5C16.9641 12.75 17.4092 12.5656 17.7374 12.2374C18.0656 11.9092 18.25 11.4641 18.25 11V7C18.25 6.53587 18.0656 6.09075 17.7374 5.76256C17.4092 5.43437 16.9641 5.25 16.5 5.25H13.25V2C13.25 1.53587 13.0656 1.09075 12.7374 0.762563C12.4092 0.434375 11.9641 0.25 11.5 0.25H7.5Z"
            fill="#195AFF"
          />
        </svg>
        Contact Us
      </h5>
      <h2 className="sectionTitle">Connect With Goyal Hospital</h2>
      <p className="sectionDesc">
        Have a question or need assistance? Our team is always ready to provide
        the support you need.
      </p>

      <div className="contactContainer">
        <div className="mapContainer">
          <iframe
            title="Goyal Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224134.5146549633!2d77.06889964831565!3d28.52758200549333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26ab11a5c33%3A0x7ad56e00e2e9f68a!2sGoyal%20Hospital%20%26%20Urology%20Centre!5e0!3m2!1sen!2sin!4v1718681549834!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <button className="directionButton">Get Direction 🧭</button>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <Input
            label="Phone Number"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            type="tel"
          />
          <Input
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            type="email"
          />
          <Input
            label="Message"
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            type="text"
          />

          <button type="submit" className="sendButton">
            Send Message ✈️
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
