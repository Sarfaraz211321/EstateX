






import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = [
  {
    name: "Jacob William",
    role: "SELLING AGENTS",
    text: "Excellent service and smooth experience throughout the buying process. Truly reliable and transparent!.",
    image: "test.jpeg",
  },
  {
    name: "Kellan Anderson",
    role: "SELLING AGENTS",
    text: "Kellan was very professional and helped me find the perfect property within my budget. Highly recommended!.",
    image: "testi.webp",
  },
  {
    name: "Adam Joseph",
    role: "SELLING AGENTS",
    text: "The best real estate agent I’ve worked with — guided me through every step with honesty and patience.",
    image: "testj.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fdfdfd" }}>
      <div className="container text-center">
        <h6 className="text-danger fw-bold mb-2">Our Testimonial</h6>
        <h2 className="fw-bold mb-5">Clients Feedback</h2>
        <div className="row">
          {Testimonials.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="bg-white p-4 shadow-sm rounded h-100 position-relative testimonial-card"
                style={{
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <FaQuoteLeft className="fs-1 text-danger mb-3" />
                <p className="text-muted">{item.text}</p>
                <div className="d-flex align-items-center mt-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle me-3"
                    width="50"
                    height="50"
                  />
                  <div className="text-start">
                    <h6 className="mb-0 fw-bold">{item.name}</h6>
                    <small className="text-muted">{item.role}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;