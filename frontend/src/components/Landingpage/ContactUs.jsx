import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {

const [formData, setFormData] = useState({
name: "",
email: "",
phone: "",
subject: "",
message: ""
});

const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = async (e) => {
e.preventDefault();


setLoading(true);
setMessage("");

try {

  const response = await fetch(
    "https://estatex-backend-j4i8.onrender.com/api/add-contact-us",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
  );

  const result = await response.json();

  if (result.code === 200) {

    setMessage("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

  } else {

    setMessage("Failed to send message.");

  }

} catch (error) {

  console.log(error);
  setMessage("Something went wrong. Please try again.");

} finally {

  setLoading(false);

}


};

return (
<section
style={{
backgroundColor: "#FFFFD0",
padding: "60px 0",
minHeight: "80vh"
}}
>


  <div className="container text-center mb-4">

    <h2 className="fw-bold text-danger">
      Contact Us!
    </h2>

    <p className="text-muted">
      Have a question? Send us a message.
    </p>

  </div>

  <div className="container d-flex justify-content-center">

    <div
      className="p-4 shadow bg-white rounded"
      style={{
        width: "100%",
        maxWidth: "900px"
      }}
    >

      <form onSubmit={handleSubmit}>

        <div className="row mb-3">

          <div className="col-md-6 mb-3">

            <label className="form-label fw-bold">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label fw-bold">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label fw-bold">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              className="form-control"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

          </div>

          <div className="col-md-6 mb-3">

            <label className="form-label fw-bold">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              className="form-control"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

          </div>

          <div className="col-12 mb-3">

            <label className="form-label fw-bold">
              Message
            </label>

            <textarea
              name="message"
              className="form-control"
              rows="4"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

          </div>

        </div>

        <div className="text-center">

          <button
            type="submit"
            className="btn btn-outline-danger px-4"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </div>

      </form>

      {message && (
        <div className="text-center mt-3">

          <p className="fw-bold text-danger mb-0">
            {message}
          </p>

        </div>
      )}

    </div>

  </div>

</section>

);
};

export default ContactUs;
