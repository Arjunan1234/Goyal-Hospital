import React, { useState } from "react";
import "./bookContact.scss";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";

import send from "../../assets/svg/send.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookContact = ({ doctorName, selectedDate }) => {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      console.log(selectedDate, "selectedDate");

      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyrwtj0QKuJJkiA9fNNWC4rY5DVQuSIKfW5w-xlhY9v3GtvvB98hfXOoXma2haqrF0F/exec";

      const payload = {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        doctorName: doctorName || "Unknown Doctor",
        selectedDate: selectedDate,
      };

      const formBody = new URLSearchParams(payload).toString();

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        });

        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ fullName: "", phone: "", email: "", message: "" });
        } else {
          toast.error("Failed to send message.");
        }
      } catch (error) {
        console.error("Error sending data:", error);
        alert("Something went wrong!");
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() &&
      formData.phone.trim() &&
      formData.email.trim() &&
      formData.message.trim()
    );
  };

  return (
    <section className="abc container">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
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
        <TextArea
          label="Message"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <p className="abc">Doctor: {doctorName || "Unknown Doctor"}</p>
        <p className="abc">
          Selected Date:{" "}
          {selectedDate
            ? selectedDate.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "Not selected"}
        </p>

        <button
          type="submit"
          className="sendButton"
          disabled={!isFormValid() || loading}
          style={{
            opacity: !isFormValid() || loading ? 0.6 : 1,
            cursor: !isFormValid() || loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Sending..." : "Send Message"} <img src={send} alt="" />
        </button>
      </form>
    </section>
  );
};

export default BookContact;
