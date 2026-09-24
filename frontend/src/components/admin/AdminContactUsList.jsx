import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Landingpage/Navbar";

const AdminContactUsList = () => {

  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchContacts = async () => {
      try {

        const response = await fetch(
          "https://estatex-backend-j4i8.onrender.com/api/contact-us-list"
        );

        const result = await response.json();

        if (result.code === 200) {
          setContacts(result.data);
        } else {
          setError("Failed to fetch contact messages.");
        }

      } catch (err) {
        console.log(err);
        setError("Something went wrong while fetching messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();

  }, []);

  return (
    <>
      <Navbar />

      <section
        style={{
          backgroundColor: "#FFFFD0",
          minHeight: "100vh",
          padding: "60px 0"
        }}
      >
        <div className="container">

          <div className="text-center mb-4">
            <h2 className="fw-bold text-danger">
              Contact Messages
            </h2>

            <p className="text-muted">
              User contact messages
            </p>
          </div>

          {loading ? (

            <div className="text-center py-5">
              <div
                className="spinner-border text-danger"
                role="status"
              ></div>

              <p className="mt-3 text-muted">
                Loading messages...
              </p>
            </div>

          ) : error ? (

            <div className="alert alert-danger text-center">
              {error}
            </div>

          ) : contacts.length === 0 ? (

            <div className="card shadow-sm border-0">
              <div className="card-body text-center py-5">

                <h5 className="text-muted">
                  No contact messages found
                </h5>

                <p className="mb-0">
                  User submitted messages will appear here.
                </p>

              </div>
            </div>

          ) : (

            <div className="table-responsive bg-white rounded shadow">

              <table className="table table-bordered table-hover mb-0">

                <thead className="table-danger">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>

                  {contacts.map((contact, index) => (

                    <tr key={contact._id}>

                      <td>{index + 1}</td>

                      <td>
                        {contact.name}
                      </td>

                      <td>
                        {contact.email}
                      </td>

                      <td>
                        {contact.phone}
                      </td>

                      <td>
                        {contact.subject}
                      </td>

                      <td style={{ minWidth: "250px" }}>
                        {contact.message}
                      </td>

                      <td style={{ minWidth: "130px" }}>
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          )}

        </div>
      </section>
    </>
  );
};

export default AdminContactUsList;