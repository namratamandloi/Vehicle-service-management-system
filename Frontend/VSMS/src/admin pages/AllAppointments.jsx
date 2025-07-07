import React, { useEffect, useState } from "react";
import { myAxios } from "../services/helper";
import { toast } from "react-toastify";

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [newDate, setNewDate] = useState("");

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            const response = await myAxios.get("/admin/appointments", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAppointments(response.data);
        } catch (error) {
            toast.error("Failed to load appointments");
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
        if (!confirmDelete) return;

        try {
            const token = localStorage.getItem("token");
            await myAxios.delete(`/admin/appointments/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("Appointment deleted");
            fetchAppointments();
        } catch (error) {
            toast.error("Failed to delete appointment");
        }
    };

    const handleUpdate = async (id) => {
        if (!newDate) {
            toast.error("Please select a new date");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            await myAxios.put(
                `/admin/appointments/${id}/update-date`,
                { newAppointmentDate: newDate },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Appointment updated");
            setEditingId(null);
            setNewDate("");
            fetchAppointments();
        } catch (error) {
            toast.error("Failed to update appointment");
        }
    };

    if (loading) return <p>Loading appointments...</p>;

    return (
        <div className="container mt-5">
            <h2 className="mb-4 text-center">All Appointments</h2>
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
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>ID</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>User</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Service</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Date</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Vehicle Info</th>
                            <th style={{ backgroundColor: "#505050", color: "#fff" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    No appointments found.
                                </td>
                            </tr>
                        ) : (
                            appointments.map((appt) => (
                                <tr key={appt.id} style={{ background: "#fff" }}>
                                    <td>{appt.id}</td>
                                    <td>{appt.myUser?.name || "N/A"}</td>
                                    <td>{appt.serviceType}</td>
                                    <td>
                                        {editingId === appt.id ? (
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={newDate}
                                                onChange={(e) => setNewDate(e.target.value)}
                                            />
                                        ) : (
                                            appt.newAppointmentDate || appt.appointmentDate || "N/A"
                                        )}
                                    </td>
                                    <td>{appt.vehicleType || "N/A"}</td>
                                    <td>
                                        {editingId === appt.id ? (
                                            <>
                                                <button
                                                    className="btn btn-success btn-sm me-2"
                                                    onClick={() => handleUpdate(appt.id)}
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    className="btn btn-warning btn-sm"
                                                    onClick={() => setEditingId(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button
                                                    className="btn btn-primary btn-sm me-2"
                                                    onClick={() => {
                                                        setEditingId(appt.id);
                                                        setNewDate(appt.newAppointmentDate || appt.appointmentDate);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger btn-sm"
                                                    onClick={() => handleDelete(appt.id)}
                                                >
                                                    Delete
                                                </button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllAppointments;