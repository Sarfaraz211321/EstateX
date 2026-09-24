import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../Landingpage/Navbar'

const  AdminContactUsList = () => {
  return (
    <>
    <Navbar/>
    <section style={{ backgroundColor: "#FFFFD0", padding: "60px 0" }}>
      <div className="container text-center mb-4">
        <h2 className="fw-bold text-danger">Contact Us!</h2>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="p-4 shadow bg-white rounded" style={{ width: "100%", maxWidth: "900px" }}>
          <form>
            <div className="row mb-3">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Your Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Phone Number</label>
                <input type="text" className="form-control" placeholder="Enter phone number" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea className="form-control" rows="4" placeholder="Your message"></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-outline-danger px-4">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default AdminContactUsList;