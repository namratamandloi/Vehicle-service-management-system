import React, { useEffect, useState } from "react";
import { myAxios } from "../services/helper";

const AllMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");
        const response = await myAxios.get("/admin/messages", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setMessages(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load messages.");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading messages...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Messages</h2>
      <div className="table-responsive">
        <table
          className="table table-bordered table-hover shadow"
          style={{
            background: "#f7f7f7",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 6px 32px 0 rgba(44,62,80,0.10), 0 1.5px 4px 0 rgba(44,62,80,0.08)"
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#505050", color: "#fff" }}>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Message ID</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Name</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Email</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">No messages found.</td>
              </tr>
            ) : (
              messages.map((message) => (
                <tr key={message.id} style={{ background: "#fff" }}>
                  <td>{message.id}</td>
                  <td>{message.name || message.fullName}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMessages;