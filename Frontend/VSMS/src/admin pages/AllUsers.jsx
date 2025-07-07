import React, { useEffect, useState } from "react";
import { myAxios } from "../services/helper";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");

        const token = localStorage.getItem("token");
        const response = await myAxios.get("/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsers(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">All Users</h2>
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
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>User ID</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Name</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Email</th>
              <th style={{ backgroundColor: "#505050", color: "#fff" }}>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-center">No users found.</td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id || user.userId} style={{ background: "#fff" }}>
                  <td>{user.id || user.userId}</td>
                  <td>{user.name || user.fullName}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;